import React from 'react';
import { ISvg, Svg } from './Svg';

const OpenFolderIcon: React.FC<ISvg> = (props) => (
    <Svg viewBox="0 0 22 18" {...props}>
          <path
            id="folder-opened-2"
            data-name="folder-opened"
            d="M21,8a2,2,0,0,1,2,2l-.024.217L21,19.128A2,2,0,0,1,19,21H3a2,2,0,0,1-2-2V5A2,2,0,0,1,3,3H9a3.021,3.021,0,0,1,2.549,1.379c.048.06.261.337.314.4.157.195.189.219.139.219h7a2,2,0,0,1,2,2ZM19,8V7H11.995a2.072,2.072,0,0,1-1.689-.963c-.069-.086-.29-.372-.324-.415C9.607,5.149,9.384,5,9,5H3V9.891l.029-.131C3.31,8.621,3.833,8,5,8ZM3.024,19H19l.024-.217L20.976,10H5.036c-.016.05-.036.121-.06.217Z"
            transform="translate(-1 -3)"
            fillRule="evenodd"
          />
    </Svg>
);

export default OpenFolderIcon;
