import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DateTime extends Component {
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
            onChange={this.handleChange}
            value={this.state.value}
            {...otherProps}
          />
        </label>
      </div>
    )
  }
}

DateTime.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'date',
    'datetime',
    'month',
    'week',
    'time',
    'datetime',
    'datetime-local',
  ]),
}
DateTime.defaultProps = { initialValue: '', type: 'date', label: 'label' }
DateTime.displayName = 'ReactFormElements(DateTime)'
