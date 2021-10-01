import React from 'react'
import { RecoilRoot as AstrophelRoot } from 'recoil'

import { GlobalStates } from './StateManagement'

export const ExampleComponent = ({ text }) => {
  return <div>Example Component: {text}</div>
}
