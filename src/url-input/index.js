import React, { forwardRef } from 'react'
import { TextBox } from '../'

const UrlInput = forwardRef((props, ref) => <TextBox {...props} ref={ref} />)

UrlInput.defaultProps = { type: 'url', label: 'URL Address' }

UrlInput.displayName = 'ReactFormElements(UrlInput)'

export default UrlInput
