import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import withBaseBlock from '../BaseBlock';
import { IAlign } from '../types/BaseBlock';

import { LinkButton, Size } from '@hiab/buttons';
import { Typography, Types } from '@hiab/typography';
import { ProgressiveImage } from '@hiab/image';

import * as styles from './FullwidthBlock.style';

interface IFullwidthBlock {
  align: string,
  opacity: string,
  image?: string,
  headline?: string,
  mainBody?: string,
  buttonLabel?: string,
  link?: any, // TODO: export interface from buttons package
}

const FullwidthBlock: React.FC<IFullwidthBlock> = ({
  align,
  opacity,
  image,
  headline,
  mainBody,
  buttonLabel,
  link,
}) => {
  return (
    <styles.Wrapper>
      {image &&
        <>
          <styles.Overlay opacity={opacity} />
          <ProgressiveImage
            originalSource={image}
            thumbnail={image}
          />
        </>}

      {(headline || mainBody || buttonLabel) &&
        <styles.Content align={align}>
          <Container>
            <Row>
              <Col xl={7} xlOffset={align === IAlign.RIGHT ? 5 : 0}>
                {headline &&
                  <Typography type={Types.H1} color="white">{headline}</Typography>}

                {mainBody &&
                  <Typography type={Types.INGRESS} color="white">{mainBody}</Typography>}

                {(link && buttonLabel) &&
                  <LinkButton size={Size.MEDIUM} link={link && link}>
                    {buttonLabel && buttonLabel}
                  </LinkButton>}
              </Col>
            </Row>
          </Container>
        </styles.Content>}
    </styles.Wrapper>
  );
};

export default withBaseBlock(FullwidthBlock);