import React, { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * Progress Component.
 *
 */
const Progress = forwardRef(
  (
    {
      name,
      initialValue,
      label,
      type,
      className,
      labelClassName,
      progressClassName,
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
    const progressStyleProp =
      progressClassName === ''
        ? {}
        : {
            className: progressClassName,
          }
    const hasLabel = label.length > 0

    return (
      <div className={classNames(`rfe-form__row`, 'rfe-progress', className)}>
        {hasLabel && (
          <label htmlFor={id} {...labelStyleProp}>
            {label || ''}
          </label>
        )}
        <progress
          id={id}
          ref={inputRef}
          name={name}
          onChange={handleChange}
          value={value}
          {...progressStyleProp}
          {...otherProps}
        />
      </div>
    )
  }
)

Progress.displayName = 'ReactFormElements(Progress)'

export default Progress

Progress.propTypes = {
  name: PropTypes.string,
  initialValue: PropTypes.number,
  label: PropTypes.string,
  className: PropTypes.string,
  progressClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}

Progress.defaultProps = {
  name: 'Progress',
  initialValue: '',
  label: 'Progress Label:',
  className: '',
  progressClassName: '',
  labelClassName: '',
}
