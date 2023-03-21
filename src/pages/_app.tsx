import type { AppProps } from 'next/app';

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import themeConfig from 'config/theme';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Layout from 'components/Layout';
import HydrationResolver from 'components/HydrationResolver';

const globalStyles = (
  <GlobalStyles
    styles={{
      'html, body, div#__next': {
        height: '100%',
      },
    }}
  />
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={extendTheme(themeConfig)} defaultMode="system">
      {globalStyles}
      <HydrationResolver>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </HydrationResolver>
    </CssVarsProvider>
  );
}
