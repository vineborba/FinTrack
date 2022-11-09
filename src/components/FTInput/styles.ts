import { TextInput as RNTextInput, ColorValue } from 'react-native';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { FTText } from '../FTText';

import { theme } from '../../theme';

export type InputWidth = 'small' | 'medium' | 'large' | 'full';

interface SharedStyleProps {
  focused: boolean;
  error: boolean;
  success: boolean;
}

export interface StyleProps extends SharedStyleProps {
  width: InputWidth;
}

type LabelStyleProps = Pick<SharedStyleProps, 'error' | 'success'>;

const getInputWidth = ({ width }: StyleProps) => {
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

const getBorderColor = ({ error, focused, success }: SharedStyleProps) => {
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

const getLabelColor = ({ error, success }: LabelStyleProps) => {
  if (error) {
    return theme.palette.error.main;
  }

  if (success) {
    return theme.palette.success.main;
  }

  return theme.palette.dark.light;
};

export const TextInput = styled(RNTextInput).attrs((props: StyleProps) => ({
  placeholderTextColor: () => {
    console.log(getLabelColor(props));

    return getLabelColor(props) as ColorValue;
  },
}))<StyleProps>`
  max-width: 100%;
  width: ${getInputWidth}px;
  height: ${theme.spacing.vs(40)}px;
  padding: ${theme.spacing.vs(4)}px ${theme.spacing.s(8)}px;

  background-color: ${({ editable }) =>
    editable ? theme.palette.white.main : theme.palette.secondary.light};

  color: ${theme.palette.dark.main};
  font-size: ${theme.typography.fontSize.description}px;

  border-radius: 8px;
  border-color: ${getBorderColor};
  border-width: 1px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SecureTextButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  right: ${theme.spacing.s(16)}px;
  position: absolute;
`;

export const ContentWrapper = styled.View``;

export const LabelCotainer = styled.View`
  height: ${() => 1.2 * theme.typography.fontSize.description}px;
`;

export const InputLabel = styled(FTText)<LabelStyleProps>`
  padding-left: ${theme.spacing.s(8)}px;
  color: ${getLabelColor};
`;

export const Icon = styled(FeatherIcon).attrs((props: SharedStyleProps) => ({
  color: getBorderColor(props),
  size: theme.spacing.vs(16),
}))<SharedStyleProps>``;
