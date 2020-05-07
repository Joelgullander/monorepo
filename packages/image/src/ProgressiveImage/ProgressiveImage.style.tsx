import styled from 'styled-components';
import { HiabTheme } from '@hiab/theme';

interface IStyledImage {
    theme: HiabTheme,
    loaded: boolean
}

export const Picture = styled.picture`
    position: relative;
    width: 100%;
    display: block;
    overflow: hidden;
    background-color: #f1eee8;
`;

export const SmallImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(20px);
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -o-filter: blur(20px);
    -ms-filter: blur(20px);
    transform: scale(1.2);
    transition: opacity 400ms ease 0ms;
    opacity: ${(props: IStyledImage) => props.loaded ? 0 : 1};
`;

export const OrginalImg = styled.img`
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
`