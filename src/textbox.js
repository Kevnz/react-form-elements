'use strict'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'react-html-id'
export default class TextBox extends Component {
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
          onChange={this.handleChange}
          value={this.state.value}
          {...otherProps}
        />
      </div>
    )
  }
}
TextBox.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}
TextBox.defaultProps = { initialValue: '', type: 'text', label: 'label' }

TextBox.displayName = 'ReactFormElements(TextBox)'
