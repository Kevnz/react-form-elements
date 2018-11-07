import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { TextBox } from './'

const DateTime = forwardRef((props, ref) => <TextBox {...props} ref={ref} />)
export default DateTime

DateTime.propTypes = {
  initialValue: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'date',
    'datetime',
    'month',
    'week',
    'time',
    'datetime',
    'datetime-local',
  ]),
}
DateTime.defaultProps = { initialValue: '', type: 'date', label: 'label' }
DateTime.displayName = 'DateTime'
