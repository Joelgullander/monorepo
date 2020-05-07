/* eslint-disable no-console */
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { RTE } from './RTE';
import * as styled from '../Typography/Typography.style';
import { ThemeProvider } from '@hiab/theme';

const ThemeProviderWrapper : React.FC = ({ children }) => (
  <ThemeProvider>
    { children }
  </ThemeProvider>
)

export const shallowWithTheme = (tree: React.ReactElement) => shallow(tree, {
  wrappingComponent: ThemeProviderWrapper
})

export const mountWithTheme = (tree: React.ReactElement) => mount(tree, {
  wrappingComponent: ThemeProviderWrapper
})

describe('<RTE />', () => {
  test('renders without exploding', () => {
    const wrapper = shallowWithTheme(<RTE html={'test'} />)
    expect(wrapper.exists()).toBe(true);
  });

  test('Paragraph test', () => {
    const wrapper = mountWithTheme(<RTE html={'<p>Test</p>'} />)
    expect(wrapper.find(styled.Body).length).toEqual(1);
  });

  test('H1 test', () => {
    const wrapper = mountWithTheme(<RTE html={'<h1>Test</h1>'} />)
    expect(wrapper.find(styled.h1).length).toEqual(1);
  });

  test('H2 test', () => {
    const wrapper = mountWithTheme(<RTE html={'<h2>Test</h2>'} />)
    expect(wrapper.find(styled.h2).length).toEqual(1);
  });

  test('H3 test', () => {
    const wrapper = mountWithTheme(<RTE html={'<h3>Test</h3>'} />)
    expect(wrapper.find(styled.h3).length).toEqual(1);
  });

  test('H4 test', () => {
    const wrapper = mountWithTheme(<RTE html={'<h4>Test</h4>'} />)
    expect(wrapper.find(styled.h4).length).toEqual(1);
  });

  test('H5 test', () => {
    const wrapper = mountWithTheme(<RTE html={'<h5>Test</h5>'} />)
    expect(wrapper.find(styled.h5).length).toEqual(1);
  });

  test('UL test', () => {
    const wrapper = mountWithTheme(<RTE html={'<ul></ul>'} />)
    expect(wrapper.find(styled.List).length).toEqual(1);
  });

  test('LI test', () => {
    const wrapper = mountWithTheme(<RTE html={'<li>Test</li>'} />)
    expect(wrapper.find(styled.ListItem).length).toEqual(1);
  });

  test('UL with LI test', () => {
    const wrapper = mountWithTheme(<RTE html={'<ul><li>Test</li><li>Test 2</li></ul>'} />)
    expect(wrapper.find(styled.List).length).toEqual(1);
    expect(wrapper.find(styled.ListItem).length).toEqual(2);
  });

  test('Randomize quantity test', () => {

    const mock = Array(8).fill(0, 0).map(() => Math.round(Math.random() * 10));
    const MockRTEString = mock.map((val, index) => {
      switch (index) {
        case 0:
          return Array(val).fill(0, 0).map(_ => '<p>Test</p>')
        case 1:
          return Array(val).fill(0, 0).map(_ => '<h1>Test</h1>')
        case 2:
          return Array(val).fill(0, 0).map(_ => '<h2>Test</h2>')
        case 3:
          return Array(val).fill(0, 0).map(_ => '<h3>Test</h3>')
        case 4:
          return Array(val).fill(0, 0).map(_ => '<h4>Test</h4>')
        case 5:
          return Array(val).fill(0, 0).map(_ => '<h5>Test</h5>')
        case 6:
          return Array(val).fill(0, 0).map(_ => '<ul></ul>')
        case 7:
          return Array(val).fill(0, 0).map(_ => '<li>Test</li>')
        default:
          return
      }
    }).filter(x => x);

    const wrapper = mountWithTheme(<RTE html={MockRTEString.join('')} />)
    expect(wrapper.find(styled.Body).length).toEqual(mock[0]);
    expect(wrapper.find(styled.h1).length).toEqual(mock[1]);
    expect(wrapper.find(styled.h2).length).toEqual(mock[2]);
    expect(wrapper.find(styled.h3).length).toEqual(mock[3]);
    expect(wrapper.find(styled.h4).length).toEqual(mock[4]);
    expect(wrapper.find(styled.h5).length).toEqual(mock[5]);
    expect(wrapper.find(styled.List).length).toEqual(mock[6]);
    expect(wrapper.find(styled.ListItem).length).toEqual(mock[7]);
    
  });

  // TODO
  // Create tests to check depth in nested payloads
  // Validate that nonvalid elements gets rendered
  // add more....

});