import React from 'react';
import { mount } from 'enzyme';
import images from './mockData';

import { ImageCounter, StyledImageCounter, ImageIcon } from '../client/components/ImageCounter';

describe('<ImageCounter />', () => {
  test('Renders all subcomponents', () => {
    const wrapper = mount(<ImageCounter images={images} onModal={() => {}} />);
    expect(wrapper.find(StyledImageCounter)).toHaveLength(1);
    expect(wrapper.find(ImageIcon)).toHaveLength(1);
  });
});
