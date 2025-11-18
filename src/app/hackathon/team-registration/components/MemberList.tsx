'use client';

import { useState } from 'react';
import { addTeamMember, removeTeamMember } from '@/lib/firestore/teams';
import { isEmailRegistered } from '@/lib/firestore/participants';
import type { Team } from '@/types/team';

interface MemberListProps {
  team: Team;
  onMembersUpdated: () => void;
}

export default function MemberList({ team, onMembersUpdated }: MemberListProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', email: '', role: 'Member' as const });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [removingId, setRemovingId] = useState<string | null>(null);

  const handleAddMember = async () => {
    if (!newMember.name.trim()) {
      setError('Member name is required');
      return;
    }

    if (!newMember.email.trim()) {
      setError('Member email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newMember.email)) {
      setError('Invalid email format');
      return;
    }

    // Check for duplicate email in team
    const normalizedEmail = newMember.email.toLowerCase().trim();
    const isDuplicate = team.members.some(
      (member) => member.email.toLowerCase().trim() === normalizedEmail
    );

    if (isDuplicate) {
      setError('This email is already a member of the team.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Check if the member email is registered
      const registered = await isEmailRegistered(newMember.email.trim());

      if (!registered) {
        setError('This email is not registered for the hackathon. Please register on Luma first: https://luma.com/nx4442y5');
        setLoading(false);
        return;
      }

      await addTeamMember(team.id, {
        name: newMember.name.trim(),
        email: newMember.email.trim(),
        role: newMember.role,
      });

      setNewMember({ name: '', email: '', role: 'Member' });
      setIsAdding(false);
      onMembersUpdated();
    } catch (err) {
      console.error('Error adding member:', err);
      setError(err instanceof Error ? err.message : 'Failed to add member. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMember = async (memberId: string) => {
    if (!confirm('Are you sure you want to remove this team member?')) {
      return;
    }

    setRemovingId(memberId);
    setError('');

    try {
      await removeTeamMember(team.id, memberId);
      onMembersUpdated();
    } catch (err) {
      console.error('Error removing member:', err);
      setError('Failed to remove member. Please try again.');
    } finally {
      setRemovingId(null);
    }
  };

  const canAddMembers = !team.locked && team.members.length < team.maxMembers;
  const canRemoveMembers = !team.locked;

  return (
    <div>
      {error && (
        <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
            </svg>
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* Current Members */}
      <div className="space-y-3 mb-6">
        {team.members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border-2 border-slate-200 hover:border-blue-300 transition"
          >
            <div className="flex items-center flex-1">
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {member.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-slate-900">{member.name}</p>
                  {member.role === 'Team Lead' && (
                    <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      Lead
                    </span>
                  )}
                </div>
                {member.email && (
                  <p className="text-sm text-slate-900">{member.email}</p>
                )}
              </div>
            </div>

            {member.role !== 'Team Lead' && canRemoveMembers && (
              <button
                onClick={() => handleRemoveMember(member.id)}
                disabled={removingId === member.id}
                className="ml-4 px-3 py-1.5 text-red-600 hover:bg-red-50 font-medium rounded-lg transition disabled:opacity-50"
              >
                {removingId === member.id ? 'Removing...' : 'Remove'}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add Member Section */}
      {canAddMembers && (
        <div>
          {isAdding ? (
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-slate-900 mb-3">Add New Member</h4>

              <div className="space-y-3 mb-4">
                <div>
                  <label className="block text-sm text-slate-900 font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-900 font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={newMember.email}
                    onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 transition text-slate-900"
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleAddMember}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                >
                  {loading ? 'Adding...' : 'Add Member'}
                </button>
                <button
                  onClick={() => {
                    setIsAdding(false);
                    setNewMember({ name: '', email: '', role: 'Member' });
                    setError('');
                  }}
                  disabled={loading}
                  className="px-4 py-2 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsAdding(true)}
              className="w-full px-4 py-3 border-2 border-dashed border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Team Member
            </button>
          )}
        </div>
      )}

      {team.members.length >= team.maxMembers && (
        <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <p className="text-amber-800 text-sm font-medium">
            Team is full ({team.maxMembers} members maximum)
          </p>
        </div>
      )}

      {team.locked && (
        <div className="mt-4 bg-slate-100 border-l-4 border-slate-400 p-4 rounded">
          <p className="text-slate-900 text-sm font-medium">
            Team is locked. Contact organizers to add or remove members.
          </p>
        </div>
      )}
    </div>
  );
}
