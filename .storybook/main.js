// const req = require.context('../src', true, /\.story\.(ts|tsx|mdx)$/)

// configure(() => {
//   req.keys().forEach(filename => req(filename))
// }, module);


module.exports = {
    // other settings
    addons: ['@storybook/addon-docs', '@storybook/addon-viewport/register', '@storybook/addon-a11y/register', '@storybook/addon-knobs/register', '@storybook/addon-actions/register']
}