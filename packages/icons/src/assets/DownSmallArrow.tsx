import React from 'react';
import { ISvg, Svg, FillType } from './Svg';

const DownArrow: React.FC<ISvg> = (props) => (
    <Svg 
        viewBox="0 0 8.914 5.871"
        fillType={FillType.STROKE}
        {...props}
    >
    <path
        id="Path_291"
        data-name="Path 291"
        d="M2890,4898l3.75,3.75-3.75,3.75"
        transform="translate(4906.207 -2889.293) rotate(90)"
        fill="none"
        strokeWidth="2"
    />
    </Svg>
);

export default DownArrow;
