// Firestore CRUD operations for team management
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import type { Team, TeamMember, CreateTeamFormData } from '@/types/team';

// Collection reference
const TEAMS_COLLECTION = 'teams';

/**
 * Create a new team
 */
export async function createTeam(formData: CreateTeamFormData): Promise<string> {
  try {
    const teamData = {
      teamName: formData.teamName,
      challenge: formData.challenge,
      createdBy: formData.createdBy.toLowerCase().trim(),
      createdAt: serverTimestamp(),
      locked: false,
      members: formData.initialMembers.map((member, index) => ({
        id: `member_${Date.now()}_${index}`,
        name: member.name.trim(),
        email: member.email.toLowerCase().trim(),
        role: member.role,
        addedAt: new Date(),
      })),
      maxMembers: 4, // Default max team size
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db!, TEAMS_COLLECTION), teamData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating team:', error);
    throw new Error('Failed to create team. Please try again.');
  }
}

/**
 * Get a team by ID
 */
export async function getTeamById(teamId: string): Promise<Team | null> {
  try {
    const docRef = doc(db!, TEAMS_COLLECTION, teamId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
        members: data.members?.map((member: TeamMember & { addedAt?: Date | { toDate: () => Date } }) => ({
          ...member,
          addedAt: member.addedAt instanceof Date ? member.addedAt : new Date(),
        })) || [],
      } as Team;
    }

    return null;
  } catch (error) {
    console.error('Error getting team:', error);
    throw new Error('Failed to fetch team data.');
  }
}

/**
 * Get team by user email (checks both creator and member)
 */
export async function getTeamByEmail(email: string): Promise<Team | null> {
  try {
    const normalizedEmail = email.toLowerCase().trim();
    console.log('[DEBUG] getTeamByEmail called with:', normalizedEmail);

    // First, check if user is the team creator
    const creatorQuery = query(
      collection(db!, TEAMS_COLLECTION),
      where('createdBy', '==', normalizedEmail)
    );

    const creatorSnapshot = await getDocs(creatorQuery);

    if (!creatorSnapshot.empty) {
      const docSnap = creatorSnapshot.docs[0];
      const data = docSnap.data();
      console.log('[DEBUG] Team found (user is creator):', docSnap.id);
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
        members: data.members?.map((member: TeamMember & { addedAt?: Date | { toDate: () => Date } }) => ({
          ...member,
          addedAt: member.addedAt instanceof Date ? member.addedAt : new Date(),
        })) || [],
      } as Team;
    }

    // If not creator, check if user is a member of any team
    console.log('[DEBUG] Not creator, checking if user is a member...');
    const allTeams = await getAllTeams();

    for (const team of allTeams) {
      const isMember = team.members.some(
        (member) => member.email.toLowerCase().trim() === normalizedEmail
      );

      if (isMember) {
        console.log('[DEBUG] Team found (user is member):', team.id);
        return team;
      }
    }

    console.log('[DEBUG] No team found for email');
    return null;
  } catch (error) {
    console.error('[ERROR] Error getting team by email:', error);
    console.error('[ERROR] Error details:', JSON.stringify(error, null, 2));
    throw new Error('Failed to fetch team data.');
  }
}

/**
 * Get all teams (for admin)
 */
export async function getAllTeams(): Promise<Team[]> {
  try {
    const q = query(collection(db!, TEAMS_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
        members: data.members?.map((member: TeamMember & { addedAt?: Date | { toDate: () => Date } }) => ({
          ...member,
          addedAt: member.addedAt instanceof Date ? member.addedAt : new Date(),
        })) || [],
      } as Team;
    });
  } catch (error) {
    console.error('Error getting all teams:', error);
    throw new Error('Failed to fetch teams.');
  }
}

/**
 * Update team name
 */
export async function updateTeamName(teamId: string, newName: string): Promise<void> {
  try {
    const docRef = doc(db!, TEAMS_COLLECTION, teamId);
    await updateDoc(docRef, {
      teamName: newName.trim(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating team name:', error);
    throw new Error('Failed to update team name.');
  }
}

/**
 * Update team challenge
 */
export async function updateTeamChallenge(teamId: string, challenge: string): Promise<void> {
  try {
    const docRef = doc(db!, TEAMS_COLLECTION, teamId);
    await updateDoc(docRef, {
      challenge,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating team challenge:', error);
    throw new Error('Failed to update team challenge.');
  }
}

/**
 * Add a member to a team
 */
export async function addTeamMember(
  teamId: string,
  member: Omit<TeamMember, 'id' | 'addedAt'>
): Promise<void> {
  try {
    const team = await getTeamById(teamId);
    if (!team) throw new Error('Team not found');

    if (team.members.length >= team.maxMembers) {
      throw new Error(`Team is full (max ${team.maxMembers} members)`);
    }

    const newMember: TeamMember = {
      id: `member_${Date.now()}`,
      name: member.name.trim(),
      email: member.email.toLowerCase().trim(),
      role: member.role,
      addedAt: new Date(),
    };

    const docRef = doc(db!, TEAMS_COLLECTION, teamId);
    await updateDoc(docRef, {
      members: [...team.members, newMember],
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error adding team member:', error);
    throw error;
  }
}

/**
 * Remove a member from a team
 */
export async function removeTeamMember(teamId: string, memberId: string): Promise<void> {
  try {
    const team = await getTeamById(teamId);
    if (!team) throw new Error('Team not found');

    const updatedMembers = team.members.filter((m) => m.id !== memberId);

    const docRef = doc(db!, TEAMS_COLLECTION, teamId);
    await updateDoc(docRef, {
      members: updatedMembers,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error removing team member:', error);
    throw new Error('Failed to remove team member.');
  }
}

/**
 * Lock/unlock a team (admin only)
 */
export async function toggleTeamLock(teamId: string, locked: boolean): Promise<void> {
  try {
    const docRef = doc(db!, TEAMS_COLLECTION, teamId);
    await updateDoc(docRef, {
      locked,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error toggling team lock:', error);
    throw new Error('Failed to update team lock status.');
  }
}

/**
 * Delete a team (admin only)
 */
export async function deleteTeam(teamId: string): Promise<void> {
  try {
    const docRef = doc(db!, TEAMS_COLLECTION, teamId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting team:', error);
    throw new Error('Failed to delete team.');
  }
}

/**
 * Lock all teams at once (admin only)
 */
export async function lockAllTeams(): Promise<void> {
  try {
    const teams = await getAllTeams();
    const updatePromises = teams.map((team) => toggleTeamLock(team.id, true));
    await Promise.all(updatePromises);
  } catch (error) {
    console.error('Error locking all teams:', error);
    throw new Error('Failed to lock all teams.');
  }
}
