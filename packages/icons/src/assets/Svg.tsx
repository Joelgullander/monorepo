import styled from 'styled-components';

export enum FillType {
    STROKE = 'stroke',
    FILL = 'fill',
}
export interface ISvg {
    color?: string;
    width?: string;
    height?: string;
    stroke?: string;
    fillType?: FillType;
};

export const Svg = styled.svg`
    width: ${(props: ISvg) => props.width};
    height: ${(props: ISvg) => props.height};
    ${(props: ISvg) => {
        if (props.fillType === FillType.FILL)
            return `fill: ${props.color};`
        return `stroke: ${props.color};`
    }}
`;

Svg.defaultProps = {
    fillType: FillType.FILL,
    color: '#000',
};
