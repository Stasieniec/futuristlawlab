/**
 * Manual script to add new participants
 * This outputs Firestore commands that can be run manually in the Firebase Console
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

console.log('='.repeat(80));
console.log('NEW PARTICIPANTS TO ADD TO FIREBASE');
console.log('='.repeat(80));
console.log('\nYou can add these to Firebase in one of two ways:\n');

console.log('METHOD 1: Use the Firebase Console (https://console.firebase.google.com)');
console.log('=========================================================================');
console.log('1. Go to Firestore Database');
console.log('2. Navigate to the "registered_participants" collection');
console.log('3. Click "Add document" for each email below:\n');

newParticipants.forEach((email, index) => {
  console.log(`${index + 1}. Document ID: Auto-ID`);
  console.log(`   Fields:`);
  console.log(`   - email: "${email}"`);
  console.log(`   - registeredAt: (timestamp) ${new Date().toISOString()}\n`);
});

console.log('\nMETHOD 2: Use Firebase CLI batch import');
console.log('==========================================');
console.log('Create a JSON file with this content and use Firebase import tools:\n');

const firestoreData = {
  __collections__: {
    registered_participants: newParticipants.reduce((acc, email, index) => {
      acc[`participant_${Date.now()}_${index}`] = {
        email: email,
        registeredAt: { __datatype__: 'timestamp', value: new Date().toISOString() }
      };
      return acc;
    }, {})
  }
};

console.log(JSON.stringify(firestoreData, null, 2));

console.log('\n' + '='.repeat(80));
console.log(`Total participants to add: ${newParticipants.length}`);
console.log('='.repeat(80));
