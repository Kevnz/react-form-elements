import React, {
  forwardRef,
  useRef,
  useState,
  useImperativeMethods,
} from 'react'
import PropTypes from 'prop-types'

const Range = forwardRef(
  ({ initialValue, label, type, ...otherProps }, ref) => {
    const [value, setValue] = useState(initialValue)
    const handleChange = e => setValue(e.target.value)
    const inputRef = useRef()
    useImperativeMethods(ref, () => ({
      getValue: () => inputRef.current.value,
    }))
    return (
      <div className="form-row_container">
        <label>
          {label || ''}
          <input
            ref={inputRef}
            type="range"
            onChange={handleChange}
            value={value}
            {...otherProps}
          />
        </label>
        <span>{value}</span>
      </div>
    )
  }
)

Range.propTypes = {
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
}

Range.defaultProps = {
  initialValue: 50,
  label: 'label',
  max: 100,
  min: 0,
  step: 1,
}

Range.displayName = 'ReactFormElements(Range)'

export default Range
