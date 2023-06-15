import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'styles/Theme.styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Zavid Egbue</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
