import '@/styles/globals.css';
import { AuthProvider } from '@/utils/firebaseHelpers/authContext';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
