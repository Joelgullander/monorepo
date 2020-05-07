import React from 'react';
import BaseBlock from './BaseBlock';
import { IBaseBlock } from '../types/BaseBlock';

const withBaseBlock = (TargetComponent: any) => {
    const BaseBlockContainer: React.FC<IBaseBlock> = ({
        customContentType,
        ...rest
    }) => (
            <BaseBlock customContentType={customContentType}>
                <TargetComponent customContentType={customContentType} {...rest} />
            </BaseBlock>
        );

    return BaseBlockContainer;
};

export default withBaseBlock;
