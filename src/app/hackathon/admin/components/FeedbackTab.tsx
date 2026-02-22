'use client';

import type { HackathonFeedback } from '@/lib/firestore/feedback';

interface FeedbackTabProps {
  feedback: HackathonFeedback[];
  feedbackLoading: boolean;
  actionLoading: string | null;
  expandedFeedback: string | null;
  setExpandedFeedback: (email: string | null) => void;
  onRefresh: () => void;
  onExportCSV: () => void;
  onDeleteFeedback: (email: string, name: string) => void;
  getAverageRating: (key: keyof HackathonFeedback) => string | number;
}

export default function FeedbackTab({
  feedback,
  feedbackLoading,
  actionLoading,
  expandedFeedback,
  setExpandedFeedback,
  onRefresh,
  onExportCSV,
  onDeleteFeedback,
  getAverageRating,
}: FeedbackTabProps) {
  return (
    <>
      {/* Feedback Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">Total Responses</p>
          <p className="text-3xl font-bold text-slate-900">{feedback.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">Avg Overall Experience</p>
          <p className="text-3xl font-bold text-blue-700">{getAverageRating('overallExperience')}/5</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">Avg Mentorship</p>
          <p className="text-3xl font-bold text-blue-700">{getAverageRating('mentorshipRating')}/5</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">Would Participate Again</p>
          <p className="text-3xl font-bold text-green-600">
            {feedback.length > 0 ? Math.round((feedback.filter(f => f.wouldParticipateAgain === 'yes').length / feedback.length) * 100) : 0}%
          </p>
        </div>
      </div>

      {/* Feedback Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={onRefresh}
          disabled={feedbackLoading}
          className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
        >
          {feedbackLoading ? 'Refreshing...' : 'Refresh Feedback'}
        </button>
        <button
          onClick={onExportCSV}
          disabled={feedback.length === 0}
          className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition disabled:opacity-50"
        >
          Export to CSV
        </button>
      </div>

      {/* Feedback Table */}
      {feedbackLoading ? (
        <div className="text-center py-12">
          <svg className="animate-spin h-12 w-12 text-blue-700 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-slate-900 mt-4">Loading feedback...</p>
        </div>
      ) : feedback.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-xl">
          <p className="text-slate-900 text-lg">No feedback submitted yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {feedback.map((f) => {
            const isExpanded = expandedFeedback === f.email;
            return (
              <div key={f.email} className="bg-white rounded-xl shadow-sm border-2 border-slate-200 overflow-hidden">
                {/* Summary Row */}
                <button
                  onClick={() => setExpandedFeedback(isExpanded ? null : f.email)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <svg className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <div className="text-left">
                        <div className="font-semibold text-slate-900">{f.name}</div>
                        <div className="text-sm text-slate-500">{f.email}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-5 h-5 ${star <= f.overallExperience ? 'text-yellow-400' : 'text-slate-200'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      f.wouldParticipateAgain === 'yes' ? 'bg-green-100 text-green-700' :
                      f.wouldParticipateAgain === 'maybe' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {f.wouldParticipateAgain === 'yes' ? 'Would return' :
                       f.wouldParticipateAgain === 'maybe' ? 'Maybe' : 'Would not return'}
                    </span>
                    <span className="text-sm text-slate-500">
                      {f.submittedAt ? new Date(f.submittedAt).toLocaleDateString() : ''}
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
                          <h4 className="text-sm font-semibold text-slate-700 mb-1">How did you find out about the hackathon?</h4>
                          <p className="text-slate-900">{f.howFoundOut}{f.howFoundOutOther ? ` - ${f.howFoundOutOther}` : ''}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-1">What did you enjoy most?</h4>
                          <p className="text-slate-900">{f.enjoyedMost}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-1">What could be improved?</h4>
                          <p className="text-slate-900">{f.improvements}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-1">Most valuable learning</h4>
                          <p className="text-slate-900">{f.mostValuableLearning}</p>
                        </div>
                        {f.additionalComments && (
                          <div>
                            <h4 className="text-sm font-semibold text-slate-700 mb-1">Additional Comments</h4>
                            <p className="text-slate-900">{f.additionalComments}</p>
                          </div>
                        )}
                      </div>

                      {/* Right Column - Ratings */}
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Ratings</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">Mentorship</span>
                              <span className="font-semibold text-slate-900">{f.mentorshipRating}/5</span>
                            </div>
                            {f.mentorshipFeedback && (
                              <p className="text-sm text-slate-500 pl-2 border-l-2 border-slate-200">{f.mentorshipFeedback}</p>
                            )}
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">Resources & Support</span>
                              <span className="font-semibold text-slate-900">{f.resourcesRating}/5</span>
                            </div>
                            {f.resourcesFeedback && (
                              <p className="text-sm text-slate-500 pl-2 border-l-2 border-slate-200">{f.resourcesFeedback}</p>
                            )}
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">Logistics & Organisation</span>
                              <span className="font-semibold text-slate-900">{f.logisticsRating}/5</span>
                            </div>
                            {f.logisticsFeedback && (
                              <p className="text-sm text-slate-500 pl-2 border-l-2 border-slate-200">{f.logisticsFeedback}</p>
                            )}
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">Networking</span>
                              <span className="font-semibold text-slate-900">{f.networkingRating}/5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Delete Action */}
                    <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                      <button
                        onClick={() => onDeleteFeedback(f.email, f.name)}
                        disabled={actionLoading === `feedback-${f.email}`}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 font-medium rounded-lg transition text-sm disabled:opacity-50 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                        {actionLoading === `feedback-${f.email}` ? 'Deleting...' : 'Delete Feedback'}
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
