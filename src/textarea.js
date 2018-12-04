import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'react-html-id'
export default class TextArea extends Component {
  constructor(props) {
    super(props)

    uniqueId.enableUniqueIds(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  getValue() {
    return this.state ? this.state.value : this.props.initialValue
  }
  render() {
    const { label, initialValue, ...otherProps } = this.props
    return (
      <div className="form-row_container">
        <label htmlFor={this.nextUniqueId()}>{label || ''}</label>
        <textarea
          {...otherProps}
          id={this.lastUniqueId()}
          onChange={this.handleChange}
          value={this.getValue()}
        />
      </div>
    )
  }
}

TextArea.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

TextArea.defaultProps = { type: 'text', label: 'label' }
TextArea.displayName = 'ReactFormElements(TextArea)'
