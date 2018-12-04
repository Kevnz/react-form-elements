import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'react-html-id'
export default class CheckBox extends Component {
  constructor(props) {
    super(props)
    uniqueId.enableUniqueIds(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      checked: props.initialValue,
    }
  }
  handleChange(event) {
    this.setState({ checked: !this.state.checked })
  }
  getValue() {
    return this.state ? this.state.checked : false
  }
  isValid() {
    return true
  }
  render() {
    const { label, initialValue, ...otherProps } = this.props
    return (
      <div className="form-row_container">
        <label htmlFor={this.nextUniqueId()}>
          {label || ''}
          <input
            id={this.lastUniqueId()}
            type="checkbox"
            {...otherProps}
            checked={this.state.checked}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </label>
      </div>
    )
  }
}
CheckBox.displayName = 'ReactFormElements(CheckBox)'
CheckBox.propTypes = { label: PropTypes.string, initialValue: PropTypes.bool }
CheckBox.defaultProps = { label: 'label', initialValue: false }
