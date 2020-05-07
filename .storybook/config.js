import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import themeDecorator from './themeDecorator';
import { default as StoryTheme } from './theme';

addParameters({
  options: {
    StoryTheme,
    showPanel: true,
    panelPosition: 'bottom',
    storySort: (a, b) => {
      if (a[0].includes('docs-')) {
        if (a[0].includes('intro-')) {
          return -1;
        }

        return 0;
      }
      return 1;
    }
  }
});

addDecorator(themeDecorator);

// Custom center decorator that supports docs extensions
addDecorator((...args) => {
  const params = (new URL(document.location)).searchParams;
  const isInDockView = params.get('viewMode') === 'docs';
  if (isInDockView) {
    return args[0]();
  }
  return centered(...args);
});


const loadStories = () => {
  return [
    // Ensure we load Welcome First
    require.context('../docs', true, /story\.mdx$/),
    require.context('../packages', true, /story\.mdx$/),
  ];
};

configure(loadStories(), module);

addDecorator(withKnobs);


// const newViewports = [
//     {
//         /**
//          * name to display in the dropdown
//          * @type {String}
//          */
//         name: 'Responsive',

//         /**
//          * Inline styles to be applied to the story (iframe).
//          * styles is an object whose key is the camelCased version of the style name, and whose
//          * value is the style’s value, usually a string
//          * @type {Object}
//          */
//         styles: {
//           width: '100%',
//           height: '100%',
//         },

//         /**
//          * type of the device (e.g. desktop, mobile, or tablet)
//          * @type {String}
//          */
//         type: 'desktop',
//       }
// ]

// addParameters({
//   viewport: {
//     viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
//     defaultViewport: 'someDefault',
//   },
// });
