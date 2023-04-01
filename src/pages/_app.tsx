import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import CssBaseline from '@mui/joy/CssBaseline';
import GlobalStyles from '@mui/joy/GlobalStyles';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

import themeConfig from 'config/theme';
import Layout from 'components/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  isSarga?: boolean;
};

type CustomAppProps = AppProps & {
  Component: NextPageWithLayout;
};

const globalStyles = (
  <GlobalStyles
    styles={{
      'html, body, div#__next': {
        height: '100%',
      },
      body: {
        maxWidth: '768px',
        margin: '0 auto',
      },
    }}
  />
);

export default function App({ Component, pageProps }: CustomAppProps) {
  const isSarga = Component.isSarga || false;
  return (
    <CssVarsProvider theme={extendTheme(themeConfig)} defaultMode="system">
      <Layout isSarga={isSarga}>
        <CssBaseline />
        {globalStyles}
        <Component {...pageProps} />
      </Layout>
    </CssVarsProvider>
  );
}
