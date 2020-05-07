import React from 'react';
import * as styled from './Typography.style';

export enum Types {
  TAGLINE = 'Tagline',
  H1 = 'h1',
  META = 'Meta',
  INGRESS = 'Ingress',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  BODY = 'Body',
  EMFAS_ITALIC = 'EmfasItalic',
  LINE = 'Line',
  LIST = 'List',
  LIST_ITEM = 'ListItem',
  BLOCKQUOTE = 'Blockquote',
  CALLOUT = 'Callout',
  H1_DISPLAY = 'h1Display',
  H2_DISPLAY = 'h2Display',
  H2_DISPLAY_LIGHT = 'h2DisplayLight',
  H3_DISPLAY = 'h3Display',
  H4_DISPLAY = 'h4Display',
};

export type ListType = 'bullet' | 'ordered';

export interface ITypography {
  color?: string,
  styles?: React.CSSProperties,
  listType?: ListType,
  type: Types,
};

export const Typography: React.FC<ITypography> = (props) => {
  switch (props.type) {
    case Types.TAGLINE:
      return (
        <styled.Tagline color={props.color} style={props.styles}>
          {props.children}
        </styled.Tagline>
      );
    case Types.H1:
      return (
        <styled.h1 color={props.color} style={props.styles}>
          {props.children}
        </styled.h1>
      );
    case Types.H2:
      return (
        <styled.h2 color={props.color} style={props.styles}>
          {props.children}
        </styled.h2>
      );
    case Types.H3:
      return (
        <styled.h3 color={props.color} style={props.styles}>
          {props.children}
        </styled.h3>
      );
    case Types.H4:
      return (
        <styled.h4 color={props.color} style={props.styles}>
          {props.children}
        </styled.h4>
      );
    case Types.H5:
      return (
        <styled.h5 color={props.color} style={props.styles}>
          {props.children}
        </styled.h5>
      );
    case Types.META:
      return (
        <styled.Meta color={props.color} style={props.styles}>
          {props.children}
        </styled.Meta>
      );
    case Types.INGRESS:
      return (
        <styled.Ingress color={props.color} style={props.styles}>
          {props.children}
        </styled.Ingress>
      );
    case Types.BODY:
      return (
        <styled.Body color={props.color} style={props.styles}>
          {props.children}
        </styled.Body>
      );
    case Types.EMFAS_ITALIC:
      return (
        <styled.EmfasItalic color={props.color} style={props.styles}>
          {props.children}
        </styled.EmfasItalic>
      );
    case Types.LINE:
      return (
        <styled.Line color={props.color} style={props.styles} />
      );
    case Types.BLOCKQUOTE:
      return (
        <styled.Blockquote color={props.color} style={props.styles} >
          {props.children}
        </styled.Blockquote>
      );
    case Types.LIST:
      return (
        <styled.List
          listType={props.listType}
          style={props.styles}
          color={props.color}
        >
          {props.children}
        </styled.List>
      );
    case Types.LIST_ITEM:
      return (
        <styled.ListItem style={props.styles}>
          {props.children}
        </styled.ListItem>
      );
    case Types.CALLOUT:
      return (
        <styled.Callout color={props.color} style={props.styles}>
          {props.children}
        </styled.Callout>
      );
    case Types.H1_DISPLAY:
      return (
        <styled.h1Display color={props.color} style={props.styles}>
          {props.children}
        </styled.h1Display>
      );
    case Types.H2_DISPLAY:
      return (
        <styled.h2Display color={props.color} style={props.styles}>
          {props.children}
        </styled.h2Display>
      );
    case Types.H2_DISPLAY_LIGHT:
      return (
        <styled.h2DisplayLight color={props.color} style={props.styles}>
          {props.children}
        </styled.h2DisplayLight>
      );
    case Types.H3_DISPLAY:
      return (
        <styled.h3Display color={props.color} style={props.styles}>
          {props.children}
        </styled.h3Display>
      );
    case Types.H4_DISPLAY:
      return (
        <styled.h4Display color={props.color} style={props.styles}>
          {props.children}
        </styled.h4Display>
      );
    default:
      return null;
  }
};

Typography.defaultProps = {
  type: Types.TAGLINE,
  listType: 'bullet',
};
