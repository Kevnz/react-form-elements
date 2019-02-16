import React, { useState, useRef, useImperativeHandle } from 'react'
import useId from './use-id'

const useCheckedElement = (value, initialChecked, ref) => {
  const id = useId()

  const [checked, setChecked] = useState(initialChecked)

  const handleChange = e => {
    setChecked(e.target.checked)
  }
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    getValue: () => (inputRef.current.checked ? value : null),
  }))
  return { id, checked, inputRef, handleChange }
}

export default useCheckedElement
