import React from 'react'
import { shallow } from 'enzyme'

import Camera from './../../Components/Camera/Camera'

test('loads and displays greeting', async () => {
  const wrapper = shallow(<Camera />)
  console.log('DEBUG: ', wrapper.debug())
})
