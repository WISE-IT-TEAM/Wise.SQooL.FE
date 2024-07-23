// pages/_app.js
import Layout from './layout';
import '../styles/globals.css';
import { ToastProvider } from '../context/ToastContext';
import { DarkModeProvider } from '../context/DarkModeContext';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </DarkModeProvider>
  );
}

export default MyApp;