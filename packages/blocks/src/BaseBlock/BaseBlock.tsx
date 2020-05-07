import React from 'react';
import { IBaseBlock } from '../types/BaseBlock';

const BaseBlock: React.FC<IBaseBlock> = ({ children, customContentType }) => {
    return (
        <div id={customContentType}>
            {children}
        </div>
    );
};

export default BaseBlock;
