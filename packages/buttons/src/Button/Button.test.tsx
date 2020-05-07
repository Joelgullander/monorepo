import * as React from 'react';

import { shallow, mount } from 'enzyme';
import { Button } from './Button';
import { ThemeProvider } from '@hiab/theme';

const ThemeProviderWrapper : React.FC = ({ children }) => (
  <ThemeProvider>
    { children }
  </ThemeProvider>
);

export const shallowWithTheme = (tree: React.ReactElement) => shallow(tree, {
  wrappingComponent: ThemeProviderWrapper
});

export const mountWithTheme = (tree: React.ReactElement) => mount(tree, {
  wrappingComponent: ThemeProviderWrapper
});


describe('<Button />', () => {
  test('renders without exploding', () => {
    const wrapper = shallowWithTheme(<Button />)
    expect(wrapper.exists()).toBe(true);
  });

  test('displays text based on props.children', () => {
    const btn = shallow(<Button>Click me</Button>);

    expect(btn.text()).toBe('Click me');

    btn.setProps({ children: 'View Product' });

    expect(btn.text()).toBe('View Product')
  });

  test('click handler', () => {
    const clickCompletionSpy = jest.fn();

    const btn = shallow(
      <Button onClick={clickCompletionSpy}>Click me</Button>
    );

    btn.simulate('click');

    expect(clickCompletionSpy).toHaveBeenCalled();
  });

  test('snapshot', () => {
    const wrapper = shallowWithTheme(<Button>Click me</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});