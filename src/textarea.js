import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TextArea extends Component {
  constructor(props) {
    super(props)
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
        <label>
          {label || ''}
          <textarea
            {...otherProps}
            onChange={this.handleChange}
            value={this.getValue()}
          />
        </label>
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
