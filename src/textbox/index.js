import React, { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * TextBox Component.
 *
 */
const TextBox = forwardRef(
  (
    {
      name,
      initialValue,
      label,
      type,
      className,
      labelClassName,
      inputClassName,
      validator,
      children,
      ...otherProps
    },
    ref
  ) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )
    const labelStyleProp =
      labelClassName === ''
        ? {}
        : {
            className: labelClassName,
          }
    const inputStyleProp =
      inputClassName === ''
        ? {}
        : {
            className: inputClassName,
          }
    const hasLabel = label.length > 0
    return (
      <div className={classNames(`rfe-form__row`, className)}>
        {hasLabel && (
          <label htmlFor={id} {...labelStyleProp}>
            {label || ''}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={inputRef}
          name={name}
          onChange={handleChange}
          onBlur={e => {
            console.log('e blur', e)
            validator(value)
          }}
          value={value}
          {...inputStyleProp}
          {...otherProps}
        />
        {children}
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
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}

TextBox.defaultProps = {
  name: 'TextBox',
  initialValue: '',
  type: 'text',
  label: 'label',
  className: '',
  inputClassName: '',
  labelClassName: '',
  validator: () => true,
}
