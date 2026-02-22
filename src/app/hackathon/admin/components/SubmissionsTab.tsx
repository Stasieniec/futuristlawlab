'use client';

import type { ProjectSubmission } from '@/lib/firestore/submissions';

interface SubmissionsTabProps {
  submissions: ProjectSubmission[];
  submissionsLoading: boolean;
  actionLoading: string | null;
  expandedSubmission: string | null;
  setExpandedSubmission: (teamId: string | null) => void;
  onRefresh: () => void;
  onExportCSV: () => void;
  onDeleteSubmission: (teamId: string, teamName: string) => void;
}

export default function SubmissionsTab({
  submissions,
  submissionsLoading,
  actionLoading,
  expandedSubmission,
  setExpandedSubmission,
  onRefresh,
  onExportCSV,
  onDeleteSubmission,
}: SubmissionsTabProps) {
  return (
    <>
      {/* Submissions Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">Total Submissions</p>
          <p className="text-3xl font-bold text-slate-900">{submissions.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">With GitHub Link</p>
          <p className="text-3xl font-bold text-blue-700">{submissions.filter(s => s.githubUrl).length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">With Demo Video</p>
          <p className="text-3xl font-bold text-purple-700">{submissions.filter(s => (s.videos && s.videos.length > 0) || s.demoVideoUrl).length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">With Images</p>
          <p className="text-3xl font-bold text-green-700">{submissions.filter(s => s.images && s.images.length > 0).length}</p>
        </div>
      </div>

      {/* Submissions Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={onRefresh}
          disabled={submissionsLoading}
          className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
        >
          {submissionsLoading ? 'Refreshing...' : 'Refresh Submissions'}
        </button>
        <button
          onClick={onExportCSV}
          disabled={submissions.length === 0}
          className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition disabled:opacity-50"
        >
          Export to CSV
        </button>
      </div>

      {/* Submissions List */}
      {submissionsLoading ? (
        <div className="text-center py-12">
          <svg className="animate-spin h-12 w-12 text-blue-700 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-slate-900 mt-4">Loading submissions...</p>
        </div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-xl">
          <p className="text-slate-900 text-lg">No submissions yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((s) => {
            const isExpanded = expandedSubmission === s.teamId;
            return (
              <div key={s.teamId} className="bg-white rounded-xl shadow-sm border-2 border-slate-200 overflow-hidden">
                {/* Summary Row */}
                <button
                  onClick={() => setExpandedSubmission(isExpanded ? null : s.teamId)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <svg className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div className="text-left">
                        <div className="font-semibold text-slate-900">{s.teamName}</div>
                        <div className="text-sm text-slate-500">{s.projectName}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      {s.challenge}
                    </span>
                    <div className="flex items-center gap-2">
                      {s.githubUrl && (
                        <span className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center" title="GitHub">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </span>
                      )}
                      {s.deployedUrl && (
                        <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center" title="Deployed">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      )}
                      {((s.slides && s.slides.length > 0) || s.slidesUrl) && (
                        <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center" title={`Slides${s.slides ? ` (${s.slides.length})` : ''}`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      )}
                      {((s.videos && s.videos.length > 0) || s.demoVideoUrl) && (
                        <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center" title={`Videos${s.videos ? ` (${s.videos.length})` : ''}`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                          </svg>
                        </span>
                      )}
                      {s.images && s.images.length > 0 && (
                        <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center" title={`Images (${s.images.length})`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-slate-500">
                      {s.submittedAt ? new Date(s.submittedAt).toLocaleDateString() : ''}
                    </span>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-1">Project Name</h4>
                          <p className="text-slate-900">{s.projectName}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-1">Description</h4>
                          <p className="text-slate-900 whitespace-pre-wrap">{s.projectDescription}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-1">Team Lead</h4>
                          <p className="text-slate-900">{s.teamLeadEmail}</p>
                        </div>
                      </div>

                      {/* Right Column - Links */}
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Resources</h4>
                          <div className="space-y-3">
                            {s.githubUrl && (
                              <a href={s.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-800">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub Repository
                              </a>
                            )}
                            {s.deployedUrl && (
                              <a href={s.deployedUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-700 hover:text-green-800">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                                </svg>
                                Deployed Website
                              </a>
                            )}

                            {/* Slides - support both array and legacy single file */}
                            {s.slides && s.slides.length > 0 ? (
                              <div>
                                <p className="text-sm font-medium text-slate-700 mb-1">Slides ({s.slides.length})</p>
                                <div className="space-y-1 pl-2">
                                  {s.slides.map((slide, idx) => (
                                    <a key={idx} href={slide.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                                      </svg>
                                      {slide.fileName}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ) : s.slidesUrl && (
                              <a href={s.slidesUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                                </svg>
                                Presentation Slides ({s.slidesFileName})
                              </a>
                            )}

                            {/* Videos - support both array and legacy single file */}
                            {s.videos && s.videos.length > 0 ? (
                              <div>
                                <p className="text-sm font-medium text-slate-700 mb-1">Videos ({s.videos.length})</p>
                                <div className="space-y-1 pl-2">
                                  {s.videos.map((video, idx) => (
                                    <a key={idx} href={video.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                      </svg>
                                      {video.fileName}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ) : s.demoVideoUrl && (
                              <a href={s.demoVideoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Demo Video ({s.demoVideoFileName})
                              </a>
                            )}

                            {/* Images */}
                            {s.images && s.images.length > 0 && (
                              <div>
                                <p className="text-sm font-medium text-slate-700 mb-1">Images ({s.images.length})</p>
                                <div className="space-y-1 pl-2">
                                  {s.images.map((image, idx) => (
                                    <a key={idx} href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                                      </svg>
                                      {image.fileName}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}

                            {!s.githubUrl && !s.deployedUrl && !s.slidesUrl && !s.demoVideoUrl && (!s.slides || s.slides.length === 0) && (!s.videos || s.videos.length === 0) && (!s.images || s.images.length === 0) && (
                              <p className="text-slate-500 text-sm">No resources uploaded</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Delete Action */}
                    <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                      <button
                        onClick={() => onDeleteSubmission(s.teamId, s.teamName)}
                        disabled={actionLoading === `submission-${s.teamId}`}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 font-medium rounded-lg transition text-sm disabled:opacity-50 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                        {actionLoading === `submission-${s.teamId}` ? 'Deleting...' : 'Delete Submission'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
