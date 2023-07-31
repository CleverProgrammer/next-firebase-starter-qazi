// utils/firebaseHelpers/firebaseAuth.js
import { auth, db } from "@/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

// Google Provider
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const email = result.user.email;

    const userDocRef = doc(db, "users", email);
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
      // user does not exist in firestore, let's add them
      await setDoc(userDocRef, {
        email,
        signedUp: serverTimestamp(),
      });
    } else {
      // user exists, update lastSignIn
      await updateDoc(userDocRef, {
        lastSignIn: serverTimestamp(),
      });
    }
  } catch (error) {
    console.error("Error signing in with Google", error);
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
