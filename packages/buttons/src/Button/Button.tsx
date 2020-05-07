import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './Button.style';
import { IIcon } from '@hiab/icons';
import { ILinkProperties } from './ILinkProperties';

export enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
};

export enum Variants {
  DEFAULT = "default",
  ROUNDED = "rounded",
  ICON_ROUNDED = "icon-rounded",
}

export enum Size {
  BIG = "big",
  MEDIUM = "medium",
  SMALL = "small",
}

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  variant?: Variants,
  size?: Size,
  inverted?: boolean,
  active?: boolean,
  icon?: IIcon,
  iconPosition?: IconPosition,
}

export const Button: React.FC<IButton> = ({
  variant,
  onClick,
  inverted,
  size,
  disabled,
  children,
  icon,
  iconPosition,
  active,
}) => {

  return (
    <style.Button
      as="button"
      onClick={onClick}
      size={size}
      inverted={inverted}
      disabled={disabled}
      variant={variant}
      active={active}
      iconPosition={iconPosition}
    >
      {iconPosition === 'left' && (icon && icon)}
      {children}
      {iconPosition === 'right' && (icon && icon)}
    </style.Button>
  );
}

Button.defaultProps = {
  variant: Variants.DEFAULT,
  iconPosition: IconPosition.LEFT,
};

interface ILinkButton extends IButton {
  link: ILinkProperties
}

export const LinkButton: React.FC<ILinkButton> = ({ link, variant, inverted, size, disabled, children, icon }) => {
  if (link.internal) {
    return (
      <style.Button
        as={Link}
        to='/'
        inverted={inverted}
        size={size}
        disabled={disabled}
        variant={variant}
      >
        {icon && icon}
        {children}
      </style.Button>
    );
  } else {
    return (
      <style.Button
        as='a'
        href={link.url}
        inverted={inverted}
        size={size}
        disabled={disabled}
        variant={variant}
      >
        {icon && icon}
        {children}
      </style.Button>
    )
  }
}

LinkButton.defaultProps = {
  variant: Variants.DEFAULT,
  iconPosition: IconPosition.LEFT,
};
