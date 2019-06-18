import { createRef } from 'react'

export const childMapper = child => {
  const displayName = child.type ? child.type.displayName : false
  if (!displayName) return child
  return Object.assign({}, child, { ref: createRef() })
}
export const formElementMapper = formElement => ({
  name: formElement.props.name,
  ref: formElement.ref,
})
