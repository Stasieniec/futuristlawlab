#!/usr/bin/env tsx
/**
 * Script to add new participants from the CSV to Firebase
 * Run with: npx tsx scripts/add-participants.ts
 *
 * Updated: 2025-11-29 from CSV export
 */

const newParticipants = [
  'abalasa25@yahoo.com',
  'alaaa.hussaini@gmail.com',
  'alexandrajuras5@gmail.com',
  'anadediu07@gmail.com',
  'bas@landman.eu',
  'beshoy22901@gmail.com',
  'britt.zeegers@student.uva.nl',
  'daniel.brancus@gmail.com',
  'diananitun@gmail.com',
  'doddsdarcy@gmail.com',
  'emma.sforza06@gmail.com',
  'external@aimpple.nl',
  'franciscomeurkens@gmail.com',
  'frangalvez36@gmail.com',
  'gamalijdominika@gmail.com',
  'grundlantonia01@gmail.com',
  'hannaschmidt28@gmx.de',
  'harrybarkema@goldafin.com',
  'i.brouwer@houthoff.com',
  'ijedreus@gmail.com',
  'jeroen.schouten@pinsentmasons.com',
  'jiangyaokais@gmail.com',
  'jonne@moonlit.ai',
  'kaistouthart@hotmail.com',
  'kate.o4302@gmail.com',
  'kshitijpatil1098@gmail.com',
  'laurkapeirs@gmail.com',
  'leniwolf04@web.de',
  'mark@sirachventures.com',
  'marrta.lm@gmail.com',
  'maxim.gusev11@gmail.com',
  'maxoromurillo@gmail.com',
  'maxwellmilena@icloud.com',
  'missihavenoidea@gmail.com',
  'mitrabamdad@outlook.com',
  'naomi.kue04@gmail.com',
  'oanaucs@gmail.com',
  'ozturkden738@gmail.com',
  'rosadegoeij04@gmail.com',
  'sarasamaha03@gmail.com',
  'sfan289@aucklanduni.ac.nz',
  'sooriyaa.karunaharan@student.uva.nl',
  'svetlazdravkova4@gmail.com',
  'theoruterwurtzen@gmail.com',
  'todascaandrei@gmail.com',
  'trivedismith1999@gmail.com',
  'valentinacerutti26@gmail.com',
  'vungocbao.2004@gmail.com',
  'weyhofensimon@gmail.com',
  'wouter.seinen@pinsentmasons.com',
  'xiny0330@gmail.com',
  'zhaizhaoyue520@gmail.com',
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
