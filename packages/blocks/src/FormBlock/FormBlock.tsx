import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import withBaseBlock from '../BaseBlock';

import { Button, Size } from '@hiab/buttons';
import { Typography, Types } from '@hiab/typography';
import { Input, Checkbox } from '@hiab/inputs';

import * as styles from './FormBlock.style';

interface IFormBlock {
  handleSubmit: any,
  title: string,
  mainBody?: string,
  checkboxLabel: string,
  buttonLabel: string,
  handleChange: Function,
  checked: boolean,
  error: boolean,
  errorMessage: string,
}

export const FormBlock: React.FC<IFormBlock> = ({
  title,
  mainBody,
  handleSubmit,
  checkboxLabel,
  buttonLabel,
  handleChange,
  checked,
  error,
  errorMessage,
}) => {
  return (
    <styles.Wrapper>
      <styles.Content>
        <Container fluid>
          <Row>
            <Col xl={12}>
              <Typography type={Types.H3}>{title}</Typography>

              {mainBody &&
                <Typography type={Types.BODY}>{mainBody}</Typography>}
            </Col>
          </Row>

          <styles.Form onSubmit={handleSubmit}>
            <styles.Fieldset>
              <styles.FieldRow>
                <Row>
                  <Col sm={6}>
                    <Input
                      name="firstname" label="First name"
                      required={true} onChange={handleChange}
                      error={error} errorMessage={errorMessage}
                    />
                  </Col>

                  <Col sm={6}>
                    <Input
                      name="lastname" label="Last name"
                      required={true} onChange={handleChange}
                      error={error} errorMessage={errorMessage}
                    />
                  </Col>
                </Row>
              </styles.FieldRow>

              <styles.FieldRow>
                <Row>
                  <Col sm={6}>
                    <Input
                      name="company" label="Company"
                      onChange={handleChange}
                      error={error} errorMessage={errorMessage}
                    />
                  </Col>

                  <Col sm={6}>
                    <Input
                      name="country" label="Country"
                      required={true} onChange={handleChange}
                      error={error} errorMessage={errorMessage}
                    />
                  </Col>
                </Row>
              </styles.FieldRow>

              <styles.FieldRow>
                <Row>
                  <Col sm={6}>
                    <Input
                      name="phone" label="Phone"
                      required={true} onChange={handleChange}
                      error={error} errorMessage={errorMessage}
                    />
                  </Col>

                  <Col sm={6}>
                    <Input
                      name="email" label="Email"
                      required={true} onChange={handleChange}
                      error={error} errorMessage={errorMessage}
                    />
                  </Col>
                </Row>
              </styles.FieldRow>
            </styles.Fieldset>

            <Row>
              <Col xl={12}>
                <styles.Checkbox>
                  <Checkbox name="policy" label={checkboxLabel} checked={checked} />
                </styles.Checkbox>

                <Button size={Size.MEDIUM} onClick={handleSubmit}>
                  {buttonLabel}
                </Button>
              </Col>
            </Row>
          </styles.Form>
        </Container>
      </styles.Content>
    </styles.Wrapper>
  );
};

export default withBaseBlock(FormBlock);