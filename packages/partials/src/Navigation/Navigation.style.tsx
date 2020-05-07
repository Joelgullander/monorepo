import styled from 'styled-components';

import { HiabTheme } from '@hiab/theme';

interface IStyledNavigation {
    theme: HiabTheme,
}

export const Container = styled.nav`
    background-color: black;
    color: white;
    width: 100vw;
    height: 92px;
    display: flex;
    align-items: center;

    a {
        color: white;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        height: 54px;

        svg {
            height: 30px;
        }
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1749px;
    width: 90%;
    margin: 0 auto;
`;

export const Links = styled.ul`
    display: block;
    margin: 0px;
    padding: 0px;
    margin-left: 60px;

    li {
        display: inline-block;
        list-style: none;

        + li {
            margin-left: 60px;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        margin-right: 13px;
    }

    @media screen and (max-width: 768px) {
        span {
            display: none;
        }
    }
`;

export const Toolbar = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props: IStyledNavigation) => props.theme.colors.concrete};
    height: 40px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const ResetButton = styled.button`
    border: none;
    font-family: inherit;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`

export const Brands = styled(ResetButton)`
    background-color: ${(props: IStyledNavigation) => props.theme.colors.thunderbird};
    height: 100%;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: white;
        margin-right: 11px;
        font-size: 13px;
    }
`;

export const Language = styled(ResetButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 100%;

    span {
        font-size: 13px;
        color: black;
        font-weight: 500;
        margin-left: 7px;
    }
`;