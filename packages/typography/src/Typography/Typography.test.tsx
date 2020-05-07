import * as React from 'react';

import { shallow, mount } from 'enzyme';
import { Typography, Types } from './Typography';
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


describe('<Typography />', () => {
  test('renders without exploding', () => {
    const wrapper = shallowWithTheme(<Typography type={Types.H1} />)
    expect(wrapper.exists()).toBe(true);
  });

  test('displays text based on props.children', () => {
    const tpgr = shallow(<Typography type={Types.H1}>Header H1</Typography>);

    expect(tpgr.text()).toBe('Header H1');

    tpgr.setProps({ children: 'Header H1 UPD' });

    expect(tpgr.text()).toBe('Header H1 UPD')
  });

  test('snapshot', () => {
    const wrapper = shallowWithTheme(<Typography type={Types.H1}>Typography</Typography>);

    expect(wrapper).toMatchSnapshot();
  });

  test('prop type is passing', () => {
    const wrapper = mountWithTheme(
        <Typography type={Types.H1}>Typography</Typography>
    );
    
    expect(wrapper.props().type).toEqual(Types.H1);
  });

  test('prop color is passing', () => {
    const wrapper = mountWithTheme(
        <Typography color="#fff" type={Types.H1}>Typography</Typography>
    );
    
    expect(wrapper.props().color).toEqual("#fff");
  });
});
