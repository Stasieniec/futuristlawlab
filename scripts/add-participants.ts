#!/usr/bin/env tsx
/**
 * Script to add new participants from the CSV to Firebase
 * Run with: npx tsx scripts/add-participants.ts
 *
 * Updated: 2025-11-28 from CSV export
 */

const newParticipants = [
  'alaaa.hussaini@gmail.com',
  'weyhofensimon@gmail.com',
  'theoruterwurtzen@gmail.com',
  'daniel.brancus@gmail.com',
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
  'external@aimpple.nl',
  'xiny0330@gmail.com',
  'jiangyaokais@gmail.com',
  'oanaucs@gmail.com',
  'beshoy22901@gmail.com',
  'grundlantonia01@gmail.com',
  'laurkapeirs@gmail.com',
  'kate.o4302@gmail.com',
  'doddsdarcy@gmail.com',
  'maxoromurillo@gmail.com',
  'kaistouthart@hotmail.com',
  'sfan289@aucklanduni.ac.nz',
  'vungocbao.2004@gmail.com',
  'diananitun@gmail.com',
  'marrta.lm@gmail.com',
  'ozturkden738@gmail.com',
  'mitrabamdad@outlook.com',
  'sooriyaa.karunaharan@student.uva.nl',
  'kshitijpatil1098@gmail.com',
  'frangalvez36@gmail.com',
  'valentinacerutti26@gmail.com',
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
