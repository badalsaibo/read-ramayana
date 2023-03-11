import { CssVarsThemeOptions, extendTheme } from '@mui/joy/styles';
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
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--joy-fontFamily-display)',
          fontWeight: 700,
          "--Button-gap": "6px"
        }
      }
    }
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
            50: 'hsl(220, 80%, 94%)',
            100: 'hsl(220, 80%, 90%)',
            200: 'hsl(220, 80%, 86%)',
            300: 'hsl(220, 80%, 77%)',
            400: 'hsl(230, 80%, 68%)',
            500: 'hsl(230, 80%, 59%)',
            600: 'hsl(230, 58%, 50%)',
            700: 'hsl(230, 80%, 41%)',
            800: 'hsl(230, 80%, 32%)',
            900: 'hsl(230, 80%, 23%)',
        }
      }
    }
  }
};

export default themeConfig;
