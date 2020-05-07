import styled from 'styled-components';
import { HiabTheme } from '@hiab/theme';
import { IconPosition, Variants, Size } from './Button';

const height = {
    big: "56px",
    medium: "48px",
    small: "34px",
}

interface IStyledButton {
    theme: HiabTheme,
    disabled?: boolean,
    variant?: Variants,
    size?: Size,
    inverted?: boolean,
    iconPosition?: IconPosition,
    active?: boolean,
}

export const Button = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-family: ${(props: IStyledButton) => props.theme.fonts.primary};
    padding: ${(props: IStyledButton) => props.variant === Variants.ICON_ROUNDED ? '0 15px' : '0px 26px'};
    height: ${(props: IStyledButton) => height[props.size || Size.MEDIUM]};
    background-color: ${(props: IStyledButton) => !props.inverted
        ? props.theme.colors.white
        : props.theme.colors.thunderbird};
    text-decoration: none;
    text-transform: uppercase;
    transition: ${(props: IStyledButton) => props.theme.transition.primary};
    font-size: ${(props: IStyledButton) => props.size === Size.SMALL ? '12px' : '13px'};
    letter-spacing: ${(props: IStyledButton) => {
        if (props.size === Size.BIG)
            return '1.5px';
        if (props.size === Size.MEDIUM)
            return '1.3px';
        return '1.2px';
    }};
    background-color: ${(props: IStyledButton) => {
        if (props.disabled && props.inverted)
            return props.theme.colors.white;
        if (props.disabled)
            return props.theme.colors.gainsboro;
        if (props.inverted || props.active)
            return props.theme.colors.white;
        return props.theme.colors.thunderbird;
    }};
    color: ${(props: IStyledButton) => {
        if (props.disabled && props.inverted)
            return props.theme.colors.lightGrey;
        if (props.disabled)
            return props.theme.colors.darkSilver;
        if (props.inverted)
            return props.theme.colors.black;
        if (props.active)
            return props.theme.colors.thunderbird;
        return props.theme.colors.white;
    }};
    border-radius: ${(props: IStyledButton) => {
        if (props.variant === Variants.ROUNDED || props.variant === Variants.ICON_ROUNDED)
            return '30px';
        return '0px';
    }
    };
    pointer-events:  ${(props: IStyledButton) => props.disabled ? 'none' : 'all'};
    border: ${(props: IStyledButton) => {
        if (props.inverted && props.disabled)
            return `1px solid ${props.theme.colors.whiteSmoke}`;
        if (props.inverted)
            return `1px solid ${props.theme.colors.nobel}`
        if (props.inverted)
            return 'none';
        return 'none';
    }};

    & > svg {
        ${(props: IStyledButton) => {
        if (props.variant === Variants.ICON_ROUNDED)
            return 'margin: 0;';

        if (props.iconPosition === IconPosition.LEFT)
            return 'margin-right: 19px;';

        return 'margin-left: 12px';
    }
    }
    };

    &:hover, &:focus {
        ${(props: IStyledButton) => {
        if (!props.active) {
            return (`
                background-color: ${props.inverted ? props.theme.colors.thunderbird : props.theme.colors.mineshaft};
                transition: background-color 0.3s ease;
                color: ${props.inverted && props.theme.colors.white};
                border: ${ props.inverted && `1px solid ${props.theme.colors.thunderbird}`};
            `);
        }
        return;
    }}
    };

    &:focus {
        outline: none;
    };
`;
