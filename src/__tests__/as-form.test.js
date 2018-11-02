import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import {
  TextBox,
  Checkbox,
  Range,
  DateTime,
  Telephone,
  DropDown,
  Option,
  OptionGroup,
} from '../index'

class App extends React.Component {
  constructor(props) {
    const references = {
      textBox: React.createRef(),
      checkBox: React.createRef(),
      range: React.createRef(),
      date: React.createRef(),
      telephone: React.createRef(),
      dropdown: React.createRef(),
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
        dropdown: '',
      }
    return {
      textBox: this.references.textBox.current.getValue(),
      checkBox: this.references.checkBox.current.getValue(),
      range: this.references.range.current.getValue(),
      date: this.references.date.current.getValue(),
      telephone: this.references.telephone.current.getValue(),
      dropdown: this.references.dropdown.current.getValue(),
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
          <DropDown
            label="My Drop Down"
            initialValue="2"
            data-testid="dd1"
            ref={this.references.dropdown}
          >
            <OptionGroup label="First Group">
              <Option initialValue="1">First</Option>
              <Option initialValue="2">Second</Option>
              <Option initialValue="3" label="Third" />
            </OptionGroup>
            <OptionGroup label="Second Group">
              <Option initialValue="11">Second First</Option>
              <Option initialValue="12">Second Second</Option>
              <Option initialValue="13" label="Second Third" />
            </OptionGroup>
            <OptionGroup label="Third Group">
              <Option initialValue="21">Third First</Option>
              <Option initialValue="22">Third Second</Option>
              <Option initialValue="23" label="Third Third" />
            </OptionGroup>
          </DropDown>
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
    const { container, getByLabelText, getByTestId, rerender } = render(<App />)
    const textBox = getByLabelText('My Label')
    const dd = getByTestId('dd1')
    expect(container.firstChild).toMatchSnapshot()
    const dropDownValue = dd.value
    expect(dropDownValue).toBe('2')
    fireEvent.change(textBox, { target: { value: 'Changed Value' } })
    fireEvent.change(dd, { target: { value: '22' } })
    const changedDropDownValue = dd.value
    expect(changedDropDownValue).toBe('22')
    rerender(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
