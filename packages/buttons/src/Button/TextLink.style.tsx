import styled from 'styled-components';
import { HiabTheme } from '@hiab/theme';
import { Underline } from './TextLink';

interface IStyledTextLink {
    underline: Underline,
    theme: HiabTheme,
};

export const TextLink = styled.div`
    display: inline-block;
    position: relative;
    text-decoration: none;
    line-height: 14px;
    font-family: ${(props: IStyledTextLink) => props.theme.fonts.primary};
    transition: ${(props: IStyledTextLink) => props.theme.transition.primary} ;
    color: ${(props: IStyledTextLink) => {
        if (props.underline === Underline.DOTTED || props.underline === Underline.HALF_SOLID)
            return props.theme.colors.black;
        return props.theme.colors.thunderbird;
    }};

    ${(props: IStyledTextLink) => {
        if (props.underline === Underline.DOTTED)
            return `
                background-image: linear-gradient(to right, ${props.theme.colors.thunderbird} 20%, rgb(213,43,30, 0) 0%);
                background-position: bottom;
                background-size: 4px 1px;
                background-repeat: repeat-x;
            `
        if (props.underline === Underline.HALF_SOLID) {
            return `
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 1.3px;
                font-weight: 600;
                &:after {
                    content: '';
                    width: 45px;
                    height: 2px;
                    background: ${props.theme.colors.thunderbird};
                    position: absolute;
                    bottom: -4.5px;
                    left: 1px;
                }
            `
        }
        return `border-bottom: 1px ${props.underline} ${props.theme.colors.thunderbird}`
    }};

    & > svg {
        transform: rotateZ(270deg);
        margin-right: 5px;
    };

    &:hover, &:focus {
        color: ${(props: IStyledTextLink) => {
        if (props.underline === Underline.DOTTED || props.underline === Underline.HALF_SOLID)
            return props.theme.colors.thunderbird;
        return props.theme.colors.black;
    }};
        border-bottom: ${(props: IStyledTextLink) => {
        if (props.underline === Underline.DOTTED)
            return `background-image: linear-gradient(to right, black 100%, rgba(255,255,255,0) 0%);`
        return `1px ${props.underline} ${props.theme.colors.black}`;
    }};
    };

    &:focus {
        outline: none;
    };
`;
