import styled from 'styled-components';
import { HiabTheme } from '@hiab/theme';

interface IStyledButton {
    theme: HiabTheme,
    error?: boolean,
}

export const Input = styled.input`
    color: ${(props: IStyledButton) => props.theme.colors.mako};
    display: inline-block;
    padding: 10px 12px;
    border: 1px solid;
    border-color: #D6D6D6;
    font-size: 14px;
    border-bottom: ${(props: IStyledButton) => props.error ? `2px solid ${props.theme.colors.thunderbird}` : ''};
    box-sizing: border-box;

    &::placeholder {
        color: ${(props: IStyledButton) => props.theme.colors.osloGray};
    }

    &:focus {
        outline: none;
    }
`;

export const Wrapper = styled.div`
    display: inline-block;
    
    + div {
        margin-left: 10px;
    }

`

export const Label = styled.label<any>`
    display: flex;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
`;

export const Required = styled.div`
    color: ${(props: IStyledButton) => props.theme.colors.thunderbird};
    margin-left: 5px;
`;

export const ErrorMessage = styled.small`
    display: block;
    color: ${(props: IStyledButton) => props.theme.colors.thunderbird};
    font-size: 12px;
    margin-top: 5px;
    text-align: left;
`;