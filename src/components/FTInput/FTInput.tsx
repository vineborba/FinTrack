import { useState, memo } from 'react';
import { TextInputProps, ViewStyle, StyleProp } from 'react-native';

import {
  TextInput,
  InputContainer,
  SecureTextButton,
  InputLabel,
  InputWidth,
  Icon,
  ContentWrapper,
  LabelCotainer,
} from './styles';

const defaultProps = {
  errorMessage: '',
  successMessage: '',
  label: '',
  width: 'large' as InputWidth,
  disabled: false,
  contentContainerStyle: {},
};

interface Props extends TextInputProps {
  errorMessage?: string;
  successMessage?: string;
  label?: string;
  disabled?: boolean;
  width?: InputWidth;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

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
  placeholder,
  value,
  ...rest
}: Props) {
  const [secureText, setSecureText] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ContentWrapper style={contentContainerStyle}>
      <LabelCotainer>
        {!!label && (isFocused || !!value?.length) && (
          <InputLabel
            size="hint"
            error={!!errorMessage}
            success={!!successMessage}
          >
            {label}
          </InputLabel>
        )}
      </LabelCotainer>
      <InputContainer>
        <TextInput
          error={!!errorMessage}
          success={!!successMessage}
          focused={isFocused}
          secureTextEntry={secureText}
          editable={!disabled}
          width={width}
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
            <Icon
              name={secureText ? 'eye' : 'eye-off'}
              focused={isFocused}
              error={!!errorMessage}
              success={!!successMessage}
            />
          </SecureTextButton>
        )}
      </InputContainer>
      <LabelCotainer>
        {!!(errorMessage || successMessage) && (
          <InputLabel
            size="hint"
            error={!!errorMessage}
            success={!!successMessage}
          >
            {errorMessage || successMessage}
          </InputLabel>
        )}
      </LabelCotainer>
    </ContentWrapper>
  );
}

FTInput.defaultProps = defaultProps;

export default memo<Props>(FTInput);
