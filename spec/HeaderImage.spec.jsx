import React from 'react';
import { mount } from 'enzyme';
import images from './mockData.jsx';

import { HeaderImage, StyledHeaderImage } from '../client/components/HeaderImage.jsx';
import Logo from '../client/components/Logo.jsx';
import SettingsBar from '../client/components/SettingsBar.jsx';
import ImageCounter from '../client/components/ImageCounter.jsx';


describe('<HeaderImage />', () => {
  test('renders <StyledHeaderImage /> component', () => {
    const wrapper = mount(<HeaderImage images={images} />);
    expect(wrapper.props().images).toBeDefined();
    expect(wrapper.props().images.length).toBeGreaterThan(0);
    expect(wrapper.find(StyledHeaderImage)).toHaveLength(1);
  });
  test('renders <Logo /> component', () => {
    const wrapper = mount(<HeaderImage images={images} />);
    expect(wrapper.find(Logo)).toHaveLength(1);
  });
  test('renders <SettingsBar /> component', () => {
    const wrapper = mount(<HeaderImage images={images} />);
    expect(wrapper.find(SettingsBar)).toHaveLength(1);
  });
  test('renders <ImageCounter /> component', () => {
    const wrapper = mount(<HeaderImage images={images} />);
    expect(wrapper.find(ImageCounter)).toHaveLength(1);
  });
});
