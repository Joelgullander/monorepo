import styled from 'styled-components';

import { HiabTheme } from '@hiab/theme';

interface IStyledNewsletter {
    theme: HiabTheme,
}

export const Wrapper = styled.div` 
    background-color: ${(props: IStyledNewsletter) => props.theme.colors.concrete};
    padding: 35px 100px;
    text-align: center;

    @media screen and (max-width: 576px) {
        padding: 35px;
    }
`;

export const Content = styled.div`
    h2 {
        margin: 0 0 5px 0;
    }

    h3 {
        margin: 0 0 25px 0;
    }

    input {
        height: 48px;
        width: 400px;
        margin-right: 18px;
    }

    @media screen and (max-width: 768px) {
        input {
            width: 100%;
            margin-right: 0px;
            margin-bottom: 10px;
        }

        button {
            width: 100%;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        > div {
            width: 100%;
        }
    }
`

export const Small = styled.small`
    display: block;
    color: #929292;
    font-style: italic;
`;
