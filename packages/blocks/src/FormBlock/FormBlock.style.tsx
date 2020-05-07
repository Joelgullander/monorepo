import styled from 'styled-components';

import { HiabTheme } from '@hiab/theme';

interface IStyledFormBlock {
    theme: HiabTheme,
}

export const Wrapper = styled.div` 
    background-color: ${(props: IStyledFormBlock) => props.theme.colors.concrete};
    padding: 18px 24px;
`;

export const Content = styled.div`
    h3 {
        margin-bottom: 10px; /* Remove later */
    }

    p {
        margin-bottom: 10px; /* Remove later */
    }
`;

export const Form = styled.form`
    padding-top: 16px;
`;

export const Fieldset = styled.fieldset`
    margin: 0px;
    padding: 0px;
    border: none;
    margin-bottom: 30px;

    div > div {
        width: 100%;
    }
    
    input {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;

        input {
            margin-bottom: 10px;
        }
    }
`;

export const FieldRow = styled.div`
    margin-bottom: 27px;

    @media screen and (max-width: 768px) {
        margin-bottom: 0px;
    }
`

export const Checkbox = styled.div`
    max-width: 700px;
    margin-bottom: 28px;
`;