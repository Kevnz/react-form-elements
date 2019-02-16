import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useCheckedElement from '../utils/use-checked-element'

const CheckBox = forwardRef(
  ({ name, isChecked, label, value, ...otherProps }, ref) => {
    const { id, checked, handleChange, inputRef } = useCheckedElement(
      value,
      isChecked,
      ref
    )
    return (
      <div className="rfe-form__row">
        <label htmlFor={id}>{label || ''}</label>
        <input
          id={id}
          name={name}
          type="checkbox"
          {...otherProps}
          onChange={handleChange}
          value={value}
          checked={checked}
          ref={inputRef}
        />
      </div>
    )
  }
)

CheckBox.displayName = 'ReactFormElements(CheckBox)'
CheckBox.propTypes = {
  /** The "label" for the element */
  label: PropTypes.string,
  /** The "value" for the element */
  value: PropTypes.string,
  /** If the checkbox should be checked */
  isChecked: PropTypes.bool,
}
CheckBox.defaultProps = { label: 'label', isChecked: false }

export default CheckBox
