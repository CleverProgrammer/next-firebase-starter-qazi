# GetClips.ai

[NextFirebaseStarter.ai](https://getclips.ai) is a simple app that allows you to get up & running with firebase + next + auth

## Tech Stack

- Next.js
- Firebase Auth + Firestore

## Setup Instructions

### 1. Clone the repository:
bash
`git clone https://github.com/yourusername/getclips.ai.git`

### 2. Install the dependencies:
`yarn`

### 3. Setup the Firebase:
- Create a new Firebase project.
- Create a Firestore database.
- Setup authentication in Firebase and enable Google as a provider.
- Add your domain to the authorized domains in Firebase authentication settings. This step is only required for production, not for local development.

### 4. Setup environment variables:
- Copy the .env.example file to a new file named .env.local.
- Fill the .env.local file with your actual Firebase credentials and other settings.
- You can find these values in your Firebase project settings.

### 5. Run the project:
- yarn dev