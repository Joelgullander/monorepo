import { createGlobalStyle } from 'styled-components';
import { HiabTheme } from '@hiab/theme';

interface IGlobalStyle {
  theme: HiabTheme,
}

export const GlobalStyle = createGlobalStyle`
 body {
    font-family: ${(props: IGlobalStyle) => props.theme.fonts.primary};
    color: ${(props: IGlobalStyle) => props.theme.colors.mako};
  }

  a {
    color: ${(props: IGlobalStyle) => props.theme.colors.thunderbird};
  }

  h1, h2, h3, h4, h5, hr {
    margin: 0;
  }

  ::-moz-selection { /* Code for Firefox */
    color: white;
    background: ${(props: IGlobalStyle) => props.theme.colors.thunderbird};
  }
  
  ::selection {
    color: white;
    background: ${(props: IGlobalStyle) => props.theme.colors.thunderbird};
  }
`
