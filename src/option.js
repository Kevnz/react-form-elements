import React from 'react'
import PropTypes from 'prop-types'

const Option = ({ initialValue, label, children }) => (
  <option value={initialValue}>{label || children}</option>
)

Option.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
}

Option.defaultProps = { initialValue: '', label: '' }

Option.displayName = 'ReactFormElements(Option)'

export default Option
