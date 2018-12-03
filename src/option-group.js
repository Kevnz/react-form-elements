import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class OptionGroup extends Component {
  render() {
    const { label } = this.props
    return <optgroup label={label}>{this.props.children}</optgroup>
  }
}
OptionGroup.propTypes = {
  label: PropTypes.string,
}
OptionGroup.defaultProps = { label: '' }
OptionGroup.displayName = 'ReactFormElements(OptionGroup)'
