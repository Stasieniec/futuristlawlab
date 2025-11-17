# Firebase Setup Guide for Team Registration

This guide will walk you through setting up Firebase for the hackathon team registration system.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard:
   - Enter a project name (e.g., "futurist-law-hackathon")
   - Enable/disable Google Analytics (optional)
   - Click "Create project"

## Step 2: Set up Firestore Database

1. In the Firebase Console, click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose a location (select one close to your users, e.g., europe-west)
4. Start in **production mode** (we'll configure security rules next)
5. Click "Enable"

## Step 3: Configure Security Rules

1. In Firestore Database, go to the "Rules" tab
2. Replace the default rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Teams collection
    match /teams/{teamId} {
      // Anyone can read teams (for public view)
      allow read: if true;

      // Anyone can create a team
      allow create: if true;

      // Allow updates if:
      // 1. Team is not locked (normal user edits), OR
      // 2. Only the 'locked' field is being changed (admin toggling lock)
      allow update: if resource.data.locked == false
                    || (request.resource.data.diff(resource.data).affectedKeys().hasOnly(['locked', 'updatedAt']));

      // No deletes from client
      allow delete: if false;
    }

    // Config collection (admin only - no client access)
    match /config/{document=**} {
      allow read: if true;
      allow write: if false; // Admin SDK only
    }
  }
}
```

3. Click "Publish"

**Note:** These rules allow anyone to create and read teams, but prevent users from deleting teams. The admin panel will use the same Firebase client SDK but with password protection in the UI.

## Step 4: Register Your Web App

1. In the Firebase Console, click on the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (`</>`) to add a web app
5. Enter a nickname (e.g., "Team Registration Web App")
6. **Do not** check "Also set up Firebase Hosting" (we use Vercel)
7. Click "Register app"

## Step 5: Get Your Firebase Configuration

After registering, you'll see your Firebase configuration. It looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 6: Update Environment Variables

1. Open `.env.local` in the project root
2. Replace the placeholder values with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

# Set a secure admin password
NEXT_PUBLIC_ADMIN_PASSWORD=YourSecurePasswordHere
```

3. Save the file
4. **Important**: Never commit `.env.local` to Git. It's already in `.gitignore`.

## Step 7: Restart Development Server

The development server should automatically detect the new environment variables, but if you encounter issues:

```bash
# Stop the server (Ctrl+C)
# Start it again
npm run dev
```

## Step 8: Test the Integration

1. Navigate to `http://localhost:3000/hackathon/team-registration`
2. Enter an email address and try creating a team
3. Check the Firebase Console > Firestore Database to see if the team was created
4. Test editing the team (add members, change name)
5. Test the admin panel at `http://localhost:3000/hackathon/admin`
   - Use the password you set in `.env.local`

## Deployment to Vercel

When deploying to Vercel, you'll need to add the same environment variables:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add all the `NEXT_PUBLIC_FIREBASE_*` variables
4. Add `NEXT_PUBLIC_ADMIN_PASSWORD`
5. Redeploy your application

## Troubleshooting

### Error: "Firebase App named '[DEFAULT]' already exists"
- This error occurs if Firebase is initialized multiple times
- Solution: Restart your development server

### Error: "Missing or insufficient permissions"
- Check your Firestore security rules
- Make sure you published the rules in the Firebase Console

### Teams not showing up in Firestore
- Check browser console for errors
- Verify environment variables are set correctly
- Make sure you restarted the dev server after adding env vars

### Admin panel password not working
- Check that `NEXT_PUBLIC_ADMIN_PASSWORD` is set in `.env.local`
- Make sure there are no extra spaces or quotes in the password
- Restart the dev server

## Firebase Free Tier Limits

The Firebase free tier (Spark plan) includes:
- **50,000 reads/day** - More than enough for hundreds of team views
- **20,000 writes/day** - Plenty for team creation and updates
- **1 GB storage** - You'll use less than 10 MB
- **10 GB bandwidth/month** - Sufficient for the hackathon

For a hackathon with 50 teams and ~200 participants, you'll be well within the free tier limits.

## Security Considerations

**Current Setup:**
- ✅ Read access: Anyone can view teams (good for transparency)
- ✅ Write access: Anyone can create/edit teams (suitable for hackathon)
- ✅ Delete access: Blocked (only admin can delete via UI)
- ✅ Admin panel: Password protected (client-side)

**For Production (Optional Enhancements):**
- Consider adding Firebase Authentication for better user management
- Implement email verification for team leads
- Add rate limiting to prevent spam team creation
- Use Firebase Cloud Functions for server-side validation

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Next.js with Firebase](https://firebase.google.com/docs/web/setup)

---

**Next Steps:**
Once Firebase is set up and tested locally, you can:
1. Link from the hackathon page to `/hackathon/team-registration`
2. Announce team registration to participants
3. Use the admin panel to lock teams before the event
4. Export team data to CSV for planning purposes
