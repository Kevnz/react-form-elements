import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Range extends Component {
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
    const { label, initialValue, ...otherProps } = this.props
    return (
      <div className="form-row_container">
        <label>
          {label || ''}
          <input
            type="range"
            onChange={this.handleChange}
            value={this.state.value}
            {...otherProps}
          />
        </label>
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
