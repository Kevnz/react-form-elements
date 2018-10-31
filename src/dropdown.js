import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class DropDown extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  getValue() {
    return this.state.value
  }
  render() {
    // var { options, ...otherProps } = this.props;
    let opts = this.props.children || <option>Nope</option>
    return (
      <div className="form-row_container">
        <label>
          {this.props.label}
          <select
            {...this.props}
            onChange={this.handleChange}
            onSelect={this.handleChange}
          >
            {opts}
          </select>
        </label>
      </div>
    )
  }
}

DropDown.propTypes = { children: PropTypes.node, label: PropTypes.string }
DropDown.defaultProps = { label: 'label' }
