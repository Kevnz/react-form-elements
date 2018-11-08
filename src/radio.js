import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeMethods,
} from 'react'
import PropTypes from 'prop-types'

const Radio = forwardRef(({ name, label, checked: isChecked }, ref) => {
  const [value, setValue] = useState(isChecked)
  const handleChange = e => {
    setValue(e.target.checked)
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
          name={name}
          onChange={handleChange}
          type="radio"
          checked={value}
        />
      </label>
    </div>
  )
})

Radio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  initialValue: PropTypes.string,
}

Radio.defaultProps = {
  label: 'label',
  name: 'radio',
  initialValue: '',
  checked: false,
}

Radio.displayName = 'ReactFormElements(Radio)'

export default Radio
