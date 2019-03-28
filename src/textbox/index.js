import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'
import useElementValidator from '../utils/use-element-validator'
const TextBox = forwardRef(
  ({ name, initialValue, label, type, ...otherProps }, ref) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )
    useElementValidator(inputRef, otherProps.messages)
    return (
      <div className="rfe-form__row ">
        <label htmlFor={id}>{label || ''}</label>
        <input
          id={id}
          ref={inputRef}
          name={name}
          onChange={handleChange}
          value={value}
          type={type}
          required={!!otherProps.required}
          {...otherProps}
        />
      </div>
    )
  }
)

TextBox.displayName = 'ReactFormElements(TextBox)'

export default TextBox

TextBox.propTypes = {
  name: PropTypes.string,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
  validator: PropTypes.func,
}

TextBox.defaultProps = {
  name: 'TextBox',
  initialValue: '',
  type: 'text',
  label: 'label',
  required: false,
}
