'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { saveFeedback, hasFeedback } from '@/lib/firestore/feedback';

type FormData = {
  email: string;
  name: string;
  howFoundOut: string;
  howFoundOutOther: string;
  overallExperience: number;
  enjoyedMost: string;
  improvements: string;
  mentorshipRating: number;
  mentorshipFeedback: string;
  resourcesRating: number;
  resourcesFeedback: string;
  logisticsRating: number;
  logisticsFeedback: string;
  networkingRating: number;
  mostValuableLearning: string;
  wouldParticipateAgain: 'yes' | 'no' | 'maybe' | '';
  additionalComments: string;
};

const initialFormData: FormData = {
  email: '',
  name: '',
  howFoundOut: '',
  howFoundOutOther: '',
  overallExperience: 0,
  enjoyedMost: '',
  improvements: '',
  mentorshipRating: 0,
  mentorshipFeedback: '',
  resourcesRating: 0,
  resourcesFeedback: '',
  logisticsRating: 0,
  logisticsFeedback: '',
  networkingRating: 0,
  mostValuableLearning: '',
  wouldParticipateAgain: '',
  additionalComments: '',
};

const howFoundOutOptions = [
  'LinkedIn',
  'Luma',
  'Email',
  'Student association/university',
  'Friends and colleagues',
  'Community',
  'Other',
];

