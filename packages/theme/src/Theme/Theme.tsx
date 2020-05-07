import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export interface ColorTheme {
  dustyGray: string;
  osloGray: string;
  mineshaft: string;
  nobel: string;
  tundora: string;
  thunderbird: string;
  gray: string;
  mako: string;
  concrete: string;
  corn: string;
  citrus: string;
  carrotOrange: string;
  edward: string;
  prairieSand: string;
  downy: string;
  limedSpruce: string;
  creamCan: string;
  tacha: string;
  rajah: string;
  oldRose: string;
  morningGlory: string;
  white: string;
  black: string;
  gainsboro: string;
  darkSilver: string;
  whiteSmoke: string;
  lightGrey: string;
};

export interface FontsTheme {
  primaryFontSource: string;
  secondaryFontSource: string,
  primary: string;
  secondary: string;
};

export interface TransitionTheme {
  primary: string,
};

export interface HiabTheme {
  colors: ColorTheme;
  fonts: FontsTheme;
  transition: TransitionTheme;
};

export const defaultTheme: HiabTheme = {
  colors: {
    dustyGray: '#9B9B9B',
    osloGray: '#878D92',
    mineshaft: '#212121',
    nobel: '#B5B5B5',
    tundora: '#444444',
    thunderbird: '#D52B1E',
    gray: '#848484',
    mako: '#434A54',
    concrete: '#F2F2F2',
    corn: '#ECC200',
    citrus: '#A3BD0B',
    carrotOrange: '#EB981B',
    edward: '#ACADAD',
    prairieSand: '#983222',
    downy: '#60C7CE',
    limedSpruce: '#37424A',
    creamCan: '#F3DA66',
    tacha: '#C8D76C',
    rajah: '#F3C176',
    oldRose: '#C1847A',
    morningGlory: '#9FDDE1',
    white: '#FFF',
    gainsboro: '#E1E1E1',
    darkSilver: '#C6C8C9',
    black: '#000',
    whiteSmoke: '#F1F1F1',
    lightGrey: '#EAEAEB',
  },
  fonts: {
    primaryFontSource: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
    secondaryFontSource: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
    primary: "'Roboto', Arial, sans-serif",
    secondary: "'Anton', sans-serif",
  },
  transition: {
    primary: 'all 0.2s ease',
  },
};

// TODO, option to pass in own theme when consuming this provider :)
export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyledThemeProvider theme={defaultTheme}>
      {children}
    </StyledThemeProvider>
  );
};