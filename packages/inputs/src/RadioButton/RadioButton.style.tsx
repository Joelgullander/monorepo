import styled from 'styled-components';
import { HiabTheme } from '@hiab/theme';

interface IStyledRadioButton {
    theme: HiabTheme,
    checked?: boolean,
}


export const RadioButton = styled.div`
    display: inline-block;

    input[type="radio"] {
        display: none;

        &:checked + label:before {
            border-color: ${(props: IStyledRadioButton) => props.theme.colors.thunderbird};;
        }

        &:checked + label:after {
            transform: scale(1);
        }

        &:focus + label:before {
            border-color: ${(props: IStyledRadioButton) => props.theme.colors.thunderbird};;
        }
    }
`;

export const Label = styled.label`
    display: inline-block;
    min-height: 20px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;
    font-size: 15px;

    &:before, &:after {
        position: absolute;
        box-sizing: border-box;
        content: '';
        border-radius: 50%;
        transition: all .3s ease;
        transition-property: transform, border-color;
    }

    &:before {
        left: 0;
        top: 0;
        width: 17px;
        height: 17px;
        border: 1px solid;
        border-color: #D6D6D6;
    }

    &:after {
        top: 4px;
        left: 4px;
        width: 9px;
        height: 9px;
        transform: scale(0);
        background: ${(props: IStyledRadioButton) => props.theme.colors.thunderbird};
    }
`;