'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTeamByEmail } from '@/lib/firestore/teams';
import { saveSubmission, getSubmissionByTeamId, uploadFile, type ProjectSubmission } from '@/lib/firestore/submissions';
import type { Team } from '@/types/team';
import { CHALLENGES } from '@/types/team';

interface FileUpload {
  file: File | null;
  url: string;
  fileName: string;
  uploading: boolean;
  progress: number;
}

export default function SubmissionPage() {
  // Auth state
  const [email, setEmail] = useState('');
  const [team, setTeam] = useState<Team | null>(null);
  const [isTeamLead, setIsTeamLead] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Submission state
  const [existingSubmission, setExistingSubmission] = useState<ProjectSubmission | null>(null);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [deployedUrl, setDeployedUrl] = useState('');
  const [slides, setSlides] = useState<FileUpload>({ file: null, url: '', fileName: '', uploading: false, progress: 0 });
  const [demoVideo, setDemoVideo] = useState<FileUpload>({ file: null, url: '', fileName: '', uploading: false, progress: 0 });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Check localStorage for saved email
  useEffect(() => {
    const savedEmail = localStorage.getItem('hackathon_user_email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const normalizedEmail = email.toLowerCase().trim();
      const foundTeam = await getTeamByEmail(normalizedEmail);

      if (!foundTeam) {
        setError('No team found with this email. Please make sure you registered a team.');
        setLoading(false);
        return;
      }

      // Check if user is team lead
      const teamLeadMember = foundTeam.members.find(m => m.role === 'Team Lead');
      const isLead = teamLeadMember?.email.toLowerCase() === normalizedEmail;

      if (!isLead) {
        setError('Only the team lead can submit the project. Please ask your team lead to submit.');
        setLoading(false);
        return;
      }

      setTeam(foundTeam);
      setIsTeamLead(true);
      localStorage.setItem('hackathon_user_email', normalizedEmail);

      // Check for existing submission
      const existing = await getSubmissionByTeamId(foundTeam.id);
      if (existing) {
        setExistingSubmission(existing);
        setProjectName(existing.projectName);
        setProjectDescription(existing.projectDescription);
        setGithubUrl(existing.githubUrl || '');
        setDeployedUrl(existing.deployedUrl || '');
        if (existing.slidesUrl) {
          setSlides({ file: null, url: existing.slidesUrl, fileName: existing.slidesFileName || 'Uploaded slides', uploading: false, progress: 100 });
        }
        if (existing.demoVideoUrl) {
          setDemoVideo({ file: null, url: existing.demoVideoUrl, fileName: existing.demoVideoFileName || 'Uploaded video', uploading: false, progress: 100 });
        }
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Failed to find your team. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileDrop = useCallback((
    e: React.DragEvent<HTMLDivElement>,
    type: 'slides' | 'video'
  ) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      if (type === 'slides') {
        setSlides({ file, url: '', fileName: file.name, uploading: false, progress: 0 });
      } else {
        setDemoVideo({ file, url: '', fileName: file.name, uploading: false, progress: 0 });
      }
    }
  }, []);

  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'slides' | 'video'
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'slides') {
        setSlides({ file, url: '', fileName: file.name, uploading: false, progress: 0 });
      } else {
        setDemoVideo({ file, url: '', fileName: file.name, uploading: false, progress: 0 });
      }
    }
  };

  const removeFile = (type: 'slides' | 'video') => {
    if (type === 'slides') {
      setSlides({ file: null, url: '', fileName: '', uploading: false, progress: 0 });
    } else {
      setDemoVideo({ file: null, url: '', fileName: '', uploading: false, progress: 0 });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!team) return;

    // Validation
    if (!projectName.trim()) {
      setError('Please enter a project name.');
      return;
    }
    if (!projectDescription.trim()) {
      setError('Please enter a project description.');
      return;
    }

    setSubmitting(true);
    setError('');

    console.log('[SUBMIT] Starting submission process...');
    console.log('[SUBMIT] Team ID:', team.id);
    console.log('[SUBMIT] Has slides file:', !!slides.file, slides.file?.name, slides.file?.size);
    console.log('[SUBMIT] Has video file:', !!demoVideo.file, demoVideo.file?.name, demoVideo.file?.size);

    try {
      let slidesUrl = slides.url;
      let slidesFileName = slides.fileName;
      let demoVideoUrl = demoVideo.url;
      let demoVideoFileName = demoVideo.fileName;

      // Upload slides if new file selected
      if (slides.file) {
        console.log('[SUBMIT] Starting slides upload...');
        setSlides(prev => ({ ...prev, uploading: true }));
        try {
          const result = await uploadFile(team.id, slides.file, 'slides');
          console.log('[SUBMIT] Slides upload complete:', result);
          slidesUrl = result.url;
          slidesFileName = result.fileName;
          setSlides(prev => ({ ...prev, uploading: false, url: result.url, progress: 100 }));
        } catch (uploadErr) {
          console.error('[SUBMIT] Slides upload failed:', uploadErr);
          setSlides(prev => ({ ...prev, uploading: false }));
          throw uploadErr;
        }
      }

      // Upload video if new file selected
      if (demoVideo.file) {
        console.log('[SUBMIT] Starting video upload...');
        setDemoVideo(prev => ({ ...prev, uploading: true }));
        try {
          const result = await uploadFile(team.id, demoVideo.file, 'video');
          console.log('[SUBMIT] Video upload complete:', result);
          demoVideoUrl = result.url;
          demoVideoFileName = result.fileName;
          setDemoVideo(prev => ({ ...prev, uploading: false, url: result.url, progress: 100 }));
        } catch (uploadErr) {
          console.error('[SUBMIT] Video upload failed:', uploadErr);
          setDemoVideo(prev => ({ ...prev, uploading: false }));
          throw uploadErr;
        }
      }

      const challengeName = CHALLENGES.find(c => c.id === team.challenge)?.name || team.challenge;

      await saveSubmission({
        teamId: team.id,
        teamName: team.teamName,
        challenge: challengeName,
        teamLeadEmail: email.toLowerCase().trim(),
        projectName: projectName.trim(),
        projectDescription: projectDescription.trim(),
        githubUrl: githubUrl.trim() || undefined,
        deployedUrl: deployedUrl.trim() || undefined,
        slidesUrl: slidesUrl || undefined,
        slidesFileName: slidesFileName || undefined,
        demoVideoUrl: demoVideoUrl || undefined,
        demoVideoFileName: demoVideoFileName || undefined,
      });

      setSuccess(true);
      setExistingSubmission({
        teamId: team.id,
        teamName: team.teamName,
        challenge: challengeName,
        teamLeadEmail: email,
        projectName: projectName.trim(),
        projectDescription: projectDescription.trim(),
        githubUrl: githubUrl.trim(),
        deployedUrl: deployedUrl.trim(),
        slidesUrl,
        slidesFileName,
        demoVideoUrl,
        demoVideoFileName,
      });
    } catch (err) {
      console.error('Error submitting:', err);
      // Reset uploading states on error
      setSlides(prev => ({ ...prev, uploading: false }));
      setDemoVideo(prev => ({ ...prev, uploading: false }));

      // Provide more descriptive error message
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit. Please try again.';
      if (errorMessage.includes('storage') || errorMessage.includes('Storage')) {
        setError('File upload failed. Please try again or contact the organizers if the issue persists.');
      } else {
        setError(errorMessage);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = () => {
    setTeam(null);
    setIsTeamLead(false);
    setExistingSubmission(null);
    setProjectName('');
    setProjectDescription('');
    setGithubUrl('');
    setDeployedUrl('');
    setSlides({ file: null, url: '', fileName: '', uploading: false, progress: 0 });
    setDemoVideo({ file: null, url: '', fileName: '', uploading: false, progress: 0 });
    setSuccess(false);
    setError('');
  };

  // Login form
  if (!team || !isTeamLead) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 relative mr-3">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Futurist Law Lab Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="font-bold text-2xl text-blue-700">Futurist Law Lab</div>
              </Link>
            </nav>
          </div>
        </header>

        {/* Login Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Project Submission</h1>
                  <p className="text-slate-600">Sign in with your team lead email to submit your project</p>
                </div>

                {error && (
                  <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-slate-900 font-medium mb-2">
                      Team Lead Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                      placeholder="Enter your email"
                      required
                    />
                    <p className="text-sm text-slate-500 mt-2">
                      Only team leads can submit projects
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {loading ? 'Finding your team...' : 'Access Submission Form'}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link href="/hackathon" className="text-blue-700 hover:text-blue-800 text-sm font-medium">
                    &larr; Back to Hackathon Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Submission form
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 relative mr-3">
                <Image
                  src="/images/logo.jpeg"
                  alt="Futurist Law Lab Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="font-bold text-2xl text-blue-700">Project Submission</div>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-slate-600 hover:bg-slate-100 font-medium rounded-lg transition"
            >
              Sign Out
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Team Info Banner */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {team.teamName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{team.teamName}</h2>
                <p className="text-slate-600">
                  {CHALLENGES.find(c => c.id === team.challenge)?.name || 'Challenge not selected'}
                </p>
              </div>
              {existingSubmission && (
                <div className="ml-auto">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Submitted
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="text-green-800 font-semibold">Submission Successful!</h3>
                  <p className="text-green-700 text-sm mt-1">
                    Your project has been submitted. You can update your submission at any time before the deadline.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Name */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <label htmlFor="projectName" className="block text-lg font-semibold text-slate-900 mb-2">
                Project Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                placeholder="Enter your project name"
                required
              />
            </div>

            {/* Project Description */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <label htmlFor="projectDescription" className="block text-lg font-semibold text-slate-900 mb-2">
                Project Description <span className="text-red-500">*</span>
              </label>
              <p className="text-slate-600 text-sm mb-3">
                Describe the problem you&apos;re solving and how your solution works.
              </p>
              <textarea
                id="projectDescription"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900 resize-none"
                placeholder="Describe your problem and solution..."
                required
              />
            </div>

            {/* GitHub URL */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <label htmlFor="githubUrl" className="block text-lg font-semibold text-slate-900 mb-2">
                GitHub Repository
              </label>
              <p className="text-slate-600 text-sm mb-3">
                Link to your project&apos;s source code.
                <span className="block mt-1 text-amber-600 font-medium">
                  Note: Please make sure your repository is public so judges can access it.
                </span>
              </p>
              <input
                type="url"
                id="githubUrl"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                placeholder="https://github.com/username/repository"
              />
            </div>

            {/* Deployed URL */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <label htmlFor="deployedUrl" className="block text-lg font-semibold text-slate-900 mb-2">
                Deployed Website / Demo Link
              </label>
              <p className="text-slate-600 text-sm mb-3">
                Link to your deployed application, if applicable.
              </p>
              <input
                type="url"
                id="deployedUrl"
                value={deployedUrl}
                onChange={(e) => setDeployedUrl(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                placeholder="https://your-project.lovable.app or https://your-project.vercel.app"
              />
            </div>

            {/* Presentation Slides */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <label className="block text-lg font-semibold text-slate-900 mb-2">
                Presentation Slides
              </label>
              <p className="text-slate-600 text-sm mb-4">
                Upload your presentation slides (PDF, PowerPoint, or similar). Max 100MB.
              </p>

              {slides.url || slides.file ? (
                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{slides.fileName}</p>
                      {slides.uploading && <p className="text-sm text-blue-600">Uploading...</p>}
                      {slides.url && <p className="text-sm text-green-600">Uploaded successfully</p>}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile('slides')}
                    className="text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleFileDrop(e, 'slides')}
                  className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-500 transition cursor-pointer"
                >
                  <input
                    type="file"
                    id="slides"
                    onChange={(e) => handleFileSelect(e, 'slides')}
                    accept=".pdf,.ppt,.pptx,.key"
                    className="hidden"
                  />
                  <label htmlFor="slides" className="cursor-pointer">
                    <svg className="w-12 h-12 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="text-slate-600 font-medium">
                      Drag and drop your slides here, or <span className="text-blue-700">browse</span>
                    </p>
                    <p className="text-slate-500 text-sm mt-1">PDF, PPT, PPTX, or Keynote</p>
                  </label>
                </div>
              )}
            </div>

            {/* Demo Video */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
              <label className="block text-lg font-semibold text-slate-900 mb-2">
                Demo Video
              </label>
              <p className="text-slate-600 text-sm mb-4">
                Upload a demo video of your project, if applicable. Max 100MB.
              </p>

              {demoVideo.url || demoVideo.file ? (
                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{demoVideo.fileName}</p>
                      {demoVideo.uploading && <p className="text-sm text-purple-600">Uploading...</p>}
                      {demoVideo.url && <p className="text-sm text-green-600">Uploaded successfully</p>}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile('video')}
                    className="text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleFileDrop(e, 'video')}
                  className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-purple-500 transition cursor-pointer"
                >
                  <input
                    type="file"
                    id="demoVideo"
                    onChange={(e) => handleFileSelect(e, 'video')}
                    accept="video/*"
                    className="hidden"
                  />
                  <label htmlFor="demoVideo" className="cursor-pointer">
                    <svg className="w-12 h-12 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    <p className="text-slate-600 font-medium">
                      Drag and drop your video here, or <span className="text-purple-700">browse</span>
                    </p>
                    <p className="text-slate-500 text-sm mt-1">MP4, MOV, AVI, or WebM</p>
                  </label>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitting || slides.uploading || demoVideo.uploading}
                className="flex-1 px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {slides.uploading || demoVideo.uploading ? 'Uploading files...' : 'Submitting...'}
                  </span>
                ) : existingSubmission ? (
                  'Update Submission'
                ) : (
                  'Submit Project'
                )}
              </button>
            </div>

            <p className="text-center text-slate-500 text-sm">
              You can update your submission at any time before the deadline.
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Futurist Law Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
