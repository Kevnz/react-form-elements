import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

const Range = forwardRef(
  ({ name, initialValue, label, ...otherProps }, ref) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )
    return (
      <div className="rfe-form__row">
        <label htmlFor={id}>{label || ''}</label>
        <input
          id={id}
          type="range"
          onChange={handleChange}
          value={value}
          ref={inputRef}
          {...otherProps}
        />

        <span>{value}</span>
      </div>
    )
  }
)

Range.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
}

Range.defaultProps = {
  name: 'Range',
  initialValue: 50,
  label: 'label',
  max: 100,
  min: 0,
  step: 1,
}

Range.displayName = 'ReactFormElements(Range)'

export default Range
