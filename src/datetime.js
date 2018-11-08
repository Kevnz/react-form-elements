import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { TextBox } from './'

const DateTime = forwardRef((props, ref) => <TextBox {...props} ref={ref} />)
export default DateTime

DateTime.propTypes = {
  name: PropTypes.string,
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
DateTime.defaultProps = {
  name: 'datetime',
  initialValue: '',
  type: 'date',
  label: 'label',
}
DateTime.displayName = 'ReactFormElements(DateTime)'
