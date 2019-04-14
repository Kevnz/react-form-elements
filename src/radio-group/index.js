import React, { forwardRef, useState, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import useId from '../utils/use-id'
const useGroupedElement = (initialChecked, ref) => {
  const [checked, setChecked] = useState(initialChecked)
  const handleChange = e => {
    setChecked(e.currentTarget.value)
  }
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return inputRef.current.value
    },
    isValid: () => {
      return true // this is always valid at this stage
    },
  }))
  return { checked, inputRef, handleChange }
}

/**
 * RadioGroup Component.
 *
 */
const RadioGroup = forwardRef(
  ({ name, options, label, initialChecked, ...otherProps }, ref) => {
    const { checked, inputRef, handleChange } = useGroupedElement(
      initialChecked,
      ref
    )
    const radios = options.map((option, index) => {
      const id = useId()
      return (
        <div className="rfe-radiogroup__row" key={`radio-group-${index}`}>
          <label htmlFor={id}> {option.label} </label>
          <input
            id={id}
            name={name}
            type="radio"
            onChange={handleChange}
            value={option.value}
            checked={checked === option.value}
          />
        </div>
      )
    })
    return (
      <div className="rfe-form__row rfe-radiogroup">
        <label>{label || ''}</label>
        {radios}
        <input type="hidden" ref={inputRef} value={checked} />
      </div>
    )
  }
)

RadioGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  initialChecked: PropTypes.string,
}

RadioGroup.defaultProps = { label: 'label', options: [] }
RadioGroup.displayName = 'ReactFormElements(RadioGroup)'

export default RadioGroup
