import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useAuth } from '@/utils/firebaseHelpers/authContext';
import { signOutUser } from '@/utils/firebaseHelpers/firebaseAuth';

import GoogleLogin from '@/components/GoogleLogin';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { user } = useAuth();

  if (user === undefined) {
    return <div>Loading...</div>;
  } else if (user) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
          <div className={styles.description}>
            <p>
              Next.js Starter: Get started quickly with next.js + firestore 🚀
            </p>
            <div>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  font: 'inherit',
                  cursor: 'pointer',
                  outline: 'inherit',
                }}
                onClick={signOutUser}
              >
                Sign Out
              </button>
            </div>
          </div>

          <h3>Hi {user.displayName}, welcome to my app 👋 your email is {user.email}</h3>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src='/next.svg'
              alt='Next.js Logo'
              width={180}
              height={37}
              priority
            />
          </div>
        </main>
      </>
    );
  } else {
    return <GoogleLogin />;
  }
}
