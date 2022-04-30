import styled from 'styled-components/native';

import { theme } from '../../theme';

import FTText from '../FTText';

export type ButtonVariant = 'cta' | 'destructive';
export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export type ButtonWidth = 'small' | 'medium' | 'large' | 'full';

export interface SharedStyledProps {
  variant: ButtonVariant;
  type: ButtonType;
  disabled: boolean;
}

export interface ButtonStyleProps extends SharedStyledProps {
  width: ButtonWidth;
}

function getBgColor(
  variant: ButtonVariant,
  type: ButtonType,
  disabled: boolean,
) {
  if (type === 'primary') {
    if (disabled) {
      return theme.palette.disabled.main;
    }

    if (variant === 'destructive') {
      return theme.palette.warning.main;
    }

    return theme.palette.primary.main;
  }

  return theme.palette.secondary.main;
}

function getBorder(
  variant: ButtonVariant,
  type: ButtonType,
  disabled: boolean,
) {
  if (type !== 'secondary') {
    return 'none';
  }

  if (disabled) {
    return `2px solid ${theme.palette.disabled.main}`;
  }

  if (variant === 'destructive') {
    return `2px solid ${theme.palette.warning.main}`;
  }

  return `2px solid ${theme.palette.secondary.main}`;
}

function getTextColor(
  variant: ButtonVariant,
  type: ButtonType,
  disabled: boolean,
) {
  if (disabled) {
    return theme.palette.dark.light;
  }

  if (type !== 'primary') {
    if (variant === 'destructive') {
      return theme.palette.warning.main;
    }

    return theme.palette.primary.main;
  }
  return theme.palette.white.main;
}

export const TouchableOpacity = styled.TouchableOpacity<ButtonStyleProps>`
  max-width: 100%;
  height: ${theme.spacing.vs(48)}px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: ${({ variant, type, disabled }) =>
    getBorder(variant, type, disabled)};
  background-color: ${({ variant, type, disabled }) =>
    getBgColor(variant, type, disabled)};
`;

export const ButtonLabel = styled(FTText).attrs({
  size: 'small',
})<SharedStyledProps>`
  text-transform: uppercase;
  color: ${({ variant, type, disabled }) =>
    getTextColor(variant, type, disabled)};
`;
