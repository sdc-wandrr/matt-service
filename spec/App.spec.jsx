import React from 'react';
import { shallow } from 'enzyme';
import mockData from './mockData.jsx';
import axios from 'axios';
import 'babel-polyfill';

jest.mock('axios');

import App from '../client/components/App.jsx';

describe('<App />', () => {
  test('setCurrentHostelId', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setCurrentHostelId();
    expect(wrapper.state().hostelId).toBe('100');
  });

  test('fetchImagesByHostelId', async () => {
    const wrapper = shallow(<App />);
    await wrapper.instance().fetchImagesByHostelId('100');
    expect(wrapper.state().images.length).toBe(3);
  });
});
