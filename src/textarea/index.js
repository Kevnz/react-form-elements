import React, { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * TextArea Component.
 *
 */
const TextArea = forwardRef(
  (
    {
      name,
      initialValue,
      label,
      className,
      inputClassName,
      labelClassName,
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
    return (
      <div className={classNames(`rfe-form__row`, className)}>
        <label htmlFor={id} {...labelStyleProp}>
          {label || ''}
        </label>
        <textarea
          {...otherProps}
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
          ref={inputRef}
          {...inputStyleProp}
        />
      </div>
    )
  }
)

TextArea.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}

TextArea.defaultProps = {
  label: 'label',
  className: '',
  inputClassName: '',
  labelClassName: '',
}
TextArea.displayName = 'ReactFormElements(TextArea)'

export default TextArea
