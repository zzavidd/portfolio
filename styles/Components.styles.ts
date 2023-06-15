import { css, type Components, type Theme } from '@mui/material';

const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: () => css`
        body {
          font-feature-settings: 'lnum';
          overscroll-behavior: none;
        }
  `,
      }
};

export default components;
