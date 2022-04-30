import { TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components/native';

import FTText from '../FTText';

import { theme } from '../../theme';

export type InputWidth = 'small' | 'medium' | 'large' | 'full';

export interface StyleProps {
  error: boolean;
  focused: boolean;
  success: boolean;
  width: InputWidth;
}

const getInputWidth = (width: string) => {
  if (width === 'small') {
    return theme.spacing.s(96);
  }

  if (width === 'medium') {
    return theme.spacing.s(192);
  }

  if (width === 'full') {
    return theme.spacing.s(365);
  }

  return theme.spacing.s(288);
};

const getBorderColor = (focused: boolean, error: boolean, success: boolean) => {
  if (error) {
    return theme.palette.error.main;
  }

  if (focused) {
    return theme.palette.primary.main;
  }

  if (success) {
    return theme.palette.success.main;
  }

  return theme.palette.light.main;
};

export const TextInput = styled(RNTextInput)<StyleProps>`
  max-width: 100%;
  width: ${({ width }) => getInputWidth(width)}px;
  height: ${theme.spacing.vs(48)}px;
  padding: ${theme.spacing.vs(4)}px ${theme.spacing.s(8)}px;

  background-color: ${({ editable }) =>
    editable ? theme.palette.white.main : theme.palette.disabled.main};

  color: ${theme.palette.dark.main};
  font-size: ${theme.typography.fontSize.medium}px;

  border-radius: 8px;
  border-color: ${({ focused, error, success }) =>
    getBorderColor(focused, error, success)};
  border-width: 1px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SecureTextButton = styled.TouchableOpacity`
  height: ${theme.spacing.vs(32)}px;
  width: ${theme.spacing.s(32)}px;
  left: ${theme.spacing.s(-40)}px;
  margin: ${theme.spacing.vs(4)}px;
  justify-content: center;
  align-items: center;
`;

export const InputLabel = styled(FTText)`
  padding-left: ${theme.spacing.s(8)}px;
`;

export const ContentWrapper = styled.View``;

export const Text = styled(FTText)``;
