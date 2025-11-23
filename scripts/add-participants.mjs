#!/usr/bin/env node
/**
 * Script to add new hackathon participants to Firebase
 *
 * Usage:
 * 1. Update the newParticipants array below with emails to add
 * 2. Run: node scripts/add-participants.mjs
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local
dotenv.config({ path: join(__dirname, '..', '.env.local') });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// UPDATE THIS ARRAY WITH NEW PARTICIPANTS TO ADD
const newParticipants = [
  // Add new email addresses here, one per line
  // Example: 'new.participant@example.com',
];

async function addParticipants() {
  if (newParticipants.length === 0) {
    console.log('⚠️  No participants to add. Please update the newParticipants array in this script.');
    process.exit(0);
  }

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  console.log('🚀 Starting to add participants...');
  console.log(`📧 Total to process: ${newParticipants.length}\n`);

  let added = 0;
  let skipped = 0;
  let errors = 0;

  for (const email of newParticipants) {
    try {
      const normalizedEmail = email.toLowerCase().trim();

      // Check if already exists
      const q = query(
        collection(db, 'registered_participants'),
        where('email', '==', normalizedEmail)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        console.log(`⊘ Skipped: ${email} (already exists)`);
        skipped++;
        continue;
      }

      // Add to Firebase
      await addDoc(collection(db, 'registered_participants'), {
        email: normalizedEmail,
        registeredAt: new Date(),
      });

      console.log(`✓ Added: ${email}`);
      added++;
    } catch (error) {
      console.log(`✗ Error adding ${email}:`, error.message);
      errors++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('✅ Summary:');
  console.log(`✓ Successfully added: ${added}`);
  console.log(`⊘ Skipped (already exist): ${skipped}`);
  if (errors > 0) {
    console.log(`✗ Errors: ${errors}`);
  }
  console.log('='.repeat(60));

  process.exit(errors > 0 ? 1 : 0);
}

addParticipants();
