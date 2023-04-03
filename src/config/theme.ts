import { CssVarsThemeOptions, extendTheme } from '@mui/joy/styles';
import { body, display } from './font';

declare module '@mui/joy/styles' {
  interface Palette {
    background: {
      navigationBar: string;
    };
    custom: {
      paddedButton: string;
      paddedButtonIcon: string;
      commentaryBg: string;
    };
  }
}

const theme = extendTheme();

const themeConfig: CssVarsThemeOptions = {
  fontFamily: {
    body: `${body.style.fontFamily}, var(--joy-fontFamily-fallback)`,
    display: `${display.style.fontFamily}, var(--joy-fontFamily-fallback)`,
  },
  typography: {
    h1: {
      fontWeight: 'var(--joy-fontWeight-xl)',
    },
    body1: {
      '@media (min-width: 1024px)': {
        fontSize: '1.25rem',
      },
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
          50: '#e3ecfc',
          100: '#d1dffa',
          200: '#bfd2f8',
          300: '#95b5f3',
          400: '#6c82ef',
          500: '#4364ea',
          600: '#3653c9',
          700: '#1531bc',
          800: '#102693',
          900: '#0c1b6a',
        },
        background: {
          navigationBar: 'hsla(0 0% 100% / 0.8)',
        },
        custom: {
          paddedButton: 'var(--joy-palette-primary-600)',
          paddedButtonIcon: theme.palette.info[300],
          commentaryBg: 'hsl(215deg 50% 79% / 40%)',
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
        background: {
          navigationBar: 'hsl(211deg 20% 10% / 70%)',
        },
        custom: {
          paddedButton: 'var(--joy-palette-primary-100)',
          paddedButtonIcon: 'currentColor',
          commentaryBg: 'hsl(247deg 31% 46% / 40%)',
        },
      },
    },
  },
};

export default themeConfig;
