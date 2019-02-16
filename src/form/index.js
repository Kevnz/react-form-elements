import React, { createRef } from 'react'
import PropTypes from 'prop-types'
const Form = ({ name, onSubmit, children }) => {
  const mapped = children.map(child => {
    const displayName = child.type ? child.type.displayName : false
    if (!displayName) return child
    return Object.assign({}, child, { ref: createRef() })
  })

  const formElements = mapped.map(formElement => ({
    name: formElement.props.name,
    ref: formElement.ref,
  }))

  return (
    <form
      name={name}
      className="rfe-form"
      onSubmit={e => {
        const values = {}
        formElements.forEach(el => {
          if (!el.name) {
            return
          }

          values[el.name] = el.ref.current.getValue()
        })
        e.preventDefault()
        onSubmit(values)
      }}
    >
      {mapped}
    </form>
  )
}

Form.displayName = 'ReactFormElements(Form)'

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default Form
