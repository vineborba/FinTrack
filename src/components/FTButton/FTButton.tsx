import { ViewStyle, TextStyle } from 'react-native';

import { TouchableOpacity, ButtonLabel, Icon } from './styles';

interface ButtonProps {
  onPress?: () => void;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'cta' | 'destructive';
  type?: 'primary' | 'secondary' | 'tertiary';
  width?: 'small' | 'medium' | 'large' | 'full';
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: string;
}

const defaultProps = {
  onPress: () => {},
  label: 'cta',
  variant: 'cta',
  type: 'primary',
  width: 'full',
  icon: '',
  disabled: false,
  loading: false,
  style: {},
  textStyle: undefined,
};

function FTButton({
  onPress = () => {},
  label = 'cta',
  variant = 'cta',
  type = 'primary',
  width = 'full',
  icon = '',
  disabled = false,
  loading = false,
  style = {},
  textStyle = undefined,
}: ButtonProps) {
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
      {!!icon && (
        <Icon
          name={icon}
          disabled={disabled || loading}
          variant={variant}
          type={type}
        />
      )}
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

FTButton.defaultProps = defaultProps;

export default FTButton;
