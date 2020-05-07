import React from 'react';
import { ISvg, Svg } from './Svg';

const CircleQuestion: React.FC<ISvg> = (props) => (
    <Svg viewBox="0 0 24 24" {...props}>
         <path
            id="question-circle-2"
            data-name="question-circle"
            d="M13,25A12,12,0,1,1,25,13,12,12,0,0,1,13,25Zm0-2.182A9.818,9.818,0,1,0,3.182,13,9.818,9.818,0,0,0,13,22.818Zm0-4.365a1.091,1.091,0,1,1,1.091-1.091A1.091,1.091,0,0,1,13,18.453Zm1.091-3.271H11.909a3.309,3.309,0,0,1,2.239-3.43c.9-.448,1.033-.608,1.033-1.479,0-1.029-.789-1.636-2.182-1.636a2.182,2.182,0,0,0-2.182,2.182H8.636A4.364,4.364,0,0,1,13,6.455c2.492,0,4.364,1.441,4.364,3.818a3.309,3.309,0,0,1-2.239,3.43C14.228,14.151,14.091,14.311,14.091,15.182Z"
            transform="translate(-1 -1)"
            fillRule="evenodd"
        />
    </Svg>
);

export default CircleQuestion;
