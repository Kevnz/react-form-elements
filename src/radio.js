import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeMethods,
} from 'react'
import PropTypes from 'prop-types'

const Radio = forwardRef(({ initialValue, label, checked: isChecked }, ref) => {
  const [value, setValue] = useState(initialValue)
  const [checked, setChecked] = useState(isChecked)
  const handleChange = e => {
    setValue(e.target.value)
    setChecked(!checked)
  }
  const inputRef = useRef()
  useImperativeMethods(ref, () => ({
    getValue: () => inputRef.current.checked,
  }))

  return (
    <div className="form-row_container">
      <label>
        {label || ''}
        <input
          ref={inputRef}
          onChange={handleChange}
          value={value}
          type="radio"
          {...(checked ? { checked: 'checked' } : {})}
        />
      </label>
    </div>
  )
})

Radio.propTypes = {
  label: PropTypes.string,
  initialValue: PropTypes.string,
  checked: PropTypes.bool,
}

Radio.defaultProps = {
  label: 'label',
  initialValue: '',
  checked: false,
}

Radio.displayName = 'Radio'

export default Radio
