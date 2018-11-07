import React, {
  useState,
  useRef,
  useImperativeMethods,
  forwardRef,
} from 'react'
import PropTypes from 'prop-types'

const TextBox = forwardRef(({ initialValue, label, type }, ref) => {
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
          onChange={handleChange}
          value={value}
          type={type}
        />
      </label>
    </div>
  )
})

TextBox.displayName = 'TextBox'
export default TextBox

TextBox.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

TextBox.defaultProps = { initialValue: '', type: 'text', label: 'label' }
