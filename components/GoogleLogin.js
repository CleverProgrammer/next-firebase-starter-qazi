// components/GoogleLogin.js
import { googleSignIn } from '@/utils/firebaseHelpers/firebaseAuth';
import styles from '@/styles/GoogleLogin.module.css';
import Image from 'next/image';

const GoogleLogin = () => {
  return (
    <div className={styles.loginContainer}>
      <h1>Next JS + Firebase Starter 🚀</h1>
<p>This app shows you how to use next js + firebase auth + firestore</p>
      <button className={styles.googleButton} onClick={googleSignIn}>
        <Image
          src='/images/google-icon.png'
          className={styles.googleButtonIcon}
          alt='Google Icon'
          width={48}
          height={48}
        />
        <span className={styles.googleButtonText}>Sign In with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
