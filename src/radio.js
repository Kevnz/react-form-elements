import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useCheckedElement from './utils/use-checked-element'

const Radio = forwardRef(
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
          type="radio"
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

Radio.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
}
Radio.defaultProps = { label: 'label', isChecked: false }
Radio.displayName = 'ReactFormElements(Radio)'

export default Radio
