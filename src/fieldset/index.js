import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'
import PropTypes from 'prop-types'

/**
 * Fieldset Component.
 *
 */
const Fieldset = forwardRef(({ children, legend, ...props }, ref) => {
  const mapped = children.map(child => {
    const displayName = child.type ? child.type.displayName : false
    if (!displayName) return child
    return Object.assign({}, child, { ref: createRef() })
  })

  const formElements = mapped.map(formElement => ({
    name: formElement.props.name,
    ref: formElement.ref,
  }))

  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    isFieldset: true,
    getValues: function() {
      const values = {}
      formElements.forEach(el => {
        if (!el.name) {
          return
        }
        values[el.name] = el.ref.current.getValue
          ? el.ref.current.getValue()
          : el.ref.current.value
      })
      return values
    },
    getValue: function() {
      return this.getValues()
    },
  }))

  return (
    <fieldset {...props} ref={inputRef}>
      <legend>{legend}</legend>
      {mapped}
    </fieldset>
  )
})

Fieldset.displayName = 'ReactFormElements(Fieldset)'

export default Fieldset

Fieldset.propTypes = {
  name: PropTypes.string,
  legend: PropTypes.string,
}

Fieldset.defaultProps = {
  name: 'Fieldset',
  legend: 'legend',
}
