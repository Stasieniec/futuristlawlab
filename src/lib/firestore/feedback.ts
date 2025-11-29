// Firestore operations for hackathon feedback
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

const FEEDBACK_COLLECTION = 'hackathon-feedback';

export interface HackathonFeedback {
  email: string;
  name: string;
  // Q1: How did you find out
  howFoundOut: string;
  howFoundOutOther?: string;
  // Q2: Overall experience (1-5)
  overallExperience: number;
  // Q3: What enjoyed most
  enjoyedMost: string;
  // Q4: What could be improved
  improvements: string;
  // Q5: Mentorship
  mentorshipRating: number;
  mentorshipFeedback?: string;
  // Q6: Resources and Support
  resourcesRating: number;
  resourcesFeedback?: string;
  // Q7: Logistics and Organisation
  logisticsRating: number;
  logisticsFeedback?: string;
  // Q8: Networking
  networkingRating: number;
  mostValuableLearning: string;
  // Q9: Would participate again
  wouldParticipateAgain: 'yes' | 'no' | 'maybe';
  additionalComments?: string;
  // Metadata
  submittedAt?: Date;
}

/**
 * Save feedback to Firestore (uses email as document ID)
 */
export async function saveFeedback(feedback: HackathonFeedback): Promise<void> {
  try {
    const normalizedEmail = feedback.email.toLowerCase().trim();
    const docRef = doc(db!, FEEDBACK_COLLECTION, normalizedEmail);

    // Filter out undefined values (Firestore doesn't accept them)
    const cleanedFeedback: Record<string, unknown> = {
      email: normalizedEmail,
      name: feedback.name,
      howFoundOut: feedback.howFoundOut,
      overallExperience: feedback.overallExperience,
      enjoyedMost: feedback.enjoyedMost,
      improvements: feedback.improvements,
      mentorshipRating: feedback.mentorshipRating,
      resourcesRating: feedback.resourcesRating,
      logisticsRating: feedback.logisticsRating,
      networkingRating: feedback.networkingRating,
      mostValuableLearning: feedback.mostValuableLearning,
      wouldParticipateAgain: feedback.wouldParticipateAgain,
      submittedAt: serverTimestamp(),
    };

    // Only add optional fields if they have values
    if (feedback.howFoundOutOther) cleanedFeedback.howFoundOutOther = feedback.howFoundOutOther;
    if (feedback.mentorshipFeedback) cleanedFeedback.mentorshipFeedback = feedback.mentorshipFeedback;
    if (feedback.resourcesFeedback) cleanedFeedback.resourcesFeedback = feedback.resourcesFeedback;
    if (feedback.logisticsFeedback) cleanedFeedback.logisticsFeedback = feedback.logisticsFeedback;
    if (feedback.additionalComments) cleanedFeedback.additionalComments = feedback.additionalComments;

    await setDoc(docRef, cleanedFeedback);
  } catch (error) {
    console.error('Error saving feedback:', error);
    throw new Error('Failed to save feedback. Please try again.');
  }
}

/**
 * Check if feedback already exists for an email
 */
export async function hasFeedback(email: string): Promise<boolean> {
  try {
    const normalizedEmail = email.toLowerCase().trim();
    const docRef = doc(db!, FEEDBACK_COLLECTION, normalizedEmail);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  } catch (error) {
    console.error('Error checking feedback:', error);
    return false;
  }
}

/**
 * Get all feedback (for admin)
 */
export async function getAllFeedback(): Promise<HackathonFeedback[]> {
  try {
    const querySnapshot = await getDocs(collection(db!, FEEDBACK_COLLECTION));
    return querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        ...data,
        submittedAt: data.submittedAt?.toDate() || new Date(),
      } as HackathonFeedback;
    });
  } catch (error) {
    console.error('Error getting all feedback:', error);
    throw new Error('Failed to fetch feedback.');
  }
}

/**
 * Delete feedback by email (for admin)
 */
export async function deleteFeedback(email: string): Promise<void> {
  try {
    const normalizedEmail = email.toLowerCase().trim();
    const docRef = doc(db!, FEEDBACK_COLLECTION, normalizedEmail);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting feedback:', error);
    throw new Error('Failed to delete feedback.');
  }
}
