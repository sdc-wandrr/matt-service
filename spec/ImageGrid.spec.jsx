import React from 'react';
import { mount } from 'enzyme';
import images from './mockData';

import { ImageGrid, StyledImageGrid } from '../client/components/ImageGrid';
import { ImageGridItem } from '../client/components/ImageGridItem';

describe('<ImageGrid />', () => {
  test('renders the correct amount of ImageGridItems', () => {
    const wrapper = mount(<ImageGrid images={images} onModal={() => {}} />);
    const childrenWrapper = wrapper.find(StyledImageGrid).children();
    expect(childrenWrapper.find(ImageGridItem)).toHaveLength(6);
  });
});
