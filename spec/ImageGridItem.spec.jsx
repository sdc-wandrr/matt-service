import React from 'react';
import { mount } from 'enzyme';
import images from './mockData';

import { ImageGridItem, StyledImageGridItem, StyledImage } from '../client/components/ImageGridItem';

describe('<ImageGridItem />', () => {
  test('Renders a styled image in a styled image grid item', () => {
    const wrapper = mount(<ImageGridItem image={images[2]} onModal={() => {}} />);
    expect(wrapper.find(StyledImageGridItem)).toHaveLength(1);
    expect(wrapper.find(StyledImageGridItem).children().find(StyledImage)).toHaveLength(1);
  });
});