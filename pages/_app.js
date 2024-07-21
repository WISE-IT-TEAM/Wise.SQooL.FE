// pages/_app.js
import Layout from './layout';
import '../styles/globals.css';
import { ToastProvider } from '../context/ToastContext';
import { DarkModeProvider } from '../context/DarkModeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <DarkModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkModeProvider>
    </ToastProvider>
  );
}

export default MyApp;