export default function FeedbackPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  // Load email from localStorage if available
  useEffect(() => {
    const savedEmail = localStorage.getItem('hackathon_user_email');
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
    }
  }, []);

  const validateForm = (): string | null => {
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format';
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.howFoundOut) return 'Please select how you found out about the hackathon';
    if (formData.howFoundOut === 'Other' && !formData.howFoundOutOther.trim()) {
      return 'Please specify how you found out about the hackathon';
    }
    if (!formData.overallExperience) return 'Please rate your overall experience';
    if (!formData.enjoyedMost.trim()) return 'Please share what you enjoyed most';
    if (!formData.improvements.trim()) return 'Please share what could be improved';
    if (!formData.mentorshipRating) return 'Please rate the mentorship';
    if (!formData.resourcesRating) return 'Please rate the resources and support';
    if (!formData.logisticsRating) return 'Please rate the logistics and organisation';
    if (!formData.networkingRating) return 'Please rate the networking opportunities';
    if (!formData.mostValuableLearning.trim()) return 'Please share the most valuable thing you learned';
    if (!formData.wouldParticipateAgain) return 'Please indicate if you would participate again';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      // Check if already submitted
      const exists = await hasFeedback(formData.email);
      if (exists) {
        setAlreadySubmitted(true);
        setLoading(false);
        return;
      }

      await saveFeedback({
        email: formData.email,
        name: formData.name,
        howFoundOut: formData.howFoundOut,
        howFoundOutOther: formData.howFoundOut === 'Other' ? formData.howFoundOutOther : undefined,
        overallExperience: formData.overallExperience,
        enjoyedMost: formData.enjoyedMost,
        improvements: formData.improvements,
        mentorshipRating: formData.mentorshipRating,
        mentorshipFeedback: formData.mentorshipFeedback || undefined,
        resourcesRating: formData.resourcesRating,
        resourcesFeedback: formData.resourcesFeedback || undefined,
        logisticsRating: formData.logisticsRating,
        logisticsFeedback: formData.logisticsFeedback || undefined,
        networkingRating: formData.networkingRating,
        mostValuableLearning: formData.mostValuableLearning,
        wouldParticipateAgain: formData.wouldParticipateAgain as 'yes' | 'no' | 'maybe',
        additionalComments: formData.additionalComments || undefined,
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError('Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const RatingScale = ({
    value,
    onChange,
    lowLabel,
    highLabel,
  }: {
    value: number;
    onChange: (val: number) => void;
    lowLabel: string;
    highLabel: string;
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-slate-500">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => onChange(num)}
            className={`flex-1 py-3 rounded-lg font-medium transition ${
              value === num
                ? 'bg-blue-700 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You, {formData.name}!</h1>
          <p className="text-slate-600 mb-8">
            Your feedback has been submitted successfully. We appreciate you taking the time to help us improve future hackathons.
          </p>
          <Link
            href="/hackathon"
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
          >
            Back to Hackathon Page
          </Link>
        </div>
      </div>
    );
  }

  if (alreadySubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Already Submitted</h1>
          <p className="text-slate-600 mb-8">
            You have already submitted feedback with this email address. Thank you for your participation!
          </p>
          <Link
            href="/hackathon"
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
          >
            Back to Hackathon Page
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Form Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Legal Hackathon Feedback Form
              </h1>
              <p className="text-slate-600">
                Thank you for participating in the Legal Hackathon! Your feedback is important to us and will help us improve future events.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              {/* Email & Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                    placeholder="your@email.com"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                    placeholder="Your name"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Q1: How did you find out */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  1. How did you find out about the Hackathon? <span className="text-red-500">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {howFoundOutOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, howFoundOut: option })}
                      className={`px-4 py-3 rounded-lg font-medium text-left transition ${
                        formData.howFoundOut === option
                          ? 'bg-blue-700 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      disabled={loading}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {formData.howFoundOut === 'Other' && (
                  <input
                    type="text"
                    value={formData.howFoundOutOther}
                    onChange={(e) => setFormData({ ...formData, howFoundOutOther: e.target.value })}
                    className="mt-3 w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                    placeholder="Please specify..."
                    disabled={loading}
                  />
                )}
              </div>

              {/* Q2: Overall Experience */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  2. How would you rate your overall experience? <span className="text-red-500">*</span>
                </label>
                <RatingScale
                  value={formData.overallExperience}
                  onChange={(val) => setFormData({ ...formData, overallExperience: val })}
                  lowLabel="Very poor"
                  highLabel="Excellent"
                />
              </div>

              {/* Q3: What enjoyed most */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  3. What did you enjoy most about the Hackathon? <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.enjoyedMost}
                  onChange={(e) => setFormData({ ...formData, enjoyedMost: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900 min-h-[100px]"
                  placeholder="Please be specific..."
                  disabled={loading}
                />
              </div>

              {/* Q4: Improvements */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  4. What aspects of the Hackathon could be improved? <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.improvements}
                  onChange={(e) => setFormData({ ...formData, improvements: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900 min-h-[100px]"
                  placeholder="Please be specific..."
                  disabled={loading}
                />
              </div>

              {/* Q5: Mentorship */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  5. How helpful did you find the mentorship? <span className="text-red-500">*</span>
                </label>
                <RatingScale
                  value={formData.mentorshipRating}
                  onChange={(val) => setFormData({ ...formData, mentorshipRating: val })}
                  lowLabel="Not helpful at all"
                  highLabel="Very helpful"
                />
                <textarea
                  value={formData.mentorshipFeedback}
                  onChange={(e) => setFormData({ ...formData, mentorshipFeedback: e.target.value })}
                  className="mt-3 w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                  placeholder="Any specific feedback on the mentorship? (optional)"
                  rows={2}
                  disabled={loading}
                />
              </div>

              {/* Q6: Resources and Support */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  6. How satisfied were you with the resources and support? <span className="text-red-500">*</span>
                </label>
                <RatingScale
                  value={formData.resourcesRating}
                  onChange={(val) => setFormData({ ...formData, resourcesRating: val })}
                  lowLabel="Not satisfied at all"
                  highLabel="Very satisfied"
                />
                <textarea
                  value={formData.resourcesFeedback}
                  onChange={(e) => setFormData({ ...formData, resourcesFeedback: e.target.value })}
                  className="mt-3 w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                  placeholder="Any comments or suggestions? (optional)"
                  rows={2}
                  disabled={loading}
                />
              </div>

              {/* Q7: Logistics */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  7. How would you rate the logistics and organisation? <span className="text-red-500">*</span>
                </label>
                <RatingScale
                  value={formData.logisticsRating}
                  onChange={(val) => setFormData({ ...formData, logisticsRating: val })}
                  lowLabel="Not good at all"
                  highLabel="Very good"
                />
                <textarea
                  value={formData.logisticsFeedback}
                  onChange={(e) => setFormData({ ...formData, logisticsFeedback: e.target.value })}
                  className="mt-3 w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                  placeholder="Any feedback on logistics and organization? (optional)"
                  rows={2}
                  disabled={loading}
                />
              </div>

              {/* Q8: Networking */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  8. How valuable did you find the networking opportunities? <span className="text-red-500">*</span>
                </label>
                <RatingScale
                  value={formData.networkingRating}
                  onChange={(val) => setFormData({ ...formData, networkingRating: val })}
                  lowLabel="Not valuable at all"
                  highLabel="Very valuable"
                />
                <div className="mt-4">
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    What was the most valuable thing you learned or gained? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.mostValuableLearning}
                    onChange={(e) => setFormData({ ...formData, mostValuableLearning: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                    placeholder="Share your key takeaways..."
                    rows={3}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Q9: Would participate again */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  9. Would you participate in a future Legal Hackathon? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'yes', label: 'Yes' },
                    { value: 'no', label: 'No' },
                    { value: 'maybe', label: 'Maybe' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, wouldParticipateAgain: option.value as 'yes' | 'no' | 'maybe' })}
                      className={`flex-1 px-4 py-3 rounded-lg font-medium transition ${
                        formData.wouldParticipateAgain === option.value
                          ? 'bg-blue-700 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      disabled={loading}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Any other comments or suggestions?
                </label>
                <textarea
                  value={formData.additionalComments}
                  onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                  placeholder="We'd love to hear more... (optional)"
                  rows={3}
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>

            {/* Back Link */}
            <div className="text-center mt-6">
              <Link
                href="/hackathon"
                className="text-blue-700 hover:text-blue-800 font-medium transition"
              >
                &larr; Back to Hackathon Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
