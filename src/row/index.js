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
const Row = forwardRef(({ children, legend, ...props }, ref) => {
  const kids = Array.isArray(children) ? children : [children]
  const mapped = kids.map(childMapper)

  const formElements = mapped.map(formElementMapper)

  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    isRow: true,
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
