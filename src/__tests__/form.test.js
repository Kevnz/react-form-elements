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
  Radio,
  Form,
} from '../index'

const App = ({ onSubmit }) => {
  return (
    <Form
      name="testForm"
      onSubmit={e => {
        onSubmit(e)
      }}
    >
      <TextBox label="My Label" name="myTextBox" />
      <Checkbox
        label="My Checkbox"
        initialValue="The True"
        checked={false}
        name="myCheckBox"
      />
      <Radio label="My Radio" name="myRadio" checked={false} />
      <DateTime label="My Date" name="myDate" />
      <Range label="My Range" name="myRange" />
      <Telephone label="Telephone" name="myTelephone" />
      <DateTime label="My DateTime" type="datetime" name="myDateTime" />
      <DateTime label="My Month" type="month" name="myMonth" />
      <DateTime label="My Week" type="week" name="myWeek" />
      <DateTime
        label="My DateTime"
        type="datetime-local"
        name="myDateTimeLocal"
      />
      <DateTime label="My Time" type="time" name="myTime" />
      <DropDown
        label="My Drop Down"
        initialValue="2"
        data-testid="dd1"
        name="myDropDown"
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
      <button>Save</button>
    </Form>
  )
}

describe('The form components as a form', () => {
  afterEach(cleanup)
  it('should render and change accordingly', () => {
    const CHANGED_TEXTBOX = 'Changed Value'
    const { container, getByLabelText, getByTestId, getByText } = render(
      <App
        onSubmit={e => {
          expect(e.myTextBox).toBe(CHANGED_TEXTBOX)
          expect(e.myDropDown).toBe('22')
        }}
      />
    )
    const textBox = getByLabelText('My Label')
    const dd = getByTestId('dd1')
    const button = getByText('Save')
    expect(container.firstChild).toMatchSnapshot()
    const dropDownValue = dd.value
    expect(dropDownValue).toBe('2')
    fireEvent.change(textBox, { target: { value: CHANGED_TEXTBOX } })
    fireEvent.change(dd, { target: { value: '22' } })
    fireEvent.click(button)
  })
})
