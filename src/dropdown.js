import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'react-html-id'
export default class DropDown extends Component {
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
        <label htmlFor={this.nextUniqueId()}>{this.props.label}</label>
        <select
          id={this.lastUniqueId()}
          onChange={this.handleChange}
          onSelect={this.handleChange}
          value={this.state.value}
          {...otherProps}
        >
          {this.props.children}
        </select>
      </div>
    )
  }
}

DropDown.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  initialValue: PropTypes.string,
}
DropDown.defaultProps = { label: 'label', initialValue: '' }
DropDown.displayName = 'ReactFormElements(DropDown)'
