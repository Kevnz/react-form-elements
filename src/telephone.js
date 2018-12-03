import TextBox from './textbox'

export default class Telephone extends TextBox {}

Telephone.defaultProps = { type: 'tel', label: 'Telephone Number' }

Telephone.displayName = 'ReactFormElements(Telephone)'
