import * as React from 'react';

import { shallow, mount } from 'enzyme';
import { Input } from './Input';
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


describe('<Input />', () => {
  test('renders without exploding', () => {
    const wrapper = shallowWithTheme(<Input name="phone"/>)
    expect(wrapper.exists()).toBe(true);
  });

  test('snapshot', () => {
    const wrapper = shallowWithTheme(<Input name="phone" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('prop name is passing', () => {
    const wrapper = mountWithTheme(<Input name="phone" />);
    
    expect(wrapper.props().name).toEqual("phone");
  });

  test('label is rendering', () => {
    const wrapper = mountWithTheme(
        <Input placeholder="Placeholder..." name="test" label="Label" required />
    );

    expect(wrapper.props().label).toEqual('Label');
  });
});
