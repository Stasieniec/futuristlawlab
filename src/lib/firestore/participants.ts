// Firestore operations for registered participant emails
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';

// Collection reference
const PARTICIPANTS_COLLECTION = 'registered_participants';

export interface RegisteredParticipant {
  email: string;
  registeredAt: Date;
}

/**
 * Check if an email is registered as a participant
 */
export async function isEmailRegistered(email: string): Promise<boolean> {
  try {
    const normalizedEmail = email.toLowerCase().trim();

    const q = query(
      collection(db!, PARTICIPANTS_COLLECTION),
      where('email', '==', normalizedEmail)
    );

    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking email registration:', error);
    throw new Error('Failed to verify email registration.');
  }
}

/**
 * Add a registered participant email
 */
export async function addRegisteredEmail(email: string): Promise<void> {
  try {
    const normalizedEmail = email.toLowerCase().trim();

    // Check if already exists
    const exists = await isEmailRegistered(normalizedEmail);
    if (exists) {
      throw new Error('Email already registered');
    }

    await addDoc(collection(db!, PARTICIPANTS_COLLECTION), {
      email: normalizedEmail,
      registeredAt: new Date(),
    });
  } catch (error) {
    console.error('Error adding registered email:', error);
    throw error;
  }
}

/**
 * Remove a registered participant email
 */
export async function removeRegisteredEmail(email: string): Promise<void> {
  try {
    const normalizedEmail = email.toLowerCase().trim();

    const q = query(
      collection(db!, PARTICIPANTS_COLLECTION),
      where('email', '==', normalizedEmail)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('Email not found');
    }

    // Delete all matching documents (should be only one)
    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  } catch (error) {
    console.error('Error removing registered email:', error);
    throw error;
  }
}

/**
 * Get all registered participant emails
 */
export async function getAllRegisteredEmails(): Promise<string[]> {
  try {
    const querySnapshot = await getDocs(collection(db!, PARTICIPANTS_COLLECTION));
    return querySnapshot.docs.map((doc) => doc.data().email as string);
  } catch (error) {
    console.error('Error getting registered emails:', error);
    throw new Error('Failed to fetch registered emails.');
  }
}

/**
 * Bulk add registered emails
 */
export async function bulkAddRegisteredEmails(emails: string[]): Promise<{ added: number; skipped: number; errors: string[] }> {
  const results = {
    added: 0,
    skipped: 0,
    errors: [] as string[],
  };

  for (const email of emails) {
    try {
      const normalizedEmail = email.toLowerCase().trim();

      // Skip if already exists
      const exists = await isEmailRegistered(normalizedEmail);
      if (exists) {
        results.skipped++;
        continue;
      }

      await addDoc(collection(db!, PARTICIPANTS_COLLECTION), {
        email: normalizedEmail,
        registeredAt: new Date(),
      });

      results.added++;
    } catch (error) {
      results.errors.push(`Failed to add ${email}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  return results;
}
