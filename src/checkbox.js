import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeMethods,
} from 'react'
import PropTypes from 'prop-types'

const CheckBox = forwardRef(({ name, label, checked: isChecked }, ref) => {
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
          onChange={handleChange}
          name={name}
          type="checkbox"
          checked={value}
        />
      </label>
    </div>
  )
})
CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
}
CheckBox.defaultProps = {
  label: 'label',
  name: 'checkbox',
  checked: false,
}
CheckBox.displayName = 'ReactFormElements(CheckBox)'

export default CheckBox
