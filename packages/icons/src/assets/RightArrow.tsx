import React from 'react';
import { ISvg, Svg, FillType } from './Svg';

const RightArrow: React.FC<ISvg> = (props) => (
    <Svg
        fillType={FillType.STROKE}
        viewBox="0 0 13.431 22.146"
        {...props}
    >
        <path
            id="Path_288"
            data-name="Path 288"
            d="M2890,4898l10.236,10L2890,4918"
            transform="translate(-2888.952 -4896.926)"
            fill="none"
            strokeWidth="3"
        />
    </Svg>
);

export default RightArrow;
