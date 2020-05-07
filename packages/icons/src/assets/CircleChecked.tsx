import React from 'react';
import { ISvg, Svg } from './Svg';

const CircleChecked: React.FC<ISvg> = (props) => (
    <Svg viewBox="0 0 24 24" {...props}>
        <path
            id="circle-checked-2"
            data-name="circle-checked"
            d="M13,25A12,12,0,1,1,25,13,12,12,0,0,1,13,25Zm0-2.182A9.818,9.818,0,1,0,3.182,13,9.818,9.818,0,0,0,13,22.818ZM10.818,14.73l5.774-5.774L18.135,10.5l-7.317,7.317L6.774,13.771l1.543-1.543Z"
            transform="translate(-1 -1)"    
            fillRule="evenodd"
        />
    </Svg>
);

export default CircleChecked;
