import { RecoilRoot as AstrophelRoot } from 'recoil'

import Components from './Components'
import { GlobalStates } from './StateManagement'

export default {
  AstrophelRoot,
  GlobalStates,
  ...Components
}
