import { TextProps as RNTextProps } from 'react-native';

import {
  Text,
  FontSize,
  FontWeight,
  TextColors,
  ColorTones,
  TextAlignValues,
  TextTransformValues,
} from './styles';

export interface TextProps extends RNTextProps {
  children: string | React.ReactNode;
  weight?: FontWeight;
  size?: FontSize;
  color?: TextColors;
  colorTone?: ColorTones;
  align?: TextAlignValues;
  transform?: TextTransformValues;
}

const defaultProps = {
  weight: '500',
  size: 'description',
  color: 'dark',
  colorTone: 'light',
  align: 'auto',
  transform: 'none',
};

function FTText({
  children,
  weight = '500',
  size = 'description',
  color = 'dark',
  colorTone = 'light',
  align = 'auto',
  transform = 'none',
  ...rest
}: TextProps) {
  return (
    <Text
      weight={weight}
      size={size}
      color={color}
      colorTone={colorTone}
      align={align}
      transform={transform}
      {...rest}
    >
      {children}
    </Text>
  );
}

FTText.defaultProps = defaultProps;

export default FTText;
