
import { createStore } from 'redux'

import reducers from '../reducers'


const store = createStore(reducers)
const rootEl = document.getElementById('root')

export default store