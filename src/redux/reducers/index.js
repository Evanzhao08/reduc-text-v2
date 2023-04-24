//引入为Count组件服务的reducer
import { combineReducers } from 'redux'

import count from './count'

import person from './person'

export default combineReducers({
  count,
  person,
})
