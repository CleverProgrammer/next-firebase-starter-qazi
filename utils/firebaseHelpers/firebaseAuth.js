import { auth, db } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  increment, // import increment
} from 'firebase/firestore';

// Google Provider
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const email = result.user.email;

    const userDocRef = doc(db, 'users', email);
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
      // user does not exist in firestore, let's add them
      await setDoc(userDocRef, {
        email,
        signedUp: serverTimestamp(),
        loginCount: 1, // set loginCount to 1 since it's their first login
      });
    } else {
      // user exists, update lastSignIn and increment loginCount
      await updateDoc(userDocRef, {
        lastSignIn: serverTimestamp(),
        loginCount: increment(1), // increment loginCount by 1
      });
    }
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
