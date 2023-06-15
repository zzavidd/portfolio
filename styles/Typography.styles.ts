import type { TypographyOptions } from '@mui/material/styles/createTypography';
import { Mulish } from 'next/font/google';

export const mulish = Mulish({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '400', '500', '700', '800', '900'],
});

const typography: TypographyOptions = {
  fontFamily: mulish.style.fontFamily,
  fontWeightRegular: 800,
  h1: {
    fontWeight: 900,
  },
};

export default typography;
