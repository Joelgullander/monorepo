import React from 'react';
import { ISvg, Svg } from './Svg';

const FolderIcon: React.FC<ISvg> = (props) => (
    <Svg viewBox="0 0 22 18" {...props}>
       <path
            id="folder-2"
            data-name="folder"
            d="M3,11v8H21V11ZM3,9H21V7H11.995a2.072,2.072,0,0,1-1.689-.963c-.069-.086-.29-.372-.324-.415C9.607,5.149,9.384,5,9,5H3ZM21,5a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H3a2,2,0,0,1-2-2V5A2,2,0,0,1,3,3H9a3.021,3.021,0,0,1,2.549,1.379c.048.06.261.337.314.4.157.195.189.219.139.219Z"
            transform="translate(-1 -3)"
            fillRule="evenodd"
        />
    </Svg>
);

export default FolderIcon;
