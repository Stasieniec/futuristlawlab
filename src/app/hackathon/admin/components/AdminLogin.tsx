'use client';

import Link from 'next/link';

interface AdminLoginProps {
  password: string;
  setPassword: (password: string) => void;
  error: string;
  onLogin: (e: React.FormEvent) => void;
}

export default function AdminLogin({ password, setPassword, error, onLogin }: AdminLoginProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Access</h1>
            <p className="text-slate-900">Enter password to manage teams</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={onLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-slate-900 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Access Admin Panel
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
  );
}
