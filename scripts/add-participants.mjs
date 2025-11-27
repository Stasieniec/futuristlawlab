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
  // New approved participants from 2025-11-27 CSV export
  'i.brouwer@houthoff.com',
  'hannaschmidt28@gmx.de',
  'mark@sirachventures.com',
  'ijedreus@gmail.com',
  'wouter.seinen@pinsentmasons.com',
  'trivedismith1999@gmail.com',
  'gamalijdominika@gmail.com',
  'emma.sforza06@gmail.com',
  'jeroen.schouten@pinsentmasons.com',
  'bas@landman.eu',
  'rosadegoeij04@gmail.com',
  'jonne@moonlit.ai',
  'britt.zeegers@student.uva.nl',
  'paulasernakuhl@outlook.com',
  'zeynepnazoksuz@gmail.com',
  'external@aimpple.nl',
  'xiny0330@gmail.com',
  'jiangyaokais@gmail.com',
  'oanaucs@gmail.com',
  'lin.yuan.new@gmail.com',
  'beshoy22901@gmail.com',
  'grundlantonia01@gmail.com',
  'isa.schrader@student.uva.nl',
  'helmi.heinonen04@gmail.com',
  'nuriastojkovski@icloud.com',
  'laurkapeirs@gmail.com',
  'kate.o4302@gmail.com',
  'doddsdarcy@gmail.com',
  'maxoromurillo@gmail.com',
  'kaistouthart@hotmail.com',
  'sfan289@aucklanduni.ac.nz',
  'richardtrus25@gmail.com',
  'sydneyrichard@artificialintelligence4good.com',
  'vungocbao.2004@gmail.com',
  'diananitun@gmail.com',
  'besseling.merel@gmail.com',
  'marrta.lm@gmail.com',
  'ozturkden738@gmail.com',
  'mitrabamdad@outlook.com',
  'sooriyaa.karunaharan@student.uva.nl',
  'kshitijpatil1098@gmail.com',
  'frangalvez36@gmail.com',
  'valentinacerutti26@gmail.com',
  'micha.sierp@gmail.com',
  'elena.stunda@gmail.com',
  'todascaandrei@gmail.com',
  'sarasamaha03@gmail.com',
  'anadediu07@gmail.com',
  'svetlazdravkova4@gmail.com',
  'missihavenoidea@gmail.com',
  'abalasa25@yahoo.com',
  'maxwellmilena@icloud.com',
  'zhaizhaoyue520@gmail.com',
  'harrybarkema@goldafin.com',
  'naomi.kue04@gmail.com',
  'alexandrajuras5@gmail.com',
  'leniwolf04@web.de',
  'franciscomeurkens@gmail.com',
  'maxim.gusev11@gmail.com',
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
