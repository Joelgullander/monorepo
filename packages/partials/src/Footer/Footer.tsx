import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import { TextLink, Underline } from '@hiab/buttons';

import * as styles from './Footer.style';

interface IFooterLinkProps {
  url: string,
  label: string,
}

interface IFooterProps {
  address?: string,
  email?: string,
  copyrightLabel?: string,
  externalLinks?: IFooterLinkProps[],
  internalLinks?: IFooterLinkProps[],
}

export const Footer: React.FC<IFooterProps> = ({ email, address, copyrightLabel, externalLinks, internalLinks }) => {
  const currentYear = new Date().getFullYear();

  return (
    <styles.Footer>
      <Container>
        <Row>
          <Col xl={12}>
            <styles.Row>
              <styles.FlexBetween>
                {(address || email) &&
                  <styles.Address>
                    {address && address}
                    <styles.Contact href={`mailto:${email && email}`}>Contact us</styles.Contact>
                  </styles.Address>}

                {externalLinks &&
                  <styles.Links>
                    {externalLinks.map((item: IFooterLinkProps, i: number) => (
                      <li key={i}>
                        <TextLink
                          link={{
                            url: item.url,
                            internal: false
                          }}
                          underline={Underline.NONE}
                        >
                          {item.label}
                        </TextLink>
                      </li>
                    ))}
                  </styles.Links>}

              </styles.FlexBetween>
            </styles.Row>

            <styles.Flex>
              {copyrightLabel &&
                <styles.Legal>
                  ©{currentYear} {copyrightLabel}
                </styles.Legal>}

              {internalLinks &&
                <styles.Divider>
                  <span>|</span>
                </styles.Divider>}

              {internalLinks &&
                <styles.SmallLinks>
                  {internalLinks.map((item: IFooterLinkProps, i: number) => (
                    <li key={i}>
                      <TextLink
                        link={{
                          url: item.url,
                          internal: false
                        }}
                        underline={Underline.SOLID}
                      >
                        {item.label}
                      </TextLink>
                    </li>
                  ))}
                </styles.SmallLinks>}
            </styles.Flex>
          </Col>
        </Row>
      </Container>
    </styles.Footer>
  );
};