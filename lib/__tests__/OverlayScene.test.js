import React from 'react';

import  OverlayScene  from '../Components/OverlayScene/OverlayScene'

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('Scene', () => {
    it('renders OverlayScene type is div', () => {
      const content = <></>;
      const wrapper = shallow((
        <OverlayScene content={content} type="fixed"/>
      ));
      expect(wrapper.type()).to.equal('div');
    });
    
    it('renders scene not have children', () => {
      const content = <></>;
      const wrapper = shallow((
        <OverlayScene content={content} type="fixed"/>
      ));
      expect(wrapper.children()).to.have.lengthOf(0);
    });
  });