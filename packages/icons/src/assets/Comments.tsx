import React from 'react';
import { ISvg, Svg } from './Svg';

const Comments: React.FC<ISvg> = (props) => (
    <Svg viewBox="0 0 28 25.094" {...props}>
        <path d="M2,5V21H6v5.094l1.625-1.312L12.344,21H22V5ZM4,7H20V19H11.656l-.281.219L8,21.906V19H4ZM24,9v2h4V23H24v2.906L20.344,23h-7.5l-2.5,2h9.313L26,30.094V25h4V9Z" transform="translate(-2 -5)"/>
    </Svg>
);

export default Comments;
