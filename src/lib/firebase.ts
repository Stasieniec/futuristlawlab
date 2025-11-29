// Firebase configuration and initialization
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase app (singleton pattern to prevent multiple initializations)
function initializeFirebase(): FirebaseApp {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApps()[0];
}

// Get Firestore instance
function getFirestoreDb(): Firestore {
  const app = initializeFirebase();
  return getFirestore(app);
}

// Get Storage instance
function getStorageInstance(): FirebaseStorage {
  const app = initializeFirebase();
  const bucketName = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  // For custom buckets, we need to specify the bucket URL
  return getStorage(app, `gs://${bucketName}`);
}

// Export a getter function that initializes on first use
let dbInstance: Firestore | null = null;
let storageInstance: FirebaseStorage | null = null;

export const db = typeof window !== 'undefined' ? (() => {
  if (!dbInstance) {
    dbInstance = getFirestoreDb();
  }
  return dbInstance;
})() : (null as unknown as Firestore);

export const storage = typeof window !== 'undefined' ? (() => {
  if (!storageInstance) {
    storageInstance = getStorageInstance();
  }
  return storageInstance;
})() : (null as unknown as FirebaseStorage);
