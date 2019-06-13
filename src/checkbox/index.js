import React, { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useCheckedElement from '../utils/use-checked-element'

/**
 * CheckBox Component.
 *
 */
const CheckBox = forwardRef(
  (
    {
      name,
      isChecked,
      label,
      value,
      className,
      labelClassName,
      inputClassName,
      ...otherProps
    },
    ref
  ) => {
    const { id, checked, handleChange, inputRef } = useCheckedElement(
      value,
      isChecked,
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
        <input
          id={id}
          name={name}
          type="checkbox"
          {...inputStyleProp}
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
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}
CheckBox.defaultProps = {
  label: 'label',
  isChecked: false,
  className: '',
  inputClassName: '',
  labelClassName: '',
}

export default CheckBox
