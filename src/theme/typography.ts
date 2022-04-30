import { RFValue } from 'react-native-responsive-fontsize';

import env from '../config/env';

export interface ITypography {
  fontSize: {
    tiny: number;
    small: number;
    medium: number;
    big: number;
    title: number;
  };
  fontWeight: {
    '300': string;
    '400': string;
    '500': string;
    '700': string;
  };
}

export const fontSize = {
  tiny: Number(RFValue(10, env.baseHeight).toFixed(2)),
  small: Number(RFValue(14, env.baseHeight).toFixed(2)),
  medium: Number(RFValue(16, env.baseHeight).toFixed(2)),
  big: Number(RFValue(20, env.baseHeight).toFixed(2)),
  title: Number(RFValue(24, env.baseHeight).toFixed(2)),
};

export const fontWeight = {
  '300': 'Sora_300Light',
  '400': 'Sora_400Regular',
  '500': 'Sora_500Medium',
  '700': 'Sora_700Bold',
};

export const typography: ITypography = {
  fontSize,
  fontWeight,
};
