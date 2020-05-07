import styled from 'styled-components';

import { HiabTheme } from '@hiab/theme';

import { IOpacity } from '../types/BaseBlock';

interface IStyledPromotionBlock {
    theme: HiabTheme,
    opacity: IOpacity,
}

export const Overlay = styled.div<any>`
    background-color: black;
    opacity: ${(props: IStyledPromotionBlock) => `${props.opacity}%`};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: background-color 0.8s ease;
`;

export const Wrapper = styled.a<any>`
    display: flex;
    position: relative;
    height: 100%;
    overflow: hidden;

    picture {
        position: absolute;
    }

    &:hover {
        ${Overlay} {
            background-color: ${(props: IStyledPromotionBlock) => props.theme.colors.thunderbird};
            transition: background-color 0.8s ease;
        }

        button {
            background-color: ${(props: IStyledPromotionBlock) => props.theme.colors.mineshaft};
        }
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    bottom: 0px;
    left: 25px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    padding: 100px 0px 40px 0px;
`;

export const Tagline = styled.span`
    display: block;
    font-size: 14px;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
`;