import styled from 'styled-components';
import { HiabTheme } from '@hiab/theme';

interface IStyledCheckbox {
    theme: HiabTheme,
    checked?: boolean,
}

export const Wrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export const Input = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    text-transform: unset;
    font-family: unset;
    font-size: 14px;
    letter-spacing: unset;
`

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 17px;
    min-height: 17px;
    background-color: ${(props: IStyledCheckbox) => props.checked ? props.theme.colors.thunderbird : 'transparent'};
    border: 1px solid;
    border-color: ${(props: IStyledCheckbox) => props.checked ? props.theme.colors.thunderbird : '#D6D6D6'};
    transition: all 150ms;
    margin-right: 15px;
`;