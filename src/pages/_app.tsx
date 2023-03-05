import type { AppProps } from 'next/app';

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import themeConfig from 'config/theme';
import { CssBaseline } from '@mui/joy';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={extendTheme(themeConfig)}>
      <CssBaseline />
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}
