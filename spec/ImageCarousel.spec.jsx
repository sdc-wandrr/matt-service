import React from 'react';
import { mount } from 'enzyme';
import images from './mockData';

import { ImageCarousel, StyledImageCarousel, StyledLeftSidebar, StyledRightSidebar, StyledCurrentImage, StyledCornerGrid, StyledImageCount, StyledBackButton, StyledPricesButton } from '../client/components/ImageCarousel';
import { ThumbnailCarousel, StyledImage } from '../client/components/ThumbnailCarousel';
import { ImageGridItem } from '../client/components/ImageGridItem.jsx';

describe('<ImageCarousel />', () => {
  test('handleRightClick function', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} onRedirect={() => {}} index={0} />);
    wrapper.find(StyledRightSidebar).simulate('click');
    expect(wrapper.state().currentIndex).toBe(1);
  });

  test('handleRightClick function at last image', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} onRedirect={() => {}} index={0} />);
    wrapper.find(StyledRightSidebar).simulate('click');
    wrapper.find(StyledRightSidebar).simulate('click');
    wrapper.find(StyledRightSidebar).simulate('click');
    wrapper.find(StyledRightSidebar).simulate('click');
    wrapper.find(StyledRightSidebar).simulate('click');
    wrapper.find(StyledRightSidebar).simulate('click');
    wrapper.find(StyledRightSidebar).simulate('click');
    expect(wrapper.state().currentIndex).toBe(5);
  });

  test('handleLeftClick function', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} onRedirect={() => {}} index={0} />);
    wrapper.find(StyledRightSidebar).simulate('click');
    expect(wrapper.state().currentIndex).toBe(1);
    wrapper.find(StyledLeftSidebar).simulate('click');
    expect(wrapper.state().currentIndex).toBe(0);
  });

  test('handleLeftClick function at first image', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} onRedirect={() => {}} index={0} />);
    wrapper.find(StyledLeftSidebar).simulate('click');
    expect(wrapper.state().currentIndex).toBe(0);
  });

  test('handleThumbnailClick function', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} onRedirect={() => {}} index={0} />);
    wrapper.find(StyledImage).at(2).simulate('click');
    expect(wrapper.state().currentIndex).toBe(2);
  });

  test('Mounts all subcomponents', () => {
    const dummyFn = () => {};
    const wrapper = mount(<ImageCarousel images={images} onExit={dummyFn} onRedirect={() => {}} index={0} />);
    expect(wrapper.find(StyledImageCarousel)).toHaveLength(1);
    expect(wrapper.find(StyledLeftSidebar)).toHaveLength(1);
    expect(wrapper.find(StyledCurrentImage)).toHaveLength(1);
    expect(wrapper.find(StyledCornerGrid)).toHaveLength(1);
    expect(wrapper.find(StyledRightSidebar)).toHaveLength(1);
    expect(wrapper.find(StyledImageCount)).toHaveLength(1);
    expect(wrapper.find(ThumbnailCarousel)).toHaveLength(1);
    expect(wrapper.find(StyledBackButton)).toHaveLength(1);
    expect(wrapper.find(StyledPricesButton)).toHaveLength(1);
  });
});
