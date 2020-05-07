import React from "react"
import { BaseCSS } from 'styled-bootstrap-grid';
import { ThemeProvider, GlobalStyle } from '@hiab/theme';

const ThemeDecorator = storyFn => (
    <ThemeProvider>
        <GlobalStyle />
        <BaseCSS />

        {storyFn()}
    </ThemeProvider>
);

export default ThemeDecorator;
