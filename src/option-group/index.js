import React from 'react'
import PropTypes from 'prop-types'
const OptionGroup = ({ label, children }) => {
  return <optgroup label={label}>{children}</optgroup>
}

OptionGroup.propTypes = {
  label: PropTypes.string,
}
OptionGroup.defaultProps = { label: '' }
OptionGroup.displayName = 'ReactFormElements(OptionGroup)'

export default OptionGroup
