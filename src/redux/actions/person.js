import { ADD_PERSON } from '../constant'

//同步action，就是指action的值为Object类型的一般对象

export const createAddPersonAction = (peronObj) => ({
  type: ADD_PERSON,
  data: peronObj,
})
