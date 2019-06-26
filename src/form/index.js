import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'
import PropTypes from 'prop-types'

/**
 * Form Component.
 *
 */

const Form = forwardRef(({ name, onSubmit, children }, ref) => {
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

  const formElements = mapped.map((fEl, index) => ({
    name: fEl.props ? fEl.props.name : `${fEl.name}-${index}`,
    ref: fEl.ref,
    displayName: fEl.displayName,
  }))

  const formRef = useRef()

  useImperativeHandle(ref, () => ({
    reset: () => {
      formRef.current.reset()
      const ins = formRef.current.querySelectorAll('input')
      const els = Array.from(ins)
      els.forEach(e => (e.value = ''))
    },
  }))
  return (
    <form
      ref={formRef}
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
          if (el.ref.current.isFieldset || el.ref.current.isRow) {
            Object.assign(values, el.ref.current.getValues())
          } else {
            values[el.name] = el.ref.current.getValue
              ? el.ref.current.getValue()
              : el.ref.current.value
          }
        })

        e.preventDefault()
        const flattenObject = obj => {
          const flattened = {}

          Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
              Object.assign(flattened, flattenObject(obj[key]))
            } else {
              flattened[key] = obj[key]
            }
          })

          return flattened
        }

        onSubmit(flattenObject(values))
      }}
    >
      {mapped}
    </form>
  )
})

Form.displayName = 'ReactFormElements(Form)'

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default Form
