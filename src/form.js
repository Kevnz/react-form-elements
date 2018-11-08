import React, { useRef } from 'react'
import PropTypes from 'prop-types'
const Form = ({ name, onSubmit, children }) => {
  const mapped = children.map(child => {
    const dname = child.type ? child.type.displayName : false
    if (!dname) return child
    return Object.assign({}, child, { ref: useRef(null) })
  })
  const formElements = mapped.map(fel => ({
    name: fel.props.name,
    ref: fel.ref,
  }))

  return (
    <form
      name={name}
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
