import React, {
  forwardRef,
  useState,
  useRef,
  useImperativeMethods,
} from 'react'
import PropTypes from 'prop-types'

const CheckBox = forwardRef(
  ({ initialValue, label, checked: isChecked }, ref) => {
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
            type="checkbox"
            {...(checked ? { checked: 'checked' } : {})}
          />
        </label>
      </div>
    )
  }
)
CheckBox.propTypes = {
  label: PropTypes.string,
  initialValue: PropTypes.string,
  checked: PropTypes.bool,
}
CheckBox.defaultProps = {
  label: 'label',
  initialValue: '',
  checked: false,
}
CheckBox.displayName = 'CheckBox'

export default CheckBox
