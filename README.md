# Next.js + Firestore Starter 🚀

This project is a simple starter for creating a web app with Next.js, Firestore, and Firebase Authentication. It features user authentication and Google Login component, with support for loading and error states.

## Local Setup

### 1. Clone this repository:

```bash
git clone https://github.com/CleverProgrammer/next-firebase-starter-qazi
```

### 2. Install the dependencies:
```bash
yarn install
```

### 3. Setup firebase

1. Create a Firebase project from the Firebase console.

2. Enable Google sign-in provider in the Authentication section of your Firebase project.

3. Create a Firestore database in your Firebase project.

4. Generate a new private key file for your service account in Firebase project settings.

5. Rename .env.example to .env.local and replace the placeholder values with your Firebase config values:

```bash
NODE_ENV="development"
NEXT_PUBLIC_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
NEXT_PUBLIC_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
NEXT_PUBLIC_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
NEXT_PUBLIC_APP_ID="YOUR_APP_ID"
NEXT_PUBLIC_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"
```

### 4. Start the local development server:
`yarn dev`

Your app should now be running on http://localhost:3000

### Deploying on Vercel
1. Create a new project on Vercel and import your repository.

2. During the import process, Vercel will ask for environment variables. Make sure to provide the same values you used in your .env.local file.

3. Deploy the project.

4. In Firebase console, in the Authentication settings, add the Vercel deployment URL to the authorized domains list.

License
This project is open source and available under the MIT License.
