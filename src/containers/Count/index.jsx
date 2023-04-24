import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }

  render() {
    return (
      <>
        <h2>我是count组件</h2>
        <h4>
          当前求和为:{this.props.count} 下方组件总人数为:{this.props.persons}
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
  return { count: state.count, persons: state.person.length }
}

const mapDispatchToProps = {
  increment,
  decrement,
  incrementAsync,
}
export default connect(mapStateToProps, mapDispatchToProps)(Count)
