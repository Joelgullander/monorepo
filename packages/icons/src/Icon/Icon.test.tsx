import * as React from 'react';

import { shallow } from 'enzyme';
import { Icon, Name } from './Icon';

describe('<Icon />', () => {
  test('snapshot', () => {
    const icon = shallow(<Icon name={Name.PLUS} />);
    
    expect(icon).toMatchSnapshot();
  });

  test('Icon prop name is passing', () => {
    const icon = shallow(<Icon name={Name.PLUS} />);
    
    expect(icon.props().name).toEqual(Name.PLUS);
  });

  test('Icon prop width is passing', () => {
    const icon = shallow(<Icon width="50" name={Name.PLUS} />);
    
    expect(icon.props().width).toEqual("50");
  });
});
