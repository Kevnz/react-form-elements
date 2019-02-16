import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

const Progress = forwardRef(
  ({ name, initialValue, label, type, ...otherProps }, ref) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )

    return (
      <div className="rfe-form__row rfe-progress">
        <label htmlFor={id}>{label || ''}</label>
        <progress
          id={id}
          ref={inputRef}
          name={name}
          onChange={handleChange}
          value={value}
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
}

Progress.defaultProps = {
  name: 'Progress',
  initialValue: '',
  label: 'Progress Label:',
}
