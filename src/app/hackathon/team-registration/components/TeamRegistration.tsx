'use client';

import { useState, useEffect } from 'react';
import { getTeamByEmail } from '@/lib/firestore/teams';
import type { Team } from '@/types/team';
import TeamForm from './TeamForm';
import TeamView from './TeamView';

export default function TeamRegistration() {
  const [email, setEmail] = useState<string>('');
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [step, setStep] = useState<'email' | 'create' | 'view'>('email');

  // Load email from localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('hackathon_user_email');
    if (savedEmail) {
      setEmail(savedEmail);
      handleEmailSubmit(savedEmail);
    }
  }, []);

  const handleEmailSubmit = async (emailToCheck?: string) => {
    const emailValue = emailToCheck || email;
    if (!emailValue || !emailValue.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const existingTeam = await getTeamByEmail(emailValue);

      if (existingTeam) {
        setTeam(existingTeam);
        setStep('view');
      } else {
        setStep('create');
      }

      // Save email to localStorage
      localStorage.setItem('hackathon_user_email', emailValue);
    } catch (err) {
      console.error('Error checking email:', err);
      setError('Failed to check for existing team. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTeamCreated = (newTeam: Team) => {
    setTeam(newTeam);
    setStep('view');
  };

  const handleTeamUpdated = (updatedTeam: Team) => {
    setTeam(updatedTeam);
  };

  const handleReset = () => {
    setEmail('');
    setTeam(null);
    setStep('email');
    localStorage.removeItem('hackathon_user_email');
  };

  // Email entry step
  if (step === 'email') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Get Started</h2>
            <p className="text-slate-900">
              Enter your email to create a new team or access your existing team
            </p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                </svg>
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="email" className="block text-slate-900 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleEmailSubmit()}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
              disabled={loading}
            />
            <p className="text-sm text-slate-900 mt-2">
              Use the same email you registered with on Luma
            </p>
          </div>

          <button
            onClick={() => handleEmailSubmit()}
            disabled={loading || !email}
            className="w-full px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking...
              </span>
            ) : (
              'Continue'
            )}
          </button>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-blue-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                Important Information
              </h3>
              <ul className="text-sm text-slate-900 space-y-1 ml-7">
                <li>• Maximum team size: 5 members</li>
                <li>• You must be registered on Luma to participate</li>
                <li>• One team per email address</li>
                <li>• Teams may be locked closer to the event date</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Create team step
  if (step === 'create') {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600">Registering as</p>
            <p className="font-semibold text-slate-900">{email}</p>
          </div>
          <button
            onClick={handleReset}
            className="text-blue-700 hover:text-blue-800 text-sm font-medium"
          >
            Change Email
          </button>
        </div>
        <TeamForm email={email} onTeamCreated={handleTeamCreated} />
      </div>
    );
  }

  // View/edit team step
  if (step === 'view' && team) {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600">Logged in as</p>
            <p className="font-semibold text-slate-900">{email}</p>
          </div>
          <button
            onClick={handleReset}
            className="text-blue-700 hover:text-blue-800 text-sm font-medium"
          >
            Sign Out
          </button>
        </div>
        <TeamView team={team} onTeamUpdated={handleTeamUpdated} />
      </div>
    );
  }

  return null;
}
