'use client';

import { Fragment } from 'react';
import type { Team } from '@/types/team';
import { CHALLENGES } from '@/types/team';

interface TeamsTabProps {
  teams: Team[];
  loading: boolean;
  actionLoading: string | null;
  expandedTeam: string | null;
  setExpandedTeam: (teamId: string | null) => void;
  newMemberName: string;
  setNewMemberName: (name: string) => void;
  newMemberEmail: string;
  setNewMemberEmail: (email: string) => void;
  addMemberLoading: boolean;
  onRefresh: () => void;
  onLockAll: () => void;
  onExportCSV: () => void;
  onToggleLock: (teamId: string, currentLockStatus: boolean) => void;
  onDeleteTeam: (teamId: string, teamName: string) => void;
  onAddMember: (teamId: string) => void;
  onRemoveMember: (teamId: string, memberId: string, memberName: string, isTeamLead: boolean) => void;
}

export default function TeamsTab({
  teams,
  loading,
  actionLoading,
  expandedTeam,
  setExpandedTeam,
  newMemberName,
  setNewMemberName,
  newMemberEmail,
  setNewMemberEmail,
  addMemberLoading,
  onRefresh,
  onLockAll,
  onExportCSV,
  onToggleLock,
  onDeleteTeam,
  onAddMember,
  onRemoveMember,
}: TeamsTabProps) {
  return (
    <>
      {/* Stats & Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">Total Teams</p>
          <p className="text-3xl font-bold text-slate-900">{teams.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">Locked Teams</p>
          <p className="text-3xl font-bold text-slate-900">{teams.filter(t => t.locked).length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-slate-200">
          <p className="text-sm text-slate-900 font-medium mb-1">Total Participants</p>
          <p className="text-3xl font-bold text-slate-900">{teams.reduce((sum, t) => sum + t.members.length, 0)}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={onRefresh}
          disabled={loading}
          className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
        >
          {loading ? 'Refreshing...' : 'Refresh Data'}
        </button>
        <button
          onClick={onLockAll}
          disabled={actionLoading === 'lock-all'}
          className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition disabled:opacity-50"
        >
          {actionLoading === 'lock-all' ? 'Locking...' : 'Lock All Teams'}
        </button>
        <button
          onClick={onExportCSV}
          className="px-6 py-3 border-2 border-blue-700 text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition"
        >
          Export to CSV
        </button>
      </div>

      {/* Teams Table */}
      {loading ? (
        <div className="text-center py-12">
          <svg className="animate-spin h-12 w-12 text-blue-700 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-slate-900 mt-4">Loading teams...</p>
        </div>
      ) : teams.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-xl">
          <p className="text-slate-900 text-lg">No teams registered yet</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-100 border-b-2 border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Team Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Challenge</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Team Lead</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Members</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Created</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {teams.map((team) => {
                  const challengeName = CHALLENGES.find(c => c.id === team.challenge)?.name || 'Not selected';
                  const isExpanded = expandedTeam === team.id;
                  return (
                    <Fragment key={team.id}>
                      <tr className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setExpandedTeam(isExpanded ? null : team.id);
                                setNewMemberName('');
                                setNewMemberEmail('');
                              }}
                              className="text-slate-400 hover:text-slate-600 transition"
                            >
                              <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </button>
                            <div className="font-semibold text-slate-900">{team.teamName}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                            {challengeName}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-slate-900">{team.members.find(m => m.role === 'Team Lead')?.name || 'N/A'}</div>
                          <div className="text-sm text-slate-900">{team.createdBy}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-slate-900">{team.members.length} / {team.maxMembers}</div>
                          <div className="text-sm text-slate-900">{team.members.map(m => m.name).join(', ')}</div>
                        </td>
                        <td className="px-6 py-4">
                          {team.locked ? (
                            <span className="inline-flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                              </svg>
                              Locked
                            </span>
                          ) : (
                            <span className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              Active
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-900">
                          {new Date(team.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => onToggleLock(team.id, team.locked)}
                              disabled={actionLoading === team.id}
                              className="px-3 py-1.5 text-blue-700 hover:bg-blue-50 font-medium rounded transition text-sm disabled:opacity-50"
                            >
                              {actionLoading === team.id ? '...' : team.locked ? 'Unlock' : 'Lock'}
                            </button>
                            <button
                              onClick={() => onDeleteTeam(team.id, team.teamName)}
                              disabled={actionLoading === team.id}
                              className="px-3 py-1.5 text-red-600 hover:bg-red-50 font-medium rounded transition text-sm disabled:opacity-50"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Expanded Row for Member Management */}
                      {isExpanded && (
                        <tr className="bg-slate-50">
                          <td colSpan={7} className="px-6 py-4">
                            <div className="ml-7">
                              <h4 className="font-semibold text-slate-900 mb-4">Team Members</h4>

                              {/* Members List */}
                              <div className="space-y-2 mb-6">
                                {team.members.map((member) => (
                                  <div key={member.id} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                                    <div className="flex items-center gap-3">
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${member.role === 'Team Lead' ? 'bg-blue-100' : 'bg-slate-100'}`}>
                                        {member.role === 'Team Lead' ? (
                                          <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                          </svg>
                                        ) : (
                                          <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                          </svg>
                                        )}
                                      </div>
                                      <div>
                                        <div className="font-medium text-slate-900">{member.name}</div>
                                        <div className="text-sm text-slate-500">{member.email}</div>
                                      </div>
                                      {member.role === 'Team Lead' && (
                                        <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                          Team Lead
                                        </span>
                                      )}
                                    </div>
                                    <button
                                      onClick={() => onRemoveMember(team.id, member.id, member.name, member.role === 'Team Lead')}
                                      disabled={actionLoading === `remove-${member.id}` || member.role === 'Team Lead'}
                                      className="px-3 py-1.5 text-red-600 hover:bg-red-50 font-medium rounded transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                      title={member.role === 'Team Lead' ? 'Cannot remove team lead' : 'Remove member'}
                                    >
                                      {actionLoading === `remove-${member.id}` ? '...' : 'Remove'}
                                    </button>
                                  </div>
                                ))}
                              </div>

                              {/* Add Member Form */}
                              {team.members.length < team.maxMembers && (
                                <div className="bg-white p-4 rounded-lg border border-slate-200">
                                  <h5 className="font-medium text-slate-900 mb-3">Add New Member</h5>
                                  <div className="flex flex-wrap gap-3">
                                    <input
                                      type="text"
                                      placeholder="Name"
                                      value={newMemberName}
                                      onChange={(e) => setNewMemberName(e.target.value)}
                                      className="flex-1 min-w-[150px] px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 text-slate-900"
                                      disabled={addMemberLoading}
                                    />
                                    <input
                                      type="email"
                                      placeholder="Email"
                                      value={newMemberEmail}
                                      onChange={(e) => setNewMemberEmail(e.target.value)}
                                      className="flex-1 min-w-[200px] px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-700 text-slate-900"
                                      disabled={addMemberLoading}
                                    />
                                    <button
                                      onClick={() => onAddMember(team.id)}
                                      disabled={addMemberLoading || !newMemberName.trim() || !newMemberEmail.trim()}
                                      className="px-4 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                                    >
                                      {addMemberLoading ? 'Adding...' : 'Add Member'}
                                    </button>
                                  </div>
                                  <p className="text-xs text-slate-500 mt-2">
                                    Note: The email must be registered on Luma for the hackathon.
                                  </p>
                                </div>
                              )}
                              {team.members.length >= team.maxMembers && (
                                <p className="text-sm text-amber-600 font-medium">
                                  This team is full ({team.maxMembers} members maximum).
                                </p>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
