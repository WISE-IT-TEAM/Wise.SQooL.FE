// pages/_app.js
import Layout from './layout';
import '../styles/globals.css';
import { DarkModeProvider } from '../context/DarkModeContext';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}

export default MyApp;