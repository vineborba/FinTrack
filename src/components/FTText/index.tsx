import React from 'react';
import { TextProps } from 'react-native';

import { Text, FontSize, FontWeight, TextColors, ColorTones } from './styles';

export type Props = {
  children: string | React.ReactNode;
  weight?: FontWeight;
  size?: FontSize;
  color?: TextColors;
  colorTone?: ColorTones;
} & TextProps &
  typeof DefaultProps;

const DefaultProps = {
  weight: '400',
  size: 'medium',
  color: 'dark',
  colorTone: 'light',
};

function FTText({
  children,
  weight = '500',
  size = 'medium',
  color = 'dark',
  colorTone = 'light',
  ...rest
}: Props) {
  return (
    <Text
      weight={weight}
      size={size}
      color={color}
      colorTone={colorTone}
      {...rest}
    >
      {children}
    </Text>
  );
}

FTText.defaultProps = DefaultProps;

export default FTText;
