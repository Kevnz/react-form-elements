import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * DropDown Component.
 *
 */
const DropDown = forwardRef(
  ({ name, initialValue, label, type, children, ...otherProps }, ref) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )

    return (
      <div className="rfe-form__row">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          onChange={handleChange}
          onSelect={handleChange}
          value={value}
          ref={inputRef}
          {...otherProps}
        >
          {children}
        </select>
      </div>
    )
  }
)

DropDown.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  initialValue: PropTypes.string,
}
DropDown.defaultProps = { label: 'label', initialValue: '' }
DropDown.displayName = 'ReactFormElements(DropDown)'

export default DropDown
