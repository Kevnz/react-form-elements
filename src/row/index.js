import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'
import PropTypes from 'prop-types'

/**
 * Row Component.
 *
 */
const Row = forwardRef(({ children, legend, ...props }, ref) => {
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
    isRow: true,
    getValues: () => {
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
    getValue: () => {
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
