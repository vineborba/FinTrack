import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { theme } from '../../theme';

import { FTText } from '../FTText';

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

function getWidth({ width }: ButtonStyleProps) {
  switch (width) {
    case 'small':
      return `${theme.spacing.s(148)}px`;
    case 'medium':
      return `${theme.spacing.s(296)}px`;
    case 'large':
      return `${theme.spacing.s(296)}px`;
    default:
      return '9999px'; // aparentemente 100% não funciona (possivelmente em scrollview)
  }
}

function getBgColor({ variant, type, disabled }: SharedStyledProps) {
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

function getBorder({ variant, type, disabled }: SharedStyledProps) {
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

function getTextColor({ variant, type, disabled }: SharedStyledProps) {
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
  min-height: ${theme.spacing.mvs(48)}px;
  width: ${getWidth};
  padding: ${theme.spacing.vs(8)}px ${theme.spacing.s(16)}px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: ${getBorder};
  background-color: ${getBgColor};
  flex-direction: row;
`;

export const Icon = styled(FeatherIcon).attrs((props: SharedStyledProps) => {
  return {
    size: theme.spacing.mvs(14),
    color: getTextColor(props),
  };
})<SharedStyledProps>`
  margin-right: ${theme.spacing.s(4)}px;
`;

export const ButtonLabel = styled(FTText).attrs({
  size: 'description',
})<SharedStyledProps>`
  text-transform: uppercase;
  color: ${getTextColor};
  text-align: center;
`;
