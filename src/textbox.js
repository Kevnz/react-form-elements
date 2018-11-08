import React, {
  useState,
  useRef,
  useImperativeMethods,
  forwardRef,
} from 'react'
import PropTypes from 'prop-types'

const TextBox = forwardRef(({ name, initialValue, label, type }, ref) => {
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
          name={name}
          onChange={handleChange}
          value={value}
          type={type}
        />
      </label>
    </div>
  )
})

TextBox.displayName = 'ReactFormElements(TextBox)'
export default TextBox

TextBox.propTypes = {
  name: PropTypes.string,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

TextBox.defaultProps = {
  name: 'TextBox',
  initialValue: '',
  type: 'text',
  label: 'label',
}
