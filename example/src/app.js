import React, { Component, createRef } from 'react'
import classNames from 'classnames'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import darcula from 'react-syntax-highlighter/styles/prism/darcula'
import { TextBox, Checkbox, Range, Date, Telephone } from '../../src'

export default class App extends Component {
  constructor(props) {
    const references = {
      modal: createRef(),
      shim: createRef(),
      textBox: createRef(),
      checkBox: createRef(),
      range: createRef(),
      date: createRef(),
      telephone: createRef(),
    }
    super(props)
    this.references = references
    this.state = {
      isHidden: true,
      formValues: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }
  handleClick(e) {
    console.log('handleClick')
    e.preventDefault()
    const modalText = this.getFormValues()

    console.log(modalText)

    this.showModal()
  }
  showModal() {
    console.log('showModal')
    this.setState({
      isHidden: false,
    })
  }
  hideModal(e) {
    e.preventDefault()
    this.setState({
      isHidden: true,
    })
  }
  getFormValues() {
    if (this.references.textBox.current === null)
      return {
        textBox: '',
        checkBox: '',
        range: '',
        date: '',
        telephone: '',
      }
    return {
      textBox: this.references.textBox.current.getValue(),
      checkBox: this.references.checkBox.current.getValue(),
      range: this.references.range.current.getValue(),
      date: this.references.date.current.getValue(),
      telephone: this.references.telephone.current.getValue(),
    }
  }

  render() {
    const formValues = this.getFormValues()
    const codeString = `
    import React, { Component, createRef } from 'react'
    import { TextBox } from 'react-form-elements'
    const ref = createRef()
    <TextBox label="My Label" initialValue="My Input Value" ref={ref} />
    ref.current.getValue()
    `
    return (
      <div>
        <h2>Example Code</h2>
        <SyntaxHighlighter language="jsx" style={darcula}>
          {codeString}
        </SyntaxHighlighter>
        <form>
          <TextBox label="My Label" ref={this.references.textBox} />
          <Checkbox
            label="My Checkbox"
            ref={this.references.checkBox}
            initialValue={true}
          />
          <Date label="My Date" ref={this.references.date} />
          <Range label="My Range" ref={this.references.range} />
          <Telephone label="Telephone" ref={this.references.telephone} />
          <Date label="My DateTime" type="datetime" />
          <Date label="My Month" type="month" />
          <Date label="My Week" type="week" />
          <Date label="My DateTime" type="datetime-local" />
          <Date label="My Time" type="time" />
          <button
            onClick={e => {
              e.preventDefault()
              this.showModal()
            }}
          >
            Check
          </button>
        </form>
        <div
          className={classNames('modal-shim', { hidden: this.state.isHidden })}
          ref={this.references.shim}
        />
        <div
          className={classNames('modal', { hidden: this.state.isHidden })}
          ref={this.references.modal}
        >
          <div>
            <ul>
              <li data-testid="textbox">TextBox: {formValues.textBox}</li>
              <li data-testid="checkbox">Checkbox: {formValues.checkBox}</li>
              <li data-testid="range">Range: {formValues.range}</li>
              <li data-testid="date">Date: {formValues.date}</li>
              <li data-testid="telephone">Telephone: {formValues.telephone}</li>
            </ul>
          </div>
          <div>
            <button onClick={this.hideModal}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}
