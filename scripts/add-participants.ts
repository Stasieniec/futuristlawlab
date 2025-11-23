#!/usr/bin/env tsx
/**
 * Script to add new participants from the CSV to Firebase
 * Run with: npx tsx scripts/add-participants.ts
 */

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

async function main() {
  console.log('🚀 Starting to add new participants to Firebase...');
  console.log(`📧 Total new participants: ${newParticipants.length}\n`);

  // Import Firebase client-side function
  const { bulkAddRegisteredEmails } = await import('../src/lib/firestore/participants');

  try {
    const results = await bulkAddRegisteredEmails(newParticipants);

    console.log('✅ Bulk add completed!');
    console.log(`✓ Added: ${results.added}`);
    console.log(`⊘ Skipped (already exists): ${results.skipped}`);

    if (results.errors.length > 0) {
      console.log(`\n❌ Errors (${results.errors.length}):`);
      results.errors.forEach((error) => console.log(`  - ${error}`));
    }

    console.log('\n🎉 Done!');
  } catch (error) {
    console.error('❌ Error adding participants:', error);
    process.exit(1);
  }
}

main();
