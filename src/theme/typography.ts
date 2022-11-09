import { fs } from './spacing';

interface IFontSize {
  hint: number;
  description: number;
  subtitle: number;
  title: number;
  hero: number;
}

interface IFontWeight {
  '300': string;
  '500': string;
  '700': string;
  '900': string;
}

export interface ITypography {
  fontSize: IFontSize;
  fontWeight: IFontWeight;
}

export const fontSize: IFontSize = {
  hint: fs(12),
  description: fs(14),
  subtitle: fs(16),
  title: fs(24),
  hero: fs(32),
};

export const fontWeight: IFontWeight = {
  '300': 'CeraPro-Light',
  '500': 'CeraPro-Medium',
  '700': 'CeraPro-Bold',
  '900': 'CeraPro-Black',
};

export const typography: ITypography = {
  fontSize,
  fontWeight,
};
