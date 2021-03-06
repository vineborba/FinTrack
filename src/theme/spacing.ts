import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters/extend';

export const s = (value: number) => Number(scale(value).toFixed(2));

export const vs = (value: number) => Number(verticalScale(value).toFixed(2));

export const ms = (value: number, factor = 0.5) =>
  Number(moderateScale(value, factor).toFixed(2));

export const mvs = (value: number, factor = 0.5) =>
  Number(moderateVerticalScale(value, factor).toFixed(2));

export interface ISpacing {
  s: (value: number) => number;
  vs: (value: number) => number;
  ms: (value: number, factor?: number) => number;
  mvs: (value: number, factor?: number) => number;
}

export const spacing = {
  s,
  vs,
  ms,
  mvs,
};
