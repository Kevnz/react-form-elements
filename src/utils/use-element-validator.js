import { useState, useRef, useImperativeHandle, useEffect } from 'react'

const useElementValidator = (inputRef, messages) => {
  useEffect(() => {
    inputRef.current.addEventListener('input', () => {
      inputRef.current.setCustomValidity('')
      inputRef.current.checkValidity()
    })

    inputRef.current.addEventListener('invalid', e => {
      console.info('invalid', e.type)
      if (inputRef.current.value === '' && messages.required) {
        inputRef.current.setCustomValidity(messages.required)
      } else if (messages.pattern) {
        inputRef.current.setCustomValidity(messages.pattern)
      }
    })
  }, [])

  return {}
}

export default useElementValidator
