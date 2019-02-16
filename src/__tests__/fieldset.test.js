import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import {
  Button,
  TextBox,
  CheckBox,
  Range,
  DateTime,
  Telephone,
  DropDown,
  Option,
  OptionGroup,
  Radio,
  Form,
  Fieldset,
} from '../index'

const App = ({ onSubmit }) => {
  return (
    <Form
      name="testForm"
      onSubmit={e => {
        onSubmit(e)
      }}
    >
      <Fieldset legend="My Form">
        <TextBox label="My Label" name="myTextBox" />
        <CheckBox
          label="My Checkbox"
          value="checkbox value"
          isChecked={false}
          name="myCheckBox"
        />
        <Radio
          label="My Radio"
          name="myRadio"
          isChecked={false}
          value="myRadio1"
        />
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
        <Button>Save</Button>
      </Fieldset>
    </Form>
  )
}
const AppMulti = ({ onSubmit }) => {
  return (
    <Form
      name="testForm"
      onSubmit={e => {
        onSubmit(e)
      }}
    >
      <Fieldset legend="My Form">
        <TextBox label="My Label" name="myTextBox" />
        <CheckBox
          label="My Checkbox"
          value="checkbox value"
          isChecked={false}
          name="myCheckBox"
        />
        <Radio
          label="My Radio"
          name="myRadio"
          isChecked={false}
          value="myRadio1"
        />
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
      </Fieldset>
      <Fieldset legend="My Form part 2">
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
        <Button>Save</Button>
      </Fieldset>
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
          expect(e).toMatchSnapshot()
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
  it('should render the second', () => {
    const { container, getByText } = render(
      <AppMulti
        onSubmit={e => {
          expect(e).toMatchSnapshot()
        }}
      />
    )

    const button = getByText('Save')
    expect(container.firstChild).toMatchSnapshot()

    fireEvent.click(button)
  })
})
