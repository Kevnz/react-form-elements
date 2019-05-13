import React, { forwardRef } from 'react'
import { TextBox } from '../'

/**
 * EmailInput Component.
 *
 */
const EmailInput = forwardRef((props, ref) => <TextBox {...props} ref={ref} />)

EmailInput.defaultProps = { type: 'email', label: 'Email Address' }

EmailInput.displayName = 'ReactFormElements(EmailInput)'

export default EmailInput
