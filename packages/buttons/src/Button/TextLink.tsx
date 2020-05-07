import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './TextLink.style';
import { IIcon } from '@hiab/icons';
import { ILinkProperties } from './ILinkProperties';

// export type Underline = 'solid' | 'dotted' | 'none' | 'half-solid';

export enum Underline {
  SOLID = 'solid',
  DOTTED = 'dotted',
  NONE = 'none',
  HALF_SOLID = 'half-solid',
}

interface ILinkText {
  link: ILinkProperties,
  icon?: IIcon,
  underline: Underline,
};

export const TextLink: React.FC<ILinkText> = ({
  link,
  children,
  icon,
  underline
}) => {
  if (link.internal) {
    return (
      <style.TextLink
        as={Link}
        to='/'
        underline={underline}
      >
        {icon && icon}
        {children}
      </style.TextLink>
    );
  } else {
    return (
      <style.TextLink
        as='a'
        href={link.url}
        underline={underline}
      >
        {icon && icon}
        {children}
      </style.TextLink>
    )
  }
}

TextLink.defaultProps = {
  underline: Underline.NONE,
};
