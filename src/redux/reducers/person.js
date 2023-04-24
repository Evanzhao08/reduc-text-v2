import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'tom', age: 18 }]
export default function personReducer(preState = initState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [action.data, ...preState]
    default:
      return preState
  }
}
