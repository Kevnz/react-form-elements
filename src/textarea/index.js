import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * TextArea Component.
 *
 */
const TextArea = forwardRef(
  ({ name, initialValue, label, type, ...otherProps }, ref) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )
    return (
      <div className="rfe-form__row ">
        <label htmlFor={id}>{label || ''}</label>
        <textarea
          {...otherProps}
          id={id}
          onChange={handleChange}
          value={value}
          ref={inputRef}
        />
      </div>
    )
  }
)

TextArea.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

TextArea.defaultProps = { type: 'text', label: 'label' }
TextArea.displayName = 'ReactFormElements(TextArea)'

export default TextArea
