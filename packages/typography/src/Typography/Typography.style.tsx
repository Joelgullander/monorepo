import styled from 'styled-components';
import { HiabTheme } from '@hiab/theme';
import { ListType } from './Typography';

interface IStyledTypography {
    theme: HiabTheme,
    listType?: ListType,
    color?: string,
};

export const Tagline = styled.div`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.thunderbird};
    font: 17px ${(props: IStyledTypography) => props.theme.fonts.primary};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.7px;
    margin: 0 0 30px 0;
`;

export const h1 = styled.h1`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mineshaft};
    font: 47px/60px ${(props: IStyledTypography) => props.theme.fonts.secondary};
    text-transform: uppercase;
    letter-spacing: 1.88px;
    margin: 0 0 30px 0;
`;

export const Ingress = styled.div`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mako};
    font: 22px/33px ${(props: IStyledTypography) => props.theme.fonts.primary};
    letter-spacing: 0px;
    font-weight: 300;
    margin: 0 0 60px 0;
`;

export const h2 = styled.h2`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mineshaft};
    font: 34px/43px ${(props: IStyledTypography) => props.theme.fonts.primary};
    font-weight: 700;
    margin: 0 0 20px 0;
`;

export const h3 = styled.h3`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mineshaft};
    font: 24px/31px ${(props: IStyledTypography) => props.theme.fonts.primary};
    font-weight: 700;
    margin: 0 0 20px 0;
`;

export const h4 = styled.h4`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mineshaft};
    font: 20px/26px ${(props: IStyledTypography) => props.theme.fonts.primary};
    font-weight: 700;
    margin: 0 0 20px 0;
`;

export const h5 = styled.h5`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mineshaft};
    font: 18px/24px ${(props: IStyledTypography) => props.theme.fonts.primary};
    font-weight: 400;
    margin: 0 0 20px 0;
`;

export const Meta = styled.div`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.osloGray};
    font: 17px ${(props: IStyledTypography) => props.theme.fonts.primary};
    margin: 0 0 50px 0;
`;

export const Body = styled.p`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mako};
    font: 16px/25px ${(props: IStyledTypography) => props.theme.fonts.primary};
    margin: 0 0 50px 0;
`;

export const EmfasItalic = styled.div`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mako};
    font: italic 22px/33px ${(props: IStyledTypography) => props.theme.fonts.primary};
    margin: 0 0 40px 0;
`;

export const Blockquote = styled.blockquote`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mako};
    font: 15px/25px ${(props: IStyledTypography) => props.theme.fonts.primary};
    border-left: 5px solid ${(props: IStyledTypography) => props.theme.colors.thunderbird};
    padding: 10px 0 10px 20px;
    font-weight: 700;
    margin: 0 0 20px 0;
`;

export const Line = styled.hr`
    border: 0;
    background: ${(props: IStyledTypography) => props.color || '#D6D6D6'};
    height: 2px;
`;

export const List = styled.ul`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mako};
    font: 16px/25px ${(props: IStyledTypography) => props.theme.fonts.primary};
    margin: 0 0 50px 0;
    ${(props: IStyledTypography) => {
        if (props.listType === 'ordered')
            return `
                list-style: none;
                counter-reset: li;

                & > li {
                    counter-increment: li;

                    &:before {
                        content: counter(li);
                        color: ${props.theme.colors.black};
                        display: inline-block;
                        margin-left: -35px;
                        line-height: 10px;
                        font-size: 17px;
                        position: absolute;
                        top: 14px;
                        font-weight: 900;
                    }  
                }
            `;
        if (props.listType === 'bullet')
            return `
                list-style: none;
               
                & > li {
                    &:before {
                        content: "•";
                        color: ${props.theme.colors.thunderbird};
                        display: inline-block;
                        width: 28px;
                        margin-left: -35px;
                        line-height: 10px;
                        font-size: 30px;
                        position: absolute;
                        top: 14px;
                    }  
                }
            `;
        return 'list-style: none';
    }}
`;

export const ListItem = styled.li`
    padding: 5px 0 5px 18px;
    position: relative;  
`;

export const Callout = styled.div`
    font: 22px/33px ${(props: IStyledTypography) => props.theme.fonts.primary};
    font-weight: 300;
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.osloGray};
    margin: 0 0 60px 0;
`;

export const h1Display = styled.h1`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.black};
    font: 47px/60px ${(props: IStyledTypography) => props.theme.fonts.secondary};
    text-transform: uppercase;
    letter-spacing: 1.88px;
    margin: 0 0 30px 0;
`;

export const h2Display = styled.h2`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.black};
    font: 32px/44px ${(props: IStyledTypography) => props.theme.fonts.secondary};
    text-transform: uppercase;
    letter-spacing: 0;
    margin: 0 0 30px 0;
`;

export const h2DisplayLight = styled.h2`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.mineshaft};
    font: 34px/43px ${(props: IStyledTypography) => props.theme.fonts.primary};
    letter-spacing: 1.88px;
    margin: 0 0 30px 0;
`;

export const h3Display = styled.h3`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.black};
    font: 28px/38px ${(props: IStyledTypography) => props.theme.fonts.secondary};
    text-transform: uppercase;
    letter-spacing: 1.12px;
    margin: 0 0 30px 0;
`;

export const h4Display = styled.h4`
    color: ${(props: IStyledTypography) => props.color || props.theme.colors.black};
    font: 18px/26px ${(props: IStyledTypography) => props.theme.fonts.secondary};
    text-transform: uppercase;
    letter-spacing: 0.72px;
    margin: 0 0 30px 0;
`;
