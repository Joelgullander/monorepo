import React from 'react';
import { ISvg, Svg } from './Svg';

const AlertCircle: React.FC<ISvg> = (props) => (
    <Svg {...props} viewBox="0 0 24 24">
        <path
            id="alert-circle-2"
            data-name="alert-circle"
            d="M13,25A12,12,0,1,1,25,13,12,12,0,0,1,13,25Zm0-2.182A9.818,9.818,0,1,0,3.182,13,9.818,9.818,0,0,0,13,22.818Zm0-3.275a1.091,1.091,0,1,1,1.091-1.091A1.091,1.091,0,0,1,13,19.544ZM11.912,6.453h2.182V15.18H11.912Z"
            transform="translate(-1 -1)"
            fillRule="evenodd"
        />
    </Svg>
);

export default AlertCircle;
