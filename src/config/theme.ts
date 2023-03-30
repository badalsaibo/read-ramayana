import { CssVarsThemeOptions, extendTheme } from '@mui/joy/styles';
import { body, display } from './font';

const themeConfig: CssVarsThemeOptions = {
  fontFamily: {
    body: `${body.style.fontFamily}, var(--joy-fontFamily-fallback)`,
    display: `${display.style.fontFamily}, var(--joy-fontFamily-fallback)`,
  },
  typography: {
    h1: {
      fontWeight: 'var(--joy-fontWeight-xl)',
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--joy-fontFamily-display)',
          fontWeight: 700,
          '--Button-gap': '6px',
        },
      },
    },
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
          500: 'hsl(228, 80%, 59%)',
          600: 'hsl(228, 58%, 50%)',
          700: 'hsl(230, 80%, 41%)',
          800: 'hsl(230, 80%, 32%)',
          900: 'hsl(230, 80%, 23%)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#e4fbed',
          100: '#bcf5d3',
          200: '#8cefb7',
          300: '#47e998',
          400: '#00e17e',
          500: '#00d969',
          600: '#00c85d',
          700: '#00b450',
          800: '#00a244',
          900: '#00812f',
          outlinedColor: 'var(--joy-palette-primary-500)',
          outlinedBorder: 'rgba(var(--joy-palette-primary-darkChannel) / 0.3)',
          outlinedActiveBg: 'rgba(var(--joy-palette-primary-darkChannel) / 0.2)',
          outlinedHoverBg: 'rgba(var(--joy-palette-primary-darkChannel) / 0.3)',
        },
      },
    },
  },
};

export default themeConfig;
