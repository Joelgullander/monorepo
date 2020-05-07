import styled from 'styled-components';

import { HiabTheme } from '@hiab/theme';

interface IStyledFooter {
    theme: HiabTheme,
}

export const Footer = styled.footer`
    background-color: white;
    width: 100vw;
    min-height: 166px;
    height: 100%;
    border-top: 6px solid ${(props: IStyledFooter) => props.theme.colors.thunderbird};
    padding: 40px 0px;
`;

export const Address = styled.span`
    display: block;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const Contact = styled.a`
    margin-left: 5px;
`;

export const Legal = styled.small`
    display: block;
    font-weight: 100;
    font-size: 14px;

    @media screen and (max-width: 768px) {
        margin-bottom: 7px;
    }
`;

export const Row = styled.div`
    margin-bottom: 40px;
`;

export const Flex = styled.div`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap; 

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const FlexBetween = styled(Flex)`
    justify-content: space-between;
`;

export const Links = styled.ul`
    margin: 0px;
    padding: 0px;
    display: flex;
    list-style: none;

    li {
        &:not(:last-child) {
            &::after {
                display: inline-block;
                content: 'l';
                padding-left: 10px;
            }
        }

        + li {
            margin-left: 10px;
        }
    }
`;

export const SmallLinks = styled(Links)`
    li {
        font-weight: 100;
        font-size: 14px;

        &:not(:last-child) {
            &::after {
                color: ${(props: IStyledFooter) => props.theme.colors.thunderbird};
                padding-left: 7px;
            }
        }

        + li {
            margin-left: 7px;
        }
    }
`;

export const Divider = styled.div`
    margin: 0px 10px;
    
    span {
        font-weight: 100;
        font-size: 14px;
        color: ${(props: IStyledFooter) => props.theme.colors.thunderbird};
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;