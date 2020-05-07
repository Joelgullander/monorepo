import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import withBaseBlock from '../BaseBlock';

import { TextLink, Underline } from '@hiab/buttons';
import { Typography, Types } from '@hiab/typography';
import { ProgressiveImage } from '@hiab/image';

import * as styles from './ImageTextBlock.style';
import { IBaseBlock } from '../types/BaseBlock';
import { IEpiserverProperty, EpiserverPropertyReferences } from '../types/Episerver';

interface IImageTextBlock extends IBaseBlock {
  image?: IEpiserverProperty<EpiserverPropertyReferences.PropertyContentReference>,
  title?: string,
  description?: string,
  linkLabel?: string, // TODO this is not added to episerver yet
}

const ImageTextBlock: React.FC<IImageTextBlock> = ({ image, title, description, linkLabel }) => (
  <styles.Wrapper>
    <Container>
      <Row>
        <styles.InnerWrapper>
          {image &&
            <Col lg={(title || description || linkLabel) ? 6 : 12}>
              <ProgressiveImage
                originalSource={image.value}
                thumbnail={image.value}
              />
            </Col>}

          {(title || description || linkLabel) &&
            <Col lg={image ? 4 : 8} lgOffset={image ? 1 : 2}>
              <styles.Content>
                {title &&
                  <Typography type={Types.H2}>{title}</Typography>}

                {description &&
                  <Typography type={Types.BODY}>{description}</Typography>}
              </styles.Content>

              {linkLabel &&
                <TextLink
                  link={{
                    url: "https://hiab.com",
                    internal: false
                  }}
                  underline={Underline.HALF_SOLID}
                >
                  {linkLabel}
                </TextLink>}
            </Col>}
        </styles.InnerWrapper>
      </Row>
    </Container>
  </styles.Wrapper>
);

export default withBaseBlock(ImageTextBlock);