import styled from 'styled-components';

import { HiabTheme } from '@hiab/theme';

import { IOpacity, IAlign } from '../types/BaseBlock';

interface IStyledFullwidthBlock {
    theme: HiabTheme,
    align: IAlign,
    opacity: IOpacity,
}

export const Wrapper = styled.div` 
    display: flex;
    position: relative;
    height: 100%;
    width: 100vw;
    overflow: hidden;

    picture {
        position: absolute;
    }
`;

export const Overlay = styled.div<any>`
    background: black;
    opacity: ${(props: IStyledFullwidthBlock) => `${props.opacity}%`};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;

export const Content = styled.div<any>`
    position: relative;
    z-index: 3;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: ${(props: IStyledFullwidthBlock) => props.align === IAlign.LEFT ? 'left' : 'right'};
    justify-content: center;
    padding: 100px 0px;

    @media screen and (max-width: 576px) {
        text-align: center;
    }
`;