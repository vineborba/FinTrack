export interface IColor {
  main: string;
  medium: string;
  light: string;
}

export interface IPalette {
  primary: IColor;
  secondary: IColor;
  success: IColor;
  attention: IColor;
  warning: IColor;
  error: IColor;
  dark: IColor;
  light: IColor;
  disabled: IColor;
  white: IColor;
  black: IColor;
}

export const palette: IPalette = {
  primary: {
    main: '#6600CC',
    medium: '#AC5DD9',
    light: '#DDA5E9',
  },
  secondary: {
    main: '#00CFDE',
    medium: '#73DFE7',
    light: '#A9EFF2',
  },
  success: {
    main: '#06C270',
    medium: '#39D98A',
    light: '#57EBA1',
  },
  attention: {
    main: '#FFCC00',
    medium: '#FDDD48',
    light: '#FDED72',
  },
  warning: {
    main: '#FF8800',
    medium: '#FDAC42',
    light: '#FCCC75',
  },
  error: {
    main: '#FF3B3B',
    medium: '#FF5C5C',
    light: '#FF8080',
  },
  dark: {
    main: '#28293D',
    medium: '#555770',
    light: '#8F90A6',
  },
  light: {
    main: '#EBEBF0',
    medium: '#F2F2F5',
    light: '#FAFAFC',
  },
  disabled: {
    main: '#FAFAFA',
    medium: '#FAFAFA',
    light: '#FAFAFA',
  },
  white: {
    main: '#FFFFFF',
    medium: '#FFFFFF',
    light: '#FFFFFF',
  },
  black: {
    main: '#000000',
    medium: '#000000',
    light: '#000000',
  },
};
