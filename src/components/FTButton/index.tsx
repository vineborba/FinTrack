import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

import { TouchableOpacity, ButtonLabel } from './styles';

type FTButtonProp = {
  onPress?: () => void;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'cta' | 'destructive';
  type?: 'primary' | 'secondary' | 'tertiary';
  width?: 'small' | 'medium' | 'large' | 'full';
  style?: ViewStyle;
  textStyle?: TextStyle;
} & typeof DefaultProps;

export const DefaultProps = {
  onPress: () => {},
  label: 'cta',
  variant: 'cta',
  type: 'primary',
  width: 'large',
  disabled: false,
  loading: false,
  style: {},
  textStyle: undefined,
};

function FTButton({
  onPress,
  label,
  variant,
  type,
  width,
  disabled,
  loading,
  style,
  textStyle,
}: FTButtonProp) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={style}
      variant={variant}
      type={type}
      width={width}
    >
      <ButtonLabel
        style={textStyle}
        color="white"
        weight="700"
        disabled={disabled || loading}
        variant={variant}
        type={type}
      >
        {label}
      </ButtonLabel>
    </TouchableOpacity>
  );
}

FTButton.defaultProps = DefaultProps;

export default FTButton;
