import { useState, memo } from 'react';
import { TextInputProps, ViewStyle, StyleProp } from 'react-native';
import { theme } from '../../theme';

import {
  TextInput,
  LabelCotainer,
  InputLabel,
  InputWidth,
  ContentWrapper,
  AdornmentText,
  AdornmentContainer,
} from './styles';

const DefaultProps = {
  errorMessage: '',
  successMessage: '',
  label: '',
  width: 'large' as InputWidth,
  disabled: false,
  contentContainerStyle: {},
  separator: ',',
};

type Props = TextInputProps & {
  errorMessage?: string;
  successMessage?: string;
  label?: string;
  disabled?: boolean;
  width?: InputWidth;
  contentContainerStyle?: StyleProp<ViewStyle>;
  separator?: string;
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
  separator = ',',
  disabled,
  onBlur,
  onFocus,
  width = 'large' as InputWidth,
  onChangeText,
  contentContainerStyle,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (event: string) => {
    let newValue = event.replace(/[.,]/g, '');
    if (newValue.length < 3) {
      newValue = newValue.padStart(3, '0');
    }

    let integer = newValue.slice(0, -2);
    const cents = newValue.slice(-2);
    if (/\D/.test(integer) || /\D/.test(cents)) {
      return;
    }
    if (integer === '00') {
      integer = '0';
    } else if (/^0{1}/.test(integer)) {
      integer = integer.replace(/^0{1}(\d)/, '$1');
    }
    if (onChangeText) onChangeText(`${integer}${separator}${cents}`);
  };

  return (
    <ContentWrapper style={contentContainerStyle}>
      <LabelCotainer>
        {!!label && <InputLabel size="description">{label}</InputLabel>}
      </LabelCotainer>
      <AdornmentContainer>
        <AdornmentText>R$</AdornmentText>
      </AdornmentContainer>
      <TextInput
        error={!!errorMessage}
        success={!!successMessage}
        focused={isFocused}
        editable={!disabled}
        width={width}
        placeholderTextColor={getPlaceholderColor(errorMessage, successMessage)}
        onBlur={(e) => {
          setIsFocused(false);
          if (onBlur) {
            onBlur(e);
          }
        }}
        onChangeText={handleOnChange}
        onFocus={(e) => {
          setIsFocused(true);
          if (onFocus) {
            onFocus(e);
          }
        }}
        {...rest}
      />
      <LabelCotainer>
        {!!(errorMessage || successMessage) && (
          <InputLabel size="description">
            {errorMessage || successMessage}
          </InputLabel>
        )}
      </LabelCotainer>
    </ContentWrapper>
  );
}

FTInput.defaultProps = DefaultProps;

export default memo<Props>(FTInput);
