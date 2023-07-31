// components/GoogleLogin.js
import { googleSignIn } from '@/utils/firebaseHelpers/firebaseAuth';
import styles from '@/styles/GoogleLogin.module.css';
import Image from 'next/image';

const GoogleLogin = () => {
  return (
    <div className={styles.loginContainer}>
      <h1>GetClips.ai</h1>
      <p>Turn your long-form videos into shorts, reels, and tiktoks 🚀</p>
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
