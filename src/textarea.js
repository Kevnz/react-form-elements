import React, {
  useState,
  useRef,
  useImperativeMethods,
  forwardRef,
} from 'react'
import PropTypes from 'prop-types'

const TextArea = forwardRef(
  ({ children, initialValue, label, ...otherProps }, ref) => {
    const [value, setValue] = useState(initialValue || children)
    const handleChange = e => setValue(e.target.value)
    const inputRef = useRef()
    useImperativeMethods(ref, () => ({
      getValue: () => inputRef.current.value,
    }))
    return (
      <div className="form-row_container">
        <label>
          {label || ''}
          <textarea
            ref={inputRef}
            value={value}
            {...otherProps}
            onChange={handleChange}
          />
        </label>
      </div>
    )
  }
)

TextArea.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
}

TextArea.defaultProps = { label: 'label', name: 'TextArea' }
TextArea.displayName = 'ReactFormElements(TextArea)'
export default TextArea
