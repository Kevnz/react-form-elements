import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { TextBox } from '../'

/**
 * DateTime Component.
 *
 */
const DateTime = forwardRef((props, ref) => <TextBox {...props} ref={ref} />)

DateTime.displayName = 'ReactFormElements(Telephone)'

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
DateTime.displayName = 'ReactFormElements(DateTime)'

export default DateTime
