import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Option extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.initialValue }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  getValue() {
    return this.state.value
  }
  render() {
    const { label, initialValue } = this.props
    return <option value={initialValue}>{label || this.props.children}</option>
  }
}
Option.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
}
Option.defaultProps = { initialValue: '', label: '' }
Option.displayName = 'ReactFormElements(Option)'
