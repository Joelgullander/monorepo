import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import withBaseBlock from '../BaseBlock';

import { Typography, Types } from '@hiab/typography';
import { ProgressiveImage } from '@hiab/image';
import { TextLink, Underline } from '@hiab/buttons';

import * as styles from './ArticlesBlock.style';

interface IArticlesBlockItem {
    image: string,
    title: string,
    mainBody?: string,
    category?: string,
    publishDate?: string,
}

interface IArticlesBlock {
    articles: IArticlesBlockItem[],
    linkLabel?: string,
}

const ArticlesBlock: React.FC<IArticlesBlock> = ({ articles, linkLabel }) => {
    const featuredArticle = articles && articles[0];

    return (
        <Container>
            {articles &&
                <styles.FeaturedArticle>
                    <Row>
                        <Col xl={7}>
                            <styles.FeaturedImage>
                                <ProgressiveImage
                                    originalSource={featuredArticle.image}
                                    thumbnail={featuredArticle.image}
                                />
                            </styles.FeaturedImage>
                        </Col>

                        <Col xl={5}>
                            <styles.FeaturedContent>
                                <Typography type={Types.H5}>Testimonial</Typography>

                                <Typography type={Types.H2}>{featuredArticle.title}</Typography>
                                <Typography type={Types.BODY}>{featuredArticle.mainBody}</Typography>

                                <TextLink
                                    link={{
                                        url: "https://hiab.com",
                                        internal: false
                                    }}
                                    underline={Underline.HALF_SOLID}
                                >
                                    READ MORE
                            </TextLink>
                            </styles.FeaturedContent>
                        </Col>
                    </Row>
                </styles.FeaturedArticle>}

            {articles &&
                <Row>
                    {articles.slice(1, articles.length).map((item: IArticlesBlockItem, i: number) => {
                        const { image, title } = item;

                        // TODO: Convert ISO date to human language

                        return (
                            <Col xl={3} sm={6} key={i}>
                                <styles.Item>
                                    <ProgressiveImage
                                        originalSource={image}
                                        thumbnail={image}
                                    />

                                    <Typography type={Types.H5}>{title}</Typography>
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

export default withBaseBlock(ArticlesBlock);