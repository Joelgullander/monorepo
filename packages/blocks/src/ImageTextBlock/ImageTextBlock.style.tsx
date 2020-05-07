import styled from 'styled-components';

// import { HiabTheme } from '@hiab/theme';

export type Variants = "default" | "rounded";

// interface IWrapper {
//     theme: HiabTheme,
//     disabled?: boolean,
//     variant?: Variants
// }

export const Wrapper = styled.div`

    picture, img {
        height: 344px;
    }

    @media screen and (max-width: 576px) {
        picture, img {
            height: 222px;
        }
    }
`;

export const InnerWrapper = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;

   p {
       margin-bottom: 25px; /* TODO: Remove later */
   }
`;

export const Content = styled.div`
    @media screen and (max-width: 1200px) {
        margin-top: 20px;
    }
`;