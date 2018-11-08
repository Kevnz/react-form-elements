import React, { useRef, useState } from 'react'

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
} from '../src'

const App = () => {
  const [values, setValues] = useState({})

  return (
    <div>
      <h1>React Form Elements</h1>
      <Form
        name="testForm"
        onSubmit={e => {
          setValues(e)
          // do something with values
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
        <button onClick={e => {}}>Save</button>
      </Form>
      <div data-testid="ref-out">
        <ul>
          <li>TextBox: {values.myTextBox}</li>
          <li>Checkbox: {values.myCheckBox}</li>
          <li>Range: {values.myRange}</li>
          <li>Date: {values.myDate}</li>
          <li>DateTime: {values.myDateTime}</li>
          <li>DateMonth: {values.myMonth}</li>
          <li>DateWeek: {values.myWeek}</li>
          <li>DateTimeLocal: {values.myDateTimeLocal}</li>
          <li>DropDown: {values.myDropDown}</li>
        </ul>
      </div>
    </div>
  )
}

export default App
