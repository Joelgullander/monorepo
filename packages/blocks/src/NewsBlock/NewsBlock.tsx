import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import withBaseBlock from '../BaseBlock';

import { Typography, Types } from '@hiab/typography';
import { ProgressiveImage } from '@hiab/image';
import { TextLink, Underline } from '@hiab/buttons';

import * as styles from './NewsBlock.style';

interface INewsBlockItem {
    image: string,
    title: string,
    mainBody: string,
    category: string,
    publishDate: string,
}

interface INewsBlock {
    title?: string,
    news: INewsBlockItem[],
    linkLabel?: string,
}

const NewsBlock: React.FC<INewsBlock> = ({ news, title, linkLabel }) => {
    return (
        <Container>
            {title &&
                <Row>
                    <Col xl={12}>
                        <Typography type={Types.H4}>{title}</Typography>
                    </Col>
                </Row>}

            {news &&
                <Row>
                    {news.map((item: INewsBlockItem, i: number) => {
                        const { image, title, mainBody, category, publishDate } = item;

                        // TODO: Convert ISO date to human language

                        return (
                            <Col xl={3} sm={6} key={i}>
                                <styles.Item>
                                    <ProgressiveImage
                                        originalSource={image}
                                        thumbnail={image}
                                    />

                                    <Typography type={Types.H5}>{title}</Typography>
                                    <Typography type={Types.BODY}>{mainBody}</Typography>

                                    <styles.Meta>
                                        {category} | {publishDate}
                                    </styles.Meta>
                                </styles.Item>
                            </Col>
                        )
                    })}
                </Row>}

            {linkLabel &&
                <Row>
                    <Col xl={12}>
                        <styles.Link>
                            <TextLink
                                link={{
                                    url: "https://hiab.com",
                                    internal: false
                                }}
                                underline={Underline.HALF_SOLID}
                            >
                                {linkLabel}
                            </TextLink>
                        </styles.Link>
                    </Col>
                </Row>}
        </Container>
    );
};

export default withBaseBlock(NewsBlock);