import styled from 'styled-components';

import { HiabTheme } from '@hiab/theme';

interface IStyledArticlesBlock {
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

    @media screen and (max-width: 576px) {
        text-align: center;
    }
`;

export const Meta = styled.div`
    margin-top: 10px;
    color: ${(props: IStyledArticlesBlock) => props.theme.colors.osloGray};
    font-size: 13px;
`;

export const FeaturedArticle = styled.div`
    margin-bottom: 60px;
`;

export const FeaturedImage = styled.div`
    picture, img {
        height: 400px;
    }

    @media screen and (max-width: 1199px) {
        margin-bottom: 25px;
    }

    @media screen and (max-width: 576px) {
        picture, img {
            height: 222px;
        }
    }
`;

export const FeaturedContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h5 {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1.4px;
    }

    p {
        margin-bottom: 20px;
    }
`;