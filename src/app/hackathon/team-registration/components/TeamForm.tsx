'use client';

import { useState } from 'react';
import { createTeam } from '@/lib/firestore/teams';
import type { Team, TeamMember } from '@/types/team';

interface TeamFormProps {
  email: string;
  onTeamCreated: (team: Team) => void;
}

export default function TeamForm({ email, onTeamCreated }: TeamFormProps) {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState<Omit<TeamMember, 'id' | 'addedAt'>[]>([
    { name: '', email: email, role: 'Team Lead' },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const MAX_MEMBERS = 5;

  const addMember = () => {
    if (members.length >= MAX_MEMBERS) {
      setError(`Maximum ${MAX_MEMBERS} members allowed per team`);
      return;
    }
    setMembers([...members, { name: '', email: '', role: 'Member' }]);
  };

  const removeMember = (index: number) => {
    if (index === 0) return; // Can't remove team lead
    setMembers(members.filter((_, i) => i !== index));
  };

  const updateMember = (index: number, field: 'name' | 'email' | 'role', value: string) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    setMembers(updated);
  };

  const validateForm = (): boolean => {
    // Validate team name
    if (!teamName.trim()) {
      setError('Team name is required');
      return false;
    }

    // Validate at least one member (team lead)
    if (members.length === 0) {
      setError('At least one team member is required');
      return false;
    }

    // Validate team lead
    if (!members[0].name.trim()) {
      setError('Team lead name is required');
      return false;
    }

    // Validate all members have names
    for (let i = 0; i < members.length; i++) {
      if (members[i].email && !members[i].name.trim()) {
        setError(`Member ${i + 1} name is required`);
        return false;
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let i = 0; i < members.length; i++) {
      if (members[i].email && !emailRegex.test(members[i].email)) {
        setError(`Invalid email format for member ${i + 1}`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Filter out empty members
      const validMembers = members.filter(m => m.name.trim() || m.email.trim());

      const teamId = await createTeam({
        teamName: teamName.trim(),
        createdBy: email,
        initialMembers: validMembers,
      });

      setSuccess(true);

      // Fetch the created team to pass back
      setTimeout(async () => {
        const { getTeamById } = await import('@/lib/firestore/teams');
        const team = await getTeamById(teamId);
        if (team) {
          onTeamCreated(team);
        }
      }, 1000);
    } catch (err) {
      console.error('Error creating team:', err);
      setError(err instanceof Error ? err.message : 'Failed to create team. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Create Your Team</h2>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
            </svg>
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        </div>
      )}

      {success && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <p className="text-green-700 text-sm font-medium">Team created successfully!</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Team Name */}
        <div className="mb-8">
          <label htmlFor="teamName" className="block text-slate-900 font-medium mb-2">
            Team Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="e.g., Legal Innovators"
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
            disabled={loading}
            required
          />
        </div>

        {/* Team Members */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-slate-900">Team Members</h3>
            <span className="text-sm text-slate-600">{members.length} / {MAX_MEMBERS}</span>
          </div>

          <div className="space-y-4">
            {members.map((member, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  {index === 0 ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                      <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      Team Lead
                    </span>
                  ) : (
                    <span className="text-sm font-semibold text-slate-900">
                      Member {index + 1}
                    </span>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeMember(index)}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                      disabled={loading}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-slate-900 font-medium mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => updateMember(index, 'name', e.target.value)}
                      placeholder="Full name"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                      disabled={loading}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-900 font-medium mb-1">
                      Email {index === 0 && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="email"
                      value={member.email}
                      onChange={(e) => updateMember(index, 'email', e.target.value)}
                      placeholder="email@example.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                      disabled={loading || index === 0}
                      required={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {members.length < MAX_MEMBERS && (
            <button
              type="button"
              onClick={addMember}
              className="mt-4 w-full px-4 py-3 border-2 border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
              disabled={loading}
            >
              + Add Team Member
            </button>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-4 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Team...
            </span>
          ) : (
            'Create Team'
          )}
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-slate-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-slate-900 mb-2 text-sm flex items-center">
            <svg className="w-4 h-4 text-blue-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
            Tips
          </h4>
          <ul className="text-sm text-slate-900 space-y-1 ml-6">
            <li>• You can add more members later if you don&apos;t have everyone&apos;s info now</li>
            <li>• The team lead email is your registration email</li>
            <li>• All team members should be registered on Luma</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
