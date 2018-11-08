import React, { forwardRef } from 'react'
import { TextBox } from './'

const Telephone = forwardRef((props, ref) => <TextBox {...props} ref={ref} />)

Telephone.defaultProps = { type: 'tel', label: 'Telephone Number' }

Telephone.displayName = 'ReactFormElements(Telephone)'

export default Telephone
