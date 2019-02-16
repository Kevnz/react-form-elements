import { useState, useRef, useImperativeHandle } from 'react'
import useId from './use-id'

const useFormElement = (initialValue, ref) => {
  const id = useId()
  const [value, setValue] = useState(initialValue)
  const handleChange = e => {
    if (typeof initialValue === 'boolean') {
      return setValue(!value)
    }
    setValue(e.target.value)
  }
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    getValue: () => inputRef.current.value,
    getValidity: () => inputRef.current.validity,
    isValid: () => inputRef.current.validity.valid,
  }))
  return { id, value, inputRef, handleChange }
}

export default useFormElement
