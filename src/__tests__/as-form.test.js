import React, { useRef, useEffect } from 'react'
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

const Form = ({ name, onSubmit, children }) => {
  return (
    <form name={name} onSubmit={onSubmit}>
      {' '}
      {children}
    </form>
  )
}

const App = () => {
  const references = {
    textBox: useRef(null),
    checkBox: useRef(null),
    range: useRef(null),
    date: useRef(null),
    telephone: useRef(null),
    dropdown: useRef(null),
  }

  const getFormValues = () => {
    if (references.textBox.current === null)
      return {
        textBox: '',
        checkBox: '',
        range: '',
        date: '',
        telephone: '',
        dropdown: '',
      }
    return {
      textBox: references.textBox.current.getValue(),
      checkBox: references.checkBox.current.getValue(),
      range: references.range.current.getValue(),
      date: references.date.current.getValue(),
      telephone: references.telephone.current.getValue(),
      dropdown: references.dropdown.current.getValue(),
    }
  }
  let formValues = getFormValues()

  useEffect(() => {
    // Update the document title using the browser API
    formValues = getFormValues()
  })

  return (
    <div>
      <h1>React Form Elements</h1>
      <Form
        name="testForm"
        onSubmit={e => {
          e.target.preventDefault()
        }}
      >
        <TextBox label="My Label" ref={references.textBox} />
        <Checkbox
          label="My Checkbox"
          ref={references.checkBox}
          initialValue="{true}"
        />
        <DateTime label="My Date" ref={references.date} />
        <Range label="My Range" ref={references.range} />
        <Telephone label="Telephone" ref={references.telephone} />
        <DateTime label="My DateTime" type="datetime" />
        <DateTime label="My Month" type="month" />
        <DateTime label="My Week" type="week" />
        <DateTime label="My DateTime" type="datetime-local" />
        <DateTime label="My Time" type="time" />
        <DropDown
          label="My Drop Down"
          initialValue="2"
          data-testid="dd1"
          ref={references.dropdown}
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
      </Form>
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

describe('The form components as a form', () => {
  afterEach(cleanup)
  it('should render and change accordingly', () => {
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
    expect(textBox.value).toBe('Changed Value')
    expect(container.firstChild).toMatchSnapshot()
  })
})
