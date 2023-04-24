import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber
    console.log(value)
    this.props.jia(value * 1)
  }
  render() {
    return (
      <>
        <h2>我是count组件</h2>
        <h4>
          当前求和为:{this.props.he} 下方组件总人数为:{this.props.personNum}
        </h4>
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
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { he: state.he, personNum: state.rens.length }
}

const mapDispatchToProps = {
  jia: createIncrementAction,
  jian: createDecrementAction,
  jiaAsync: createIncrementAsyncAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(Count)
