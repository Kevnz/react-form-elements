import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

const Meter = forwardRef(
  (
    { name, initialValue, label, min, max, low, high, optimum, ...otherProps },
    ref
  ) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )

    return (
      <div className="rfe-form__row rfe-meter">
        <label htmlFor={id}>{label || ''}</label>
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
}
