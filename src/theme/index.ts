import { ITypography, typography } from './typography';
import { IPalette, palette } from './palette';
import { ISpacing, spacing } from './spacing';

export { typography, fontSize, fontWeight } from './typography';
export type { ITypography } from './typography';

export { palette } from './palette';
export type { IColor, IPalette } from './palette';

export * from './spacing';

export interface FTTheme {
  typography: ITypography;
  palette: IPalette;
  spacing: ISpacing;
}

export const theme: FTTheme = {
  typography,
  palette,
  spacing,
};
