import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import { TextBox, Checkbox, Range, DateTime, Telephone } from '../index'

class App extends React.Component {
  constructor(props) {
    const references = {
      textBox: React.createRef(),
      checkBox: React.createRef(),
      range: React.createRef(),
      date: React.createRef(),
      telephone: React.createRef(),
    }
    super(props)
    this.references = references
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
    console.log('render')
    return (
      <div>
        <h1>React Form Elements</h1>
        <form>
          <TextBox label="My Label" ref={this.references.textBox} />
          <Checkbox
            label="My Checkbox"
            ref={this.references.checkBox}
            initialValue={true}
          />
          <DateTime label="My Date" ref={this.references.date} />
          <Range label="My Range" ref={this.references.range} />
          <Telephone label="Telephone" ref={this.references.telephone} />
          <DateTime label="My DateTime" type="datetime" />
          <DateTime label="My Month" type="month" />
          <DateTime label="My Week" type="week" />
          <DateTime label="My DateTime" type="datetime-local" />
          <DateTime label="My Time" type="time" />
          <button
            onClick={e => {
              e.preventDefault()
            }}
          >
            Check
          </button>
        </form>
        <div data-testid="ref-out">
          <ul>
            <li data-testid="textbox">TextBox: {formValues.textBox}</li>
            <li data-testid="checkbox">Checkbox: {formValues.checkBox}</li>
            <li data-testid="range">Range: {formValues.range}</li>
            <li data-testid="date">Date: {formValues.date}</li>
            <li data-testid="telephone">Telephone: {formValues.telephone}</li>
          </ul>
        </div>
      </div>
    )
  }
}

describe('The form components as a form', () => {
  afterEach(cleanup)
  it('should render properly', () => {
    const { container, getByLabelText, rerender } = render(<App />)
    const textBox = getByLabelText('My Label')

    expect(container.firstChild).toMatchSnapshot()

    fireEvent.change(textBox, { target: { value: 'Changed Value' } })
    expect(container.firstChild).toMatchSnapshot()
    rerender(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
