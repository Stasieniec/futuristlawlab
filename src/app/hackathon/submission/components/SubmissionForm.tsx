'use client';

import React from 'react';
import type { Team } from '@/types/team';
import type { ProjectSubmission } from '@/lib/firestore/submissions';
import { CHALLENGES } from '@/types/team';
import AlertBanner from '@/components/ui/AlertBanner';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import FileUploadField from './FileUploadField';

interface FileItem {
  file?: File;
  url: string;
  fileName: string;
}

interface FileUploadState {
  files: FileItem[];
  uploading: boolean;
}

interface SubmissionFormProps {
  team: Team;
  existingSubmission: ProjectSubmission | null;
  projectName: string;
  setProjectName: (value: string) => void;
  projectDescription: string;
  setProjectDescription: (value: string) => void;
  githubUrl: string;
  setGithubUrl: (value: string) => void;
  deployedUrl: string;
  setDeployedUrl: (value: string) => void;
  slides: FileUploadState;
  videos: FileUploadState;
  images: FileUploadState;
  submitting: boolean;
  success: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>, type: 'slides' | 'video' | 'image') => void;
  onFileDrop: (e: React.DragEvent<HTMLDivElement>, type: 'slides' | 'video' | 'image') => void;
  onRemoveFile: (type: 'slides' | 'video' | 'image', index: number) => void;
}

export default function SubmissionForm({
  team,
  existingSubmission,
  projectName,
  setProjectName,
  projectDescription,
  setProjectDescription,
  githubUrl,
  setGithubUrl,
  deployedUrl,
  setDeployedUrl,
  slides,
  videos,
  images,
  submitting,
  success,
  error,
  onSubmit,
  onFileSelect,
  onFileDrop,
  onRemoveFile,
}: SubmissionFormProps) {
  return (
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
        <AlertBanner
          type="success"
          message="Your project has been submitted. You can update your submission at any time before the deadline."
        />
      )}

      {/* Error Message */}
      {error && (
        <AlertBanner type="error" message={error} />
      )}

      {/* Submission Form */}
      <form onSubmit={onSubmit} className="space-y-8">
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

        {/* Judging Materials Notice */}
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">Materials for Judging</h3>
              <p className="text-amber-700 text-sm">
                The files you upload below will be reviewed by our judges to evaluate your project. Please ensure all materials clearly demonstrate your solution, its functionality, and its potential impact.
              </p>
            </div>
          </div>
        </div>

        {/* Presentation Slides */}
        <FileUploadField
          label="Presentation Slides"
          description={
            <p className="text-slate-600 text-sm mb-4">
              Upload your presentation slides (PDF, PowerPoint, or similar). You can upload multiple files. Please keep file sizes reasonable.
            </p>
          }
          accept=".pdf,.ppt,.pptx,.key"
          files={slides.files}
          uploading={slides.uploading}
          onAddFile={(e) => onFileSelect(e, 'slides')}
          onRemoveFile={(index) => onRemoveFile('slides', index)}
          onDrop={(e) => onFileDrop(e, 'slides')}
          disabled={submitting}
          inputId="slides"
          addMoreText="Add more slides"
          emptyText="Drag and drop your slides here"
          fileTypeHint="PDF, PPT, PPTX, or Keynote"
          accentColor="blue"
          fileIcon={
            <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
            </svg>
          }
          dropZoneIcon={
            <svg className="w-10 h-10 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
          }
        />

        {/* Demo Videos */}
        <FileUploadField
          label="Demo Videos"
          description={
            <>
              <p className="text-slate-600 text-sm mb-2">
                Upload demo videos of your project. You can upload multiple videos. Please keep file sizes reasonable.
              </p>
              <p className="text-blue-700 text-sm mb-4 bg-blue-50 px-3 py-2 rounded-lg">
                <strong>Tip:</strong> We highly recommend including a short 30–40 second video walkthrough of your product. A concise demo helps judges quickly understand your solution and can significantly strengthen your submission.
              </p>
            </>
          }
          accept="video/*"
          files={videos.files}
          uploading={videos.uploading}
          onAddFile={(e) => onFileSelect(e, 'video')}
          onRemoveFile={(index) => onRemoveFile('video', index)}
          onDrop={(e) => onFileDrop(e, 'video')}
          disabled={submitting}
          inputId="demoVideo"
          addMoreText="Add more videos"
          emptyText="Drag and drop your videos here"
          fileTypeHint="MP4, MOV, AVI, or WebM"
          accentColor="purple"
          fileIcon={
            <svg className="w-4 h-4 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
          }
          dropZoneIcon={
            <svg className="w-10 h-10 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
          }
        />

        {/* Images / Screenshots */}
        <FileUploadField
          label="Images / Screenshots"
          description={
            <p className="text-slate-600 text-sm mb-4">
              Upload screenshots or images of your project. You can upload multiple images. Please keep file sizes reasonable.
            </p>
          }
          accept="image/*"
          files={images.files}
          uploading={images.uploading}
          onAddFile={(e) => onFileSelect(e, 'image')}
          onRemoveFile={(index) => onRemoveFile('image', index)}
          onDrop={(e) => onFileDrop(e, 'image')}
          disabled={submitting}
          inputId="images"
          addMoreText="Add more images"
          emptyText="Drag and drop your images here"
          fileTypeHint="PNG, JPG, GIF, or WebP"
          accentColor="green"
          fileIcon={
            <svg className="w-4 h-4 text-green-700" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
            </svg>
          }
          dropZoneIcon={
            <svg className="w-10 h-10 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          }
        />

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={submitting || slides.uploading || videos.uploading || images.uploading}
            className="flex-1 px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <LoadingSpinner
                message={slides.uploading || videos.uploading || images.uploading ? 'Uploading files...' : 'Submitting...'}
              />
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
  );
}
