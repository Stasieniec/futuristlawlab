'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTeamByEmail } from '@/lib/firestore/teams';
import { saveSubmission, getSubmissionByTeamId, uploadFile, type ProjectSubmission, type UploadedFile } from '@/lib/firestore/submissions';
import type { Team } from '@/types/team';
import { CHALLENGES } from '@/types/team';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubmissionForm from './components/SubmissionForm';

interface FileItem {
  file?: File;
  url: string;
  fileName: string;
}

interface FileUploadState {
  files: FileItem[];
  uploading: boolean;
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
  const [slides, setSlides] = useState<FileUploadState>({ files: [], uploading: false });
  const [videos, setVideos] = useState<FileUploadState>({ files: [], uploading: false });
  const [images, setImages] = useState<FileUploadState>({ files: [], uploading: false });
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
        // Load existing files (new array format)
        if (existing.slides && existing.slides.length > 0) {
          setSlides({ files: existing.slides.map(s => ({ url: s.url, fileName: s.fileName })), uploading: false });
        } else if (existing.slidesUrl) {
          // Legacy single file format
          setSlides({ files: [{ url: existing.slidesUrl, fileName: existing.slidesFileName || 'Uploaded slides' }], uploading: false });
        }
        if (existing.videos && existing.videos.length > 0) {
          setVideos({ files: existing.videos.map(v => ({ url: v.url, fileName: v.fileName })), uploading: false });
        } else if (existing.demoVideoUrl) {
          // Legacy single file format
          setVideos({ files: [{ url: existing.demoVideoUrl, fileName: existing.demoVideoFileName || 'Uploaded video' }], uploading: false });
        }
        if (existing.images && existing.images.length > 0) {
          setImages({ files: existing.images.map(i => ({ url: i.url, fileName: i.fileName })), uploading: false });
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
    type: 'slides' | 'video' | 'image'
  ) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length === 0) return;

    const newItems: FileItem[] = droppedFiles.map(file => ({
      file,
      url: '',
      fileName: file.name,
    }));

    if (type === 'slides') {
      setSlides(prev => ({ ...prev, files: [...prev.files, ...newItems] }));
    } else if (type === 'video') {
      setVideos(prev => ({ ...prev, files: [...prev.files, ...newItems] }));
    } else {
      setImages(prev => ({ ...prev, files: [...prev.files, ...newItems] }));
    }
  }, []);

  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'slides' | 'video' | 'image'
  ) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;

    const newItems: FileItem[] = selectedFiles.map(file => ({
      file,
      url: '',
      fileName: file.name,
    }));

    if (type === 'slides') {
      setSlides(prev => ({ ...prev, files: [...prev.files, ...newItems] }));
    } else if (type === 'video') {
      setVideos(prev => ({ ...prev, files: [...prev.files, ...newItems] }));
    } else {
      setImages(prev => ({ ...prev, files: [...prev.files, ...newItems] }));
    }

    // Reset input value to allow re-selecting the same file
    e.target.value = '';
  };

  const removeFile = (type: 'slides' | 'video' | 'image', index: number) => {
    if (type === 'slides') {
      setSlides(prev => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }));
    } else if (type === 'video') {
      setVideos(prev => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }));
    } else {
      setImages(prev => ({ ...prev, files: prev.files.filter((_, i) => i !== index) }));
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
    console.log('[SUBMIT] Slides files:', slides.files.length);
    console.log('[SUBMIT] Video files:', videos.files.length);
    console.log('[SUBMIT] Image files:', images.files.length);

    try {
      // Upload new slides files
      const uploadedSlides: UploadedFile[] = [];
      const newSlideFiles = slides.files.filter(f => f.file);
      const existingSlides = slides.files.filter(f => !f.file && f.url);

      if (newSlideFiles.length > 0) {
        setSlides(prev => ({ ...prev, uploading: true }));
        try {
          for (const item of newSlideFiles) {
            if (item.file) {
              const result = await uploadFile(team.id, item.file, 'slides');
              uploadedSlides.push(result);
            }
          }
        } catch (uploadErr) {
          setSlides(prev => ({ ...prev, uploading: false }));
          throw uploadErr;
        }
        setSlides(prev => ({ ...prev, uploading: false }));
      }
      const allSlides = [...existingSlides.map(s => ({ url: s.url, fileName: s.fileName })), ...uploadedSlides];

      // Upload new video files
      const uploadedVideos: UploadedFile[] = [];
      const newVideoFiles = videos.files.filter(f => f.file);
      const existingVideos = videos.files.filter(f => !f.file && f.url);

      if (newVideoFiles.length > 0) {
        setVideos(prev => ({ ...prev, uploading: true }));
        try {
          for (const item of newVideoFiles) {
            if (item.file) {
              const result = await uploadFile(team.id, item.file, 'video');
              uploadedVideos.push(result);
            }
          }
        } catch (uploadErr) {
          setVideos(prev => ({ ...prev, uploading: false }));
          throw uploadErr;
        }
        setVideos(prev => ({ ...prev, uploading: false }));
      }
      const allVideos = [...existingVideos.map(v => ({ url: v.url, fileName: v.fileName })), ...uploadedVideos];

      // Upload new image files
      const uploadedImages: UploadedFile[] = [];
      const newImageFiles = images.files.filter(f => f.file);
      const existingImages = images.files.filter(f => !f.file && f.url);

      if (newImageFiles.length > 0) {
        setImages(prev => ({ ...prev, uploading: true }));
        try {
          for (const item of newImageFiles) {
            if (item.file) {
              const result = await uploadFile(team.id, item.file, 'image');
              uploadedImages.push(result);
            }
          }
        } catch (uploadErr) {
          setImages(prev => ({ ...prev, uploading: false }));
          throw uploadErr;
        }
        setImages(prev => ({ ...prev, uploading: false }));
      }
      const allImages = [...existingImages.map(i => ({ url: i.url, fileName: i.fileName })), ...uploadedImages];

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
        slides: allSlides.length > 0 ? allSlides : undefined,
        videos: allVideos.length > 0 ? allVideos : undefined,
        images: allImages.length > 0 ? allImages : undefined,
      });

      // Update local state with uploaded files
      setSlides({ files: allSlides.map(s => ({ url: s.url, fileName: s.fileName })), uploading: false });
      setVideos({ files: allVideos.map(v => ({ url: v.url, fileName: v.fileName })), uploading: false });
      setImages({ files: allImages.map(i => ({ url: i.url, fileName: i.fileName })), uploading: false });

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
        slides: allSlides,
        videos: allVideos,
        images: allImages,
      });
    } catch (err) {
      console.error('Error submitting:', err);
      // Reset uploading states on error
      setSlides(prev => ({ ...prev, uploading: false }));
      setVideos(prev => ({ ...prev, uploading: false }));
      setImages(prev => ({ ...prev, uploading: false }));

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
    setSlides({ files: [], uploading: false });
    setVideos({ files: [], uploading: false });
    setImages({ files: [], uploading: false });
    setSuccess(false);
    setError('');
  };

  // Login form
  if (!team || !isTeamLead) {
    return (
      <div className="min-h-screen bg-white">
        <Header variant="minimal" />

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
        <SubmissionForm
          team={team}
          existingSubmission={existingSubmission}
          projectName={projectName}
          setProjectName={setProjectName}
          projectDescription={projectDescription}
          setProjectDescription={setProjectDescription}
          githubUrl={githubUrl}
          setGithubUrl={setGithubUrl}
          deployedUrl={deployedUrl}
          setDeployedUrl={setDeployedUrl}
          slides={slides}
          videos={videos}
          images={images}
          submitting={submitting}
          success={success}
          error={error}
          onSubmit={handleSubmit}
          onFileSelect={handleFileSelect}
          onFileDrop={handleFileDrop}
          onRemoveFile={removeFile}
        />
      </div>

      <Footer />
    </div>
  );
}
