import React from 'react';
import { shallow } from 'enzyme';
import mockData from './mockData.jsx';
import $ from 'jquery';

jest.mock('jquery');

import App from '../client/components/App.jsx';

describe('<App />', () => {
  test('setCurrentHostelId', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setCurrentHostelId();
    expect(wrapper.state().hostelId).toBe('100');
  });
});