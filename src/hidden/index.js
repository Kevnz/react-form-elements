import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import useFormElement from '../utils/use-form-element'

/**
 * Hidden Component.
 *
 */
const Hidden = forwardRef(
  ({ name, initialValue, label, type, ...otherProps }, ref) => {
    const { id, value, handleChange, inputRef } = useFormElement(
      initialValue,
      ref
    )
    return (
      <div className="rfe-form--hidden__row ">
        <input
          id={id}
          ref={inputRef}
          name={name}
          onChange={handleChange}
          value={value}
          type="hidden"
          {...otherProps}
        />
      </div>
    )
  }
)

Hidden.displayName = 'ReactFormElements(Hidden)'

export default Hidden

Hidden.propTypes = {
  name: PropTypes.string,
  initialValue: PropTypes.string,
}

Hidden.defaultProps = {
  name: 'Hidden',
  initialValue: '',
}
