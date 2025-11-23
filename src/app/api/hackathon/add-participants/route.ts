import { NextResponse } from 'next/server';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const newParticipants = [
  'besseling.merel@gmail.com',
  'diananitun@gmail.com',
  'elena.stunda@gmail.com',
  'frangalvez36@gmail.com',
  'kaistouthart@hotmail.com',
  'kshitijpatil1098@gmail.com',
  'marrta.lm@gmail.com',
  'micha.sierp@gmail.com',
  'missihavenoidea@gmail.com',
  'mitrabamdad@outlook.com',
  'ozturkden738@gmail.com',
  'richardtrus25@gmail.com',
  'sfan289@aucklanduni.ac.nz',
  'sooriyaa.karunaharan@student.uva.nl',
  'sydneyrichard@artificialintelligence4good.com',
  'todascaandrei@gmail.com',
  'valentinacerutti26@gmail.com',
  'vungocbao.2004@gmail.com',
];

const PARTICIPANTS_COLLECTION = 'registered_participants';

async function isEmailRegistered(email: string): Promise<boolean> {
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
    return false;
  }
}

export async function POST() {
  const results = {
    added: 0,
    skipped: 0,
    errors: [] as string[],
  };

  for (const email of newParticipants) {
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

  return NextResponse.json(results);
}
