import React, { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * Meter Component.
 *
 */
const Meter = forwardRef(
  (
    {
      name,
      initialValue,
      label,
      min,
      max,
      low,
      high,
      optimum,
      className,
      labelClassName,
      meterClassName,
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
    const meterStyleProp =
      meterClassName === ''
        ? {}
        : {
            className: meterClassName,
          }
    const hasLabel = label.length > 0
    return (
      <div className={classNames(`rfe-form__row`, 'rfe-meter', className)}>
        {hasLabel && (
          <label htmlFor={id} {...labelStyleProp}>
            {label || ''}
          </label>
        )}
        <meter
          id={id}
          name={name}
          min={min}
          max={max}
          low={low}
          high={high}
          optimum={optimum}
          value={value}
          ref={inputRef}
          {...meterStyleProp}
        >
          at {value}/{max}
        </meter>
      </div>
    )
  }
)

Meter.displayName = 'ReactFormElements(Meter)'

export default Meter

Meter.propTypes = {
  name: PropTypes.string,
  initialValue: PropTypes.number,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  low: PropTypes.number,
  high: PropTypes.number,
  optimum: PropTypes.number,
  className: PropTypes.string,
  meterClassName: PropTypes.string,
  labelClassName: PropTypes.string,
}

Meter.defaultProps = {
  name: 'Progress',
  initialValue: 1,
  label: 'label',
  min: 0,
  max: 100,
  low: 20,
  high: 80,
  optimum: 60,
  className: '',
  meterClassName: '',
  labelClassName: '',
}
