import React from 'react';

import  Camera  from '../Components/Camera/Camera'

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('Camera', () => {
    it('renders Camera have prop primitive is a-camera', () => {
      const wrapper = shallow((
        <Camera/>
      ));
      expect(wrapper.props().primitive).to.equal("a-camera");
    });
  });