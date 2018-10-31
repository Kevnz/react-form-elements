import PropTypes from 'prop-types'
import TextBox from './textbox'

export default class Date extends TextBox {}

Date.propTypes = {
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
Date.defaultProps = { initialValue: '', type: 'date', label: 'label' }
