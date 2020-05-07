import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import withBaseBlock from '../BaseBlock';

import { Button, Size } from '@hiab/buttons';
import { ProgressiveImage } from '@hiab/image';
import { Typography, Types } from '@hiab/typography';

import * as styles from './PromotionBlock.style';

interface IPromotionBlock {
  title?: string,
  subtitle?: string,
  image?: string,
  buttonLabel?: string,
  opacity: string,
}

const PromotionBlock: React.FC<IPromotionBlock> = ({
  title,
  subtitle,
  image,
  buttonLabel,
  opacity,
}) => {
  return (
    <styles.Wrapper>
      {image &&
        <>
          <styles.Overlay opacity={opacity} />
          <ProgressiveImage
            thumbnail={image}
            originalSource={image}
          />
        </>}

      {(subtitle || title || buttonLabel) &&
        <styles.Content>
          <Container fluid>
            <Row>
              <Col xl={5}>
                {subtitle &&
                  <styles.Tagline>{subtitle}</styles.Tagline>}

                {title &&
                  <Typography type={Types.H2} color="white">{title}</Typography>}

                {buttonLabel &&
                  <Button size={Size.SMALL}>{buttonLabel}</Button>}
              </Col>
            </Row>
          </Container>
        </styles.Content>}
    </styles.Wrapper>
  );
};

export default withBaseBlock(PromotionBlock);