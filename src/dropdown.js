import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class DropDown extends Component {
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
          {this.props.label}
          <select
            onChange={this.handleChange}
            onSelect={this.handleChange}
            value={this.state.value}
            {...otherProps}
          >
            {this.props.children}
          </select>
        </label>
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
