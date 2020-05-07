import { create } from '@storybook/theming';

const theme = create({
    base: 'light',
  
    colorPrimary: '#D52B1E',
    colorSecondary: '#D52B1E',
  
    // UI
    appBg: 'white',
    appContentBg: '#f9f9f9',
    appBorderColor: '#f000',
    appBorderRadius: 0,
  
    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace',
  
    // Text colors
    textColor: '#212121',
    textInverseColor: 'rgba(255,255,255,0.9)',
  
    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: '#D52B1E',
    barBg: '#000',
  
    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,
  
    brandTitle: 'Hiab components',
    brandUrl: 'https://hiab.com',
    brandImage: 'https://www.hiab.com/Content/images/logotypes/hiab2x2.png',
  });

  export default theme;