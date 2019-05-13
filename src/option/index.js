import React from 'react'
import PropTypes from 'prop-types'

/**
 * Option Component.
 *
 */
const Option = ({ label, initialValue, ...otherProps }) => {
  return <option value={initialValue}>{label || otherProps.children}</option>
}

Option.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
}
Option.defaultProps = { initialValue: '', label: '' }
Option.displayName = 'ReactFormElements(Option)'

export default Option
