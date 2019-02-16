import React, { forwardRef } from 'react'

/**
 * Button Component.
 *
 */
const Button = forwardRef(({ children, ...props }, ref) => {
  return (
    <button {...props} ref={ref}>
      {children}
    </button>
  )
})

Button.displayName = 'ReactFormElements(Button)'

export default Button
