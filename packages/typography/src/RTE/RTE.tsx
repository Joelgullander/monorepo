import React from 'react';
import { Typography, Types } from '../Typography';
import parse, { domToReact, DomElement } from 'html-react-parser';

const options = {
    replace: ({ attribs, children = [], type, name }: DomElement) => {
        if (!attribs) return;
        // eslint-disable-next-line no-console
        console.log("type", type);
        // eslint-disable-next-line no-console
        console.log("name", name);

        if (name === 'p') {
            return <Typography type={Types.BODY}>{domToReact(children, options)}</Typography>;
        }
        if (name === 'h1') {
            return <Typography type={Types.H1}>{domToReact(children, options)}</Typography>;
        }
        if (name === 'h2') {
            return <Typography type={Types.H2}>{domToReact(children, options)}</Typography>;
        }
        if (name === 'h3') {
            return <Typography type={Types.H3}>{domToReact(children, options)}</Typography>;
        }
        if (name === 'h4') {
            return <Typography type={Types.H4}>{domToReact(children, options)}</Typography>;
        }
        if (name === 'h5') {
            return <Typography type={Types.H5}>{domToReact(children, options)}</Typography>;
        }
        if (name === 'ul') {
            return <Typography type={Types.LIST}>{domToReact(children, options)}</Typography>;
        }
        if (name === 'li') {
            return <Typography type={Types.LIST_ITEM}>{domToReact(children, options)}</Typography>;
        }

        // Possibilities to distinquish elementIds and more can be done with ease. 
        // Ref: https://github.com/remarkablemark/html-react-parser
        // if(attribs.id === 'whatever') {}
        
        return
    }
};

export interface IRTE {
    html: string;
}

export const RTE : React.FC<IRTE> = ({ html }) => {
    return (
        <div>
            {parse(html, options)}
        </div>
    )
};