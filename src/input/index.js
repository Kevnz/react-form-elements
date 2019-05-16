import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * Input Component.
 *
 */
const Input = forwardRef(
  ({ name, initialValue, label, type, className, ...otherProps }, ref) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )
    return (
      <input
        id={id}
        ref={inputRef}
        name={name}
        onChange={handleChange}
        value={value}
        type={type}
        className={className}
        {...otherProps}
      />
    )
  }
)

Input.displayName = 'ReactFormElements(Input)'

export default Input

Input.propTypes = {
  name: PropTypes.string,
  initialValue: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  name: 'Input',
  initialValue: '',
  type: 'text',
  className: null,
}
