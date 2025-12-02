'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { hasFeedback } from '@/lib/firestore/feedback';

export default function HackathonPhotosPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [checked, setChecked] = useState(false);
  const [hasCompletedFeedback, setHasCompletedFeedback] = useState(false);

  // Load email from localStorage if available
  useEffect(() => {
    const savedEmail = localStorage.getItem('hackathon_user_email');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setChecked(false);

    // Validate email
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format');
      return;
    }

    setLoading(true);

    try {
      // Check if user has submitted feedback
      const feedbackExists = await hasFeedback(email);

      // Save email to localStorage
      localStorage.setItem('hackathon_user_email', email.toLowerCase().trim());

      setHasCompletedFeedback(feedbackExists);
      setChecked(true);
    } catch (err) {
      console.error('Error checking feedback:', err);
      setError('Failed to check feedback status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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

      <section className="py-12 bg-gradient-to-b from-blue-50 to-white min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {!checked ? (
              <>
                {/* Email Entry Form */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    Hackathon Photos
                  </h1>
                  <p className="text-slate-600 leading-relaxed">
                    Access photos from the Legal Hackathon: Optimising the Law. <br />
                    Enter your email to check access eligibility.
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

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                      placeholder="your@email.com"
                      disabled={loading}
                    />
                    <p className="mt-2 text-sm text-slate-500">
                      Use the email you registered with for the hackathon
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Checking...' : 'Check Access'}
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
              </>
            ) : hasCompletedFeedback ? (
              <>
                {/* Access Granted */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Access Granted!</h2>
                  <p className="text-slate-600 mb-8">
                    Thank you for completing the feedback survey. You can now access the hackathon photos.
                  </p>

                  <a
                    href="https://drive.google.com/drive/folders/14NzhOWEsR6oItxwEJtJ8aNZf79UKQbPh?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    View Photos on Google Drive
                  </a>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <button
                      onClick={() => {
                        setChecked(false);
                        setEmail('');
                      }}
                      className="text-blue-700 hover:text-blue-800 font-medium transition"
                    >
                      Check Another Email
                    </button>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Link
                    href="/hackathon"
                    className="text-blue-700 hover:text-blue-800 font-medium transition"
                  >
                    &larr; Back to Hackathon Page
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Access Denied - Need Feedback */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Feedback Required</h2>
                  <p className="text-slate-600 mb-8">
                    To access the hackathon photos, please complete our 2-minute feedback survey first.
                    Your feedback helps us improve future events!
                  </p>

                  <div className="space-y-4">
                    <Link
                      href="/hackathon/feedback"
                      className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                      Complete Feedback Survey
                    </Link>

                    <div className="text-sm text-slate-500">
                      Takes approximately 2 minutes
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <button
                      onClick={() => {
                        setChecked(false);
                        setEmail('');
                      }}
                      className="text-blue-700 hover:text-blue-800 font-medium transition"
                    >
                      Check Another Email
                    </button>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Link
                    href="/hackathon"
                    className="text-blue-700 hover:text-blue-800 font-medium transition"
                  >
                    &larr; Back to Hackathon Page
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
