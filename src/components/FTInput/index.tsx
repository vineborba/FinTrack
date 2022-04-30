import React, { useState, memo } from 'react';
import { TextInputProps, ViewStyle, StyleProp } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { theme } from '../../theme';

import {
  TextInput,
  InputContainer,
  SecureTextButton,
  InputLabel,
  InputWidth,
  ContentWrapper,
} from './styles';

const DefaultProps = {
  errorMessage: '',
  successMessage: '',
  label: '',
  width: 'large' as InputWidth,
  disabled: false,
  contentContainerStyle: {},
};

type Props = TextInputProps & {
  errorMessage?: string;
  successMessage?: string;
  label?: string;
  disabled?: boolean;
  width?: InputWidth;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const getPlaceholderColor = (error: string, success: string) => {
  if (error) {
    return theme.palette.error.main;
  }

  if (success) {
    return theme.palette.success.main;
  }

  return theme.palette.dark.light;
};

// TODO: descobrir como usar forwardRef sem atrapalhar resto do código
function FTInput({
  errorMessage = '',
  successMessage = '',
  label = '',
  disabled,
  onBlur,
  onFocus,
  width = 'large' as InputWidth,
  secureTextEntry,
  onChangeText,
  contentContainerStyle,
  ...rest
}: Props) {
  const [secureText, setSecureText] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ContentWrapper style={contentContainerStyle}>
      {!!label && <InputLabel size="tiny">{label}</InputLabel>}
      <InputContainer>
        <TextInput
          error={!!errorMessage}
          success={!!successMessage}
          focused={isFocused}
          secureTextEntry={secureText}
          editable={!disabled}
          width={width}
          placeholderTextColor={getPlaceholderColor(
            errorMessage,
            successMessage,
          )}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) {
              onBlur(e);
            }
          }}
          onChangeText={onChangeText}
          onFocus={(e) => {
            setIsFocused(true);
            if (onFocus) {
              onFocus(e);
            }
          }}
          {...rest}
        />
        {secureTextEntry && (
          <SecureTextButton onPress={() => setSecureText((prev) => !prev)}>
            <FontAwesomeIcon icon={secureText ? faEye : faEyeSlash} />
          </SecureTextButton>
        )}
      </InputContainer>
      {!!(errorMessage || successMessage) && (
        <InputLabel size="tiny">{errorMessage || successMessage}</InputLabel>
      )}
    </ContentWrapper>
  );
}

FTInput.defaultProps = DefaultProps;

export default memo<Props>(FTInput);
