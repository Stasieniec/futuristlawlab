// Firestore and Storage operations for hackathon project submissions
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  serverTimestamp,
  deleteDoc,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { db, storage } from '../firebase';

const SUBMISSIONS_COLLECTION = 'submissions';

export interface UploadedFile {
  url: string;
  fileName: string;
}

export interface ProjectSubmission {
  teamId: string;
  teamName: string;
  challenge: string;
  teamLeadEmail: string;
  // Submission fields
  projectName: string;
  projectDescription: string;
  githubUrl?: string;
  deployedUrl?: string;
  // File URLs (stored in Firebase Storage) - supports multiple files
  slides?: UploadedFile[];
  videos?: UploadedFile[];
  images?: UploadedFile[];
  // Legacy single file fields (for backwards compatibility)
  slidesUrl?: string;
  slidesFileName?: string;
  demoVideoUrl?: string;
  demoVideoFileName?: string;
  // Metadata
  submittedAt?: Date;
  updatedAt?: Date;
}

export interface UploadProgress {
  slides?: number;
  video?: number;
}

/**
 * Upload a file to Firebase Storage
 */
export async function uploadFile(
  teamId: string,
  file: File,
  type: 'slides' | 'video' | 'image'
): Promise<UploadedFile> {
  console.log(`[UPLOAD] Starting upload for ${type}`);
  console.log(`[UPLOAD] File: ${file.name}, Size: ${file.size} bytes, Type: ${file.type}`);
  console.log(`[UPLOAD] Team ID: ${teamId}`);

  try {
    if (!storage) {
      console.error('[UPLOAD] Storage is null or undefined!');
      throw new Error('Storage not initialized. Please contact the organizers.');
    }

    const extension = file.name.split('.').pop();
    const fileName = `${type}_${Date.now()}_${Math.random().toString(36).substring(7)}.${extension}`;
    const filePath = `submissions/${teamId}/${fileName}`;
    console.log(`[UPLOAD] Creating storage ref for path: ${filePath}`);
    const storageRef = ref(storage, filePath);

    console.log(`[UPLOAD] Starting uploadBytes...`);
    await uploadBytes(storageRef, file);

    console.log(`[UPLOAD] Getting download URL...`);
    const url = await getDownloadURL(storageRef);
    console.log(`[UPLOAD] Got download URL: ${url}`);

    return { url, fileName: file.name };
  } catch (error: unknown) {
    console.error(`[UPLOAD] Error uploading ${type}:`, error);

    // Check for specific Firebase Storage errors
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes('storage/unauthorized') || errorMessage.includes('does not have permission')) {
      throw new Error(`Upload failed: Permission denied. Please contact the organizers.`);
    } else if (errorMessage.includes('storage/canceled')) {
      throw new Error(`Upload was canceled. Please try again.`);
    } else if (errorMessage.includes('storage/unknown')) {
      throw new Error(`Upload failed due to a network error. Please check your connection and try again.`);
    } else if (errorMessage.includes('Firebase Storage')) {
      throw new Error(`File storage is not available. Please contact the organizers.`);
    }

    throw new Error(`Failed to upload ${type}. ${errorMessage}`);
  }
}

/**
 * Upload multiple files to Firebase Storage
 */
export async function uploadMultipleFiles(
  teamId: string,
  files: File[],
  type: 'slides' | 'video' | 'image'
): Promise<UploadedFile[]> {
  const results: UploadedFile[] = [];
  for (const file of files) {
    const result = await uploadFile(teamId, file, type);
    results.push(result);
  }
  return results;
}

/**
 * Delete a file from Firebase Storage
 */
export async function deleteFile(teamId: string, fileName: string): Promise<void> {
  try {
    const filePath = `submissions/${teamId}/${fileName}`;
    const storageRef = ref(storage!, filePath);
    await deleteObject(storageRef);
  } catch (error) {
    console.error('Error deleting file:', error);
    // Don't throw - file might not exist
  }
}

/**
 * Save or update a submission (uses teamId as document ID)
 */
export async function saveSubmission(
  submission: Omit<ProjectSubmission, 'submittedAt' | 'updatedAt'>
): Promise<void> {
  try {
    const docRef = doc(db!, SUBMISSIONS_COLLECTION, submission.teamId);
    const existingDoc = await getDoc(docRef);

    const submissionData: Record<string, unknown> = {
      teamId: submission.teamId,
      teamName: submission.teamName,
      challenge: submission.challenge,
      teamLeadEmail: submission.teamLeadEmail.toLowerCase().trim(),
      projectName: submission.projectName,
      projectDescription: submission.projectDescription,
      updatedAt: serverTimestamp(),
    };

    // Only add optional fields if they have values
    if (submission.githubUrl) submissionData.githubUrl = submission.githubUrl;
    if (submission.deployedUrl) submissionData.deployedUrl = submission.deployedUrl;
    // New array-based file fields
    if (submission.slides && submission.slides.length > 0) submissionData.slides = submission.slides;
    if (submission.videos && submission.videos.length > 0) submissionData.videos = submission.videos;
    if (submission.images && submission.images.length > 0) submissionData.images = submission.images;
    // Legacy single file fields (for backwards compatibility)
    if (submission.slidesUrl) submissionData.slidesUrl = submission.slidesUrl;
    if (submission.slidesFileName) submissionData.slidesFileName = submission.slidesFileName;
    if (submission.demoVideoUrl) submissionData.demoVideoUrl = submission.demoVideoUrl;
    if (submission.demoVideoFileName) submissionData.demoVideoFileName = submission.demoVideoFileName;

    // Set submittedAt only for new submissions
    if (!existingDoc.exists()) {
      submissionData.submittedAt = serverTimestamp();
    }

    await setDoc(docRef, submissionData, { merge: true });
  } catch (error) {
    console.error('Error saving submission:', error);
    throw new Error('Failed to save submission. Please try again.');
  }
}

/**
 * Get submission by team ID
 */
export async function getSubmissionByTeamId(teamId: string): Promise<ProjectSubmission | null> {
  try {
    const docRef = doc(db!, SUBMISSIONS_COLLECTION, teamId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        ...data,
        submittedAt: data.submittedAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as ProjectSubmission;
    }

    return null;
  } catch (error) {
    console.error('Error getting submission:', error);
    throw new Error('Failed to fetch submission.');
  }
}

/**
 * Get all submissions (for admin)
 */
export async function getAllSubmissions(): Promise<ProjectSubmission[]> {
  try {
    const querySnapshot = await getDocs(collection(db!, SUBMISSIONS_COLLECTION));
    return querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        ...data,
        submittedAt: data.submittedAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as ProjectSubmission;
    });
  } catch (error) {
    console.error('Error getting all submissions:', error);
    throw new Error('Failed to fetch submissions.');
  }
}

/**
 * Delete submission (for admin)
 */
export async function deleteSubmission(teamId: string): Promise<void> {
  try {
    const docRef = doc(db!, SUBMISSIONS_COLLECTION, teamId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting submission:', error);
    throw new Error('Failed to delete submission.');
  }
}
