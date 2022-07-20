import { useState, useRef, useImperativeHandle, createRef } from 'react'
import useId from './use-id'

/**
 * useFormElement Hook.
 *
 */
const useFormElement = (initialValue, ref = createRef()) => {
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
    clear: () => setValue(''),
    reset: () => setValue(''),
    getName: () => inputRef.current.name,
    getValue: () => inputRef.current.value,
    getValidity: () => inputRef.current.validity,
    isValid: () => inputRef.current.validity.valid,
  }))
  return { id, value, inputRef, handleChange }
}

export default useFormElement
