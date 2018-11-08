import React, {
  useState,
  useRef,
  useImperativeMethods,
  forwardRef,
} from 'react'
import PropTypes from 'prop-types'

const DropDown = forwardRef(
  ({ initialValue, label, children, ...otherProps }, ref) => {
    const [value, setValue] = useState(initialValue)
    const handleChange = e => setValue(e.target.value)
    const inputRef = useRef()
    useImperativeMethods(ref, () => ({
      getValue: () => inputRef.current.value,
    }))
    return (
      <div className="form-row_container">
        <label>
          {label}
          <select
            ref={inputRef}
            onChange={handleChange}
            onSelect={handleChange}
            value={value}
            {...otherProps}
          >
            {children}
          </select>
        </label>
      </div>
    )
  }
)

DropDown.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  initialValue: PropTypes.string,
}

DropDown.defaultProps = { label: 'label', initialValue: '' }

DropDown.displayName = 'ReactFormElements(DropDown)'

export default DropDown
