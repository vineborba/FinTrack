/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'react-native',

  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleNameMapper: {
    '.+\\.(png)$': 'jest-transform-stub',
    '\\.(svg)$': '<rootDir>/jest/svgMock.js',
  },
  transformIgnorePatterns: [],
};
