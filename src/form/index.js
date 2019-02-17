import React, { createRef } from 'react'
import PropTypes from 'prop-types'
const Form = ({ name, onSubmit, children }) => {
  const mapped = Array.isArray(children)
    ? children.map(child => {
        const displayName = child.type ? child.type.displayName : false
        if (!displayName) return child
        return Object.assign({}, child, {
          ref: createRef(),
          displayName: displayName,
        })
      })
    : [
        Object.assign({}, children, {
          ref: createRef(),
          displayName: children.type.displayName,
        }),
      ]

  const formElements = mapped.map(formElement => ({
    name: formElement.props.name,
    ref: formElement.ref,
    displayName: formElement.displayName,
  }))

  return (
    <form
      name={name}
      className="rfe-form"
      onSubmit={e => {
        e.preventDefault()
        let values = {}
        if (formElements.length === 1) {
          values = formElements[0].ref.current.getValues()
        }
        formElements.forEach(el => {
          if (!el.name) {
            return
          }
          if (el.ref.current.isFieldset) {
            Object.assign(values, el.ref.current.getValues())
          } else {
            values[el.name] = el.ref.current.getValue
              ? el.ref.current.getValue()
              : el.ref.current.value
          }
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
