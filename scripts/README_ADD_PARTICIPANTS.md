# Importing Hackathon Participants

This guide explains how to import approved participants from Luma CSV exports into Firebase.

## Quick Start

1. Place the new Luma CSV export in `public/hackathon/`
2. Update the CSV file path in `scripts/import-participants.ts`
3. Run the script

## Detailed Steps

### Step 1: Export from Luma

Download the latest guest list CSV from Luma and place it in the `public/hackathon/` directory.

### Step 2: Update the Script

Edit `scripts/import-participants.ts` and update the `csvPath` variable (line 81) to point to your new CSV file:

```typescript
const csvPath = path.join(process.cwd(), 'public', 'hackathon', 'your-new-export.csv');
```

### Step 3: Run the Script

```bash
npx tsx scripts/import-participants.ts
```

You should see output like:
```
Firebase config loaded: { projectId: '...', authDomain: '...' }
Starting participant import...
Parsing CSV...
Found 50 participants
✓ Added: Jane Doe (jane@example.com)
✓ Added: John Smith (john@example.com)
...

=== Import Summary ===
Total rows: 50
Added: 48
Skipped: 2
Errors: 0
Import complete!
```

## Comparing CSV Exports

To find only newly approved participants between two CSV exports:

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

## Verification

Test that newly imported emails work:

1. Go to https://futuristlawlab.com/hackathon/team-registration
2. Try creating a team with one of the newly added emails
3. It should be accepted (no "not registered" error)

## Troubleshooting

**Error: "Cannot find module dotenv"**
```bash
npm install dotenv
```

**Participants not being validated on website**
- Check Firebase Console to ensure emails were added to the `registered_participants` collection
- Emails must be lowercase in Firebase
- Check browser console for any Firebase errors
