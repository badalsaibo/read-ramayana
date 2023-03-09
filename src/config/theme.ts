import type { CssVarsThemeOptions } from '@mui/joy/styles';
import { body, display } from './font';

const themeConfig: CssVarsThemeOptions = {
  fontFamily: {
    body: `${body.style.fontFamily}, var(--joy-fontFamily-fallback)`,
    display: `${display.style.fontFamily}, var(--joy-fontFamily-fallback)`,
  },
  typography: {
    h1: {
      fontWeight: 'var(--joy-fontWeight-xl)'
    }
  }
};

export default themeConfig;
