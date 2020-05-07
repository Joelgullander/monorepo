import React from 'react';
import { ISvg, Svg } from './Svg';

const CircleClose: React.FC<ISvg> = (props) => (
    <Svg viewBox="0 0 24 24" {...props}>
        <path xmlns="http://www.w3.org/2000/svg"
            id="circle-x-2"
            data-name="circle-x"
            d="M13,25A12,12,0,1,1,25,13,12,12,0,0,1,13,25Zm0-2.182A9.818,9.818,0,1,0,3.182,13,9.818,9.818,0,0,0,13,22.818Zm0-8.275L9.408,18.135,7.865,16.592,11.457,13,7.865,9.408,9.408,7.865,13,11.457l3.592-3.592,1.543,1.543L14.543,13l3.592,3.592-1.543,1.543Z"
            transform="translate(-1 -1)"
            fillRule="evenodd"
        />
    </Svg>
);

export default CircleClose;
