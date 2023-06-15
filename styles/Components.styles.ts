import { css, type Components, type Theme } from '@mui/material';

const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: (theme) => css`
      body {
        background-color: ${theme.palette.background.paper};
        font-feature-settings: 'lnum';
        overscroll-behavior: none;
      }
    `,
  },
};

export default components;
