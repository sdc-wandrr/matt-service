import React from 'react';
import { shallow, mount } from 'enzyme';
import mockData from './mockData.jsx';
import axios from 'axios';
import 'babel-polyfill';

jest.mock('axios');

import App from '../client/components/App.jsx';
import { StyledCornerGrid, ImageCarousel } from '../client/components/ImageCarousel.jsx';
import { StyledImageCounter, ImageCounter } from '../client/components/ImageCounter.jsx';
import { StyledImageGridItem, ImageGridItem } from  '../client/components/ImageGridItem.jsx';
import { HeaderImage } from '../client/components/HeaderImage.jsx';
import { ImageGrid } from '../client/components/ImageGrid.jsx';

beforeAll(() => {
  const resp = {
    data: [
      {
        id: 233,
        file_name: 'img_444.jpg',
        url: 'https://hostileworldimages.s3.us-east-2.amazonaws.com/img_14.jpg',
        description: 'Try to generate the COM interface, maybe it will parse the optical transmitter!',
        hostel_id: 100,
      },
      {
        id: 2,
        file_name: 'img_444.jpg',
        url: 'https://hostileworldimages.s3.us-east-2.amazonaws.com/img_14.jpg',
        description: 'Try to generate the COM interface, maybe it will parse the optical transmitter!',
        hostel_id: 100,
      },
      {
        id: 10,
        file_name: 'img_56.jpg',
        url: 'https://hostileworldimages.s3.us-east-2.amazonaws.com/img_14.jpg',
        description: 'Try to generate the COM interface, maybe it will parse the optical transmitter!',
        hostel_id: 100,
      },
    ],
  };
  axios.get.mockResolvedValue(resp);
});

describe('<App />', () => {
  test('setCurrentHostelId', async () => {
    const wrapper = shallow(<App />);
    await wrapper.instance().setCurrentHostelId();
    expect(wrapper.state().hostelId).toBe('100');
  });

  test('fetchImagesByHostelId', async () => {
    const wrapper = shallow(<App />);
    await wrapper.instance().fetchImagesByHostelId('100');
    expect(wrapper.state().images).toHaveLength(3);
  });

  test('showImageCarousel via StyledImageCounter', async () => {
    const wrapper = mount(<App />);
    await wrapper.instance().componentDidMount();
    wrapper.update();
    expect(wrapper.state().showModal).toBe(false);
    wrapper.find(StyledImageCounter).simulate('click');
    expect(wrapper.state().showModal).toBe(true);
  });

  test('showImageCarousel via StyledImageGridItem', async () => {
    const wrapper = mount(<App />);
    await wrapper.instance().componentDidMount();
    wrapper.update();
    expect(wrapper.state().showModal).toBe(false);

    wrapper.find(StyledImageGridItem).at(0).simulate('click');

    expect(wrapper.state().showModal).toBe(true);
  });

  test('handleExitClick', async () => {
    const wrapper = mount(<App />);
    await wrapper.instance().componentDidMount();
    wrapper.update();
    wrapper.find(StyledImageCounter).simulate('click');
    expect(wrapper.state().showModal).toBe(true);
    wrapper.update();
    wrapper.find(StyledCornerGrid).simulate('click');
    expect(wrapper.state().showModal).toBe(false);
  });
});
