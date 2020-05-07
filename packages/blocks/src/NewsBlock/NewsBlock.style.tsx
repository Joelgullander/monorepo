import styled from 'styled-components';

import { HiabTheme } from '@hiab/theme';

interface IStyledNewsBlock {
    theme: HiabTheme,
}

export const Item = styled.div`
    picture, img {
        min-height: 162px;
    }

    picture {
        margin-bottom: 20px;
    }

    h5 {
        margin-bottom: 10px;
        font-weight: 600;
    }

    p {
        font-size: 14px;
        margin: 0px;
        line-height: 22px;
    }

    @media screen and (max-width: 1199px) {
        margin-bottom: 30px;
    }
`;

export const Link = styled.div`
    text-align: right;
    margin-top: 20px;

    @media screen and (max-width: 1199px) {
        margin-top: 0px;
    }
`;

export const Meta = styled.div`
    margin-top: 10px;
    color: ${(props: IStyledNewsBlock) => props.theme.colors.osloGray};
    font-size: 13px;
`;