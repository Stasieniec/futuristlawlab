// Team and Member type definitions for the hackathon team registration system

export type ChallengeType = 'houthoff' | 'pinsent-masons' | 'moonlit';

export interface Challenge {
  id: ChallengeType;
  name: string;
  description: string;
}

export const CHALLENGES: Challenge[] = [
  {
    id: 'houthoff',
    name: 'Houthoff Challenge',
    description: 'Placeholder description for the Houthoff Challenge. Details about the challenge objectives and requirements will be added here.'
  },
  {
    id: 'pinsent-masons',
    name: 'Pinsent Masons Challenge',
    description: 'Placeholder description for the Pinsent Masons Challenge. Details about the challenge objectives and requirements will be added here.'
  },
  {
    id: 'moonlit',
    name: 'Moonlit Challenge',
    description: 'Placeholder description for the Moonlit Challenge. Details about the challenge objectives and requirements will be added here.'
  }
];

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'Team Lead' | 'Member';
  addedAt: Date;
}

export interface Team {
  id: string;
  teamName: string;
  challenge: ChallengeType;
  createdBy: string; // Email of the person who created the team
  createdAt: Date;
  locked: boolean; // Admin can lock teams to prevent edits
  members: TeamMember[];
  maxMembers: number;
  updatedAt: Date;
}

export interface GlobalConfig {
  registrationOpen: boolean;
  registrationDeadline: Date | null;
  allowEditsAfterLock: string[]; // Fields that can be edited even when locked (e.g., ["teamName"])
  maxTeamSize: number;
}

// Form data types
export interface CreateTeamFormData {
  teamName: string;
  challenge: ChallengeType;
  createdBy: string;
  initialMembers: Omit<TeamMember, 'id' | 'addedAt'>[];
}

export interface TeamFormErrors {
  teamName?: string;
  createdBy?: string;
  members?: string;
  general?: string;
}
