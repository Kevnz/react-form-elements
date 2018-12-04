import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'react-html-id'

export default class Range extends Component {
  constructor(props) {
    super(props)
    uniqueId.enableUniqueIds(this)
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
    const { label, initialValue, ...otherProps } = this.props
    return (
      <div className="form-row_container">
        <label htmlFor={this.nextUniqueId()}>{label || ''}</label>
        <input
          id={this.lastUniqueId()}
          type="range"
          onChange={this.handleChange}
          value={this.state.value}
          {...otherProps}
        />

        <span>{this.state.value}</span>
      </div>
    )
  }
}

Range.propTypes = {
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
}

Range.defaultProps = {
  initialValue: 50,
  label: 'label',
  max: 100,
  min: 0,
  step: 1,
}

Range.displayName = 'ReactFormElements(Range)'
