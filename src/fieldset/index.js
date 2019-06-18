import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'
import PropTypes from 'prop-types'

import { childMapper, formElementMapper } from '../utils/children'
/**
 * Fieldset Component.
 *
 */
const Fieldset = forwardRef(({ children, legend, ...props }, ref) => {
  const kids = Array.isArray(children) ? children : [children]

  const mapped = kids.map(childMapper)
  const formElements = mapped.map(formElementMapper)

  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    isFieldset: true,
    getValues: function() {
      return formElements.reduce((accumulator, el) => {
        if (!el.name) {
          return accumulator
        }
        accumulator[el.name] = el.ref.current.getValue
          ? el.ref.current.getValue()
          : el.ref.current.value
        return accumulator
      }, {})
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
