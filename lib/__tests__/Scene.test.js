import React from 'react';

import  Scene  from '../Components/Scene/Scene'

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('Scene', () => {
    it('renders scene have prop platform is all', () => {
      const content = <></>;
      const wrapper = shallow((
        <Scene>
          {content}
        </Scene>
      ));
      expect(wrapper.props().platform).to.equal("all");
    });
    
    it('renders scene not have children', () => {
      const content = <></>;
      const wrapper = shallow((
        <Scene>
          content
        </Scene>
      ));
      expect(wrapper.children()).to.have.lengthOf(0);
    });
  });