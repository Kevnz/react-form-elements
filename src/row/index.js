import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import { childMapper, formElementMapper } from '../utils/children'

/**
 * Row Component.
 *
 */
const Row = forwardRef(({ children, legend, name, ...props }, ref) => {
  const kids = Array.isArray(children) ? children : [children]
  const mapped = kids.map(childMapper)

  const formElements = mapped.map(formElementMapper)

  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    isRow: true,
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
      if (!this) return null
      return this.getValues()
    },
  }))

  return (
    <div {...props} ref={inputRef}>
      {mapped}
    </div>
  )
})

Row.displayName = 'ReactFormElements(Row)'

export default Row

Row.propTypes = {
  name: PropTypes.string,
}

Row.defaultProps = {
  name: 'Row',
}
