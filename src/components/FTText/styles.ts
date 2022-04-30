import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';

import { theme, IColor, IPalette, fontSize, fontWeight } from '../../theme';

export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type TextColors = keyof IPalette;
export type ColorTones = keyof IColor;
export interface StyleProps {
  weight: FontWeight;
  size: FontSize;
  color: TextColors;
  colorTone: ColorTones;
}

export const Text = styled(RNText)<StyleProps>`
  font-family: ${({ weight }) => theme.typography.fontWeight[weight]};
  font-size: ${({ size }) => theme.typography.fontSize[size]}px;
  line-height: ${({ size }) => 1.2 * theme.typography.fontSize[size]}px;
  color: ${({ color, colorTone }) => theme.palette[color][colorTone]};
`;
