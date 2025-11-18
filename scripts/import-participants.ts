// Script to import participants from CSV to Firestore
import * as dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log('Firebase config loaded:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface ParticipantData {
  firstName: string;
  lastName: string;
  email: string;
  registeredAt: Date;
}

// Simple CSV parser
function parseCSV(csvContent: string): any[] {
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',');
  const results: any[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;

    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;

    // Parse CSV properly handling quoted fields with commas
    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];

      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim()); // Push the last value

    // Create object from headers and values
    const obj: any = {};
    headers.forEach((header, index) => {
      obj[header.trim()] = values[index] || '';
    });
    results.push(obj);
  }

  return results;
}

async function importParticipants() {
  try {
    console.log('Starting participant import...');

    // Read CSV file
    const csvPath = path.join(process.cwd(), 'public', 'hackathon', 'Legal Hackathon_ Optimising the Law - Guests - 2025-11-18-15-18-08.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    console.log('Parsing CSV...');
    const rows = parseCSV(csvContent);

    console.log(`Found ${rows.length} participants`);

    let added = 0;
    let skipped = 0;
    let errors = 0;

    for (const row of rows) {
      try {
        const email = row.email?.trim();
        const firstName = row.first_name?.trim();
        const lastName = row.last_name?.trim();

        // Skip if no email
        if (!email || !email.includes('@')) {
          console.log(`Skipping row - no valid email: ${email}`);
          skipped++;
          continue;
        }

        const participantData: ParticipantData = {
          firstName: firstName || '',
          lastName: lastName || '',
          email: email.toLowerCase(),
          registeredAt: new Date(),
        };

        await addDoc(collection(db, 'registered_participants'), participantData);
        console.log(`✓ Added: ${firstName} ${lastName} (${email})`);
        added++;
      } catch (error) {
        console.error(`✗ Error adding participant: ${row.email}`, error);
        errors++;
      }
    }

    console.log('\n=== Import Summary ===');
    console.log(`Total rows: ${rows.length}`);
    console.log(`Added: ${added}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Errors: ${errors}`);
    console.log('Import complete!');
  } catch (error) {
    console.error('Error importing participants:', error);
    throw error;
  }
}

// Run the import
importParticipants()
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed:', error);
    process.exit(1);
  });
