import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const childMapper = child => {
  const displayName = child.type ? child.type.displayName : false
  if (!displayName && !child.ref) return child
  return Object.assign({}, child, {
    ref: createRef(),
    displayName: displayName,
  })
}
const elementsMapper = (fEl, index) => {
  return {
    name: fEl.props ? fEl.props.name : `${fEl.name}-${index}`,
    ref: fEl.ref,
    displayName: fEl.displayName,
  }
}
const resetElements = fe => {
  if (fe.ref.current && fe.ref.current.reset) {
    fe.ref.current.reset()
  }
}
const defaultElements = e => (e.value = '')

/**
 * Form Component.
 *
 */

const Form = forwardRef(({ name, onSubmit, children, className }, ref) => {
  const mapped = Array.isArray(children)
    ? children.map(childMapper)
    : [
        Object.assign({}, children, {
          ref: createRef(),
          displayName: children.type.displayName,
        }),
      ]

  const formElements = mapped.map(elementsMapper)

  const formRef = useRef()
  const formSubmission = e => {
    e.preventDefault()
    let values = {}
    if (formElements.length === 1) {
      values =
        formElements[0].ref.current.getValues() ||
        formElements[0].ref.current.getValue()
    }
    formElements.forEach(el => {
      if (!el.name) {
        return
      }
      if (!el.ref) {
        return
      }
      if (el.ref && (el.ref.current.isFieldset || el.ref.current.isRow)) {
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
  }
  useImperativeHandle(ref, () => ({
    reset: () => {
      formRef.current.reset()
      const ins = formRef.current.querySelectorAll('input')
      formElements.forEach(resetElements)
      const elements = Array.from(ins)
      elements.forEach(defaultElements)
    },
    submit: () => {
      console.log('form ref', formRef.current)
      console.log('form ref syb', formRef.current.submit)
      console.log('synthetic submission')
      formSubmission({
        preventDefault: () => {
          console.log('synthetic submission preventDefault')
        },
      })
    },
  }))
  return (
    <form
      ref={formRef}
      name={name}
      className={classnames('rfe-form', className)}
      onSubmit={formSubmission}
    >
      {mapped}
    </form>
  )
})

Form.displayName = 'ReactFormElements(Form)'

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default Form
