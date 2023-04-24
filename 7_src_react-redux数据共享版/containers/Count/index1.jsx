import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action'

class Count extends Component {
  //state = { carName: '奔驰c63' }

  //加法
  increment = () => {
    const { value } = this.selectNumber
    this.props.jia(value * 1)
  }
  //减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)
  }
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = this.props.count
    if (count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.jiaAsync(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { count: state }
}

/* //mapDispatchToProps 的一般写法
const mapDispatchToProps = (dispatch) => {
  return {
    jia: (number) => dispatch(createIncrementAction(number)),
    jian: (number) => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) =>
      dispatch(createIncrementAsyncAction(number, time)),
  }
} */

//mapDispatchToProps 的精简写法
const mapDispatchToProps = {
  jia: createIncrementAction,
  jian: createDecrementAction,
  jiaAsync: createIncrementAsyncAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
