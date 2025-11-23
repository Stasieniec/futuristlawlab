# Adding New Hackathon Participants

This guide explains how to add new approved participants from Luma CSV exports to Firebase.

## Quick Start

1. **Extract new emails** from CSV comparison
2. **Update the script** with new emails
3. **Run the script**

## Detailed Steps

### Step 1: Compare CSV Files

When you receive a new Luma export CSV:

```bash
python3 << 'EOF'
import csv

# Update these filenames
old_file = 'public/hackathon/old-export.csv'
new_file = 'public/hackathon/new-export.csv'

old_emails = set()
with open(old_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        if row['approval_status'] == 'approved':
            old_emails.add(row['email'].lower().strip())

new_approved = []
with open(new_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        if row['approval_status'] == 'approved':
            email = row['email'].lower().strip()
            if email and email not in old_emails:
                new_approved.append(email)

print('New participants to add:')
for email in sorted(new_approved):
    print(f"  '{email}',")
print(f"\nTotal: {len(new_approved)}")
EOF
```

### Step 2: Update the Script

Edit `scripts/add-participants.mjs` and update the `newParticipants` array with the emails from Step 1.

### Step 3: Run the Script

```bash
node scripts/add-participants.mjs
```

You should see output like:
```
🚀 Starting to add participants...
📧 Total to process: 15

✓ Added: example1@email.com
✓ Added: example2@email.com
⊘ Skipped: existing@email.com (already exists)

✅ Summary:
✓ Successfully added: 14
⊘ Skipped (already exist): 1
```

## Verification

Test that new emails work:

1. Go to https://futuristlawlab.com/hackathon/team-registration
2. Try creating a team with one of the newly added emails
3. It should be accepted (no "not registered" error)

## Troubleshooting

**Error: "Cannot find module dotenv"**
```bash
npm install dotenv
```

**Participants not being validated on website**
- Check Firebase Console to ensure emails were added
- Emails must be lowercase in Firebase
- Check browser console for any Firebase errors
