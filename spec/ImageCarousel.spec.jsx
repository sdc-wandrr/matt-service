import React from 'react';
import { mount } from 'enzyme';
import images from './mockData.jsx';

import { ImageCarousel, StyledLeftSidebar, StyledRightSidebar } from '../client/components/ImageCarousel';
import { StyledThumbnailCarousel, StyledImage } from '../client/components/ThumbnailCarousel';

describe('<ImageCarousel />', () => {
  test('handleRightClick function', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} />);
    wrapper.find(StyledRightSidebar).simulate('click');
    expect(wrapper.state().currentIndex).toBe(1);
  });

  test('handleLeftClick function', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} />);
    wrapper.find(StyledRightSidebar).simulate('click');
    expect(wrapper.state().currentIndex).toBe(1);
    wrapper.find(StyledLeftSidebar).simulate('click');
    expect(wrapper.state().currentIndex).toBe(0);
  });

  test('handleThumbnailClick function', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} />);
    wrapper.find(StyledImage).at(2).simulate('click');
    expect(wrapper.state().currentIndex).toBe(2);
  });
});
