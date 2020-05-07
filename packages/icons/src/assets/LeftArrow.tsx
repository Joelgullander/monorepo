import React from 'react';
import { ISvg, Svg, FillType } from './Svg';

const LeftArrow: React.FC<ISvg> = (props) => (
    <Svg
        fillType={FillType.STROKE}
        viewBox="0 0 13.431 22.146"
        {...props}
    >
        <path
            id="Path_287"
            data-name="Path 287"
            d="M2890,4898l10.236,10L2890,4918"
            transform="translate(2902.383 4919.072) rotate(180)"
            fill="none"
            strokeWidth="3"
        />
    </Svg>
);

export default LeftArrow;
