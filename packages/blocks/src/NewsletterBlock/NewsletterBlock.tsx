import React from 'react';

import withBaseBlock from '../BaseBlock';

import { Button, Size } from '@hiab/buttons';
import { Typography, Types } from '@hiab/typography';
import { Input } from '@hiab/inputs';

import * as styles from './NewsletterBlock.style';

interface INewsletterBlock {
  handleSubmit: any,
  title: string,
  subtitle?: string,
  buttonLabel: string,
  smallInfo: string,
  handleChange: Function,
  error: boolean,
  errorMessage: string,
}

export const NewsletterBlock: React.FC<INewsletterBlock> = ({
  title,
  subtitle,
  handleSubmit,
  buttonLabel,
  smallInfo,
  handleChange,
  error,
  errorMessage,
}) => {
  return (
    <styles.Wrapper>
      <styles.Content>
        <Typography type={Types.H2_DISPLAY}>
          {title}
        </Typography>

        {subtitle &&
          <Typography type={Types.H3}>{subtitle}</Typography>}

        <styles.Form onSubmit={handleSubmit}>
          <Input
            name="email" placeholder="E-mail address"
            onChange={handleChange}
            error={error} errorMessage={errorMessage}
          />

          <Button size={Size.MEDIUM} onClick={handleSubmit}>
            {buttonLabel}
          </Button>
        </styles.Form>

        <styles.Small>{smallInfo}</styles.Small>
      </styles.Content>
    </styles.Wrapper>
  );
};

export default withBaseBlock(NewsletterBlock);