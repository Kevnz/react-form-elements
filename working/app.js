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
} from '../src'

const Form = ({ name, onSubmit, children }) => {
  console.log('childred', children)

  const mapped = children.map(child => {
    const dname = child.type ? child.type.displayName : false
    if (!dname) return child
    return Object.assign({}, child, { ref: useRef(null) })
  })
  console.log('RFE', mapped)
  console.log('childred', children)
  const formElements = mapped.map(fel => ({
    name: fel.props.name,
    ref: fel.ref,
  }))

  return (
    <form
      name={name}
      onSubmit={e => {
        console.log('formElements', formElements)
        const values = {}
        formElements.forEach(el => {
          if (!el.name) {
            return
          }
          values[el.name] = el.ref.current.getValue()
        })
        e.preventDefault()
        console.log('form values', values)
        onSubmit(values)
      }}
    >
      {' '}
      {mapped}
    </form>
  )
}

const App = () => {
  const references = {
    textBox: useRef(null),
    checkBox: useRef(null),
    range: useRef(null),
    date: useRef(null),
    datetime: useRef(null),
    month: useRef(null),
    week: useRef(null),
    datetimeLocal: useRef(null),
    time: useRef(null),
    telephone: useRef(null),
    dropdown: useRef(null),
    radio: useRef(null),
  }

  const [values, setValues] = useState({})

  return (
    <div>
      <h1>React Form Elements</h1>
      <Form
        name="testForm"
        onSubmit={e => {
          console.log('ON_SUBMIT', e)

          setValues(e)
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
        <button
          onClick={e => {
            console.log('form values', e)
            setValues(e)
          }}
        >
          Check
        </button>
      </Form>
      <div data-testid="ref-out">
        <ul>
          <li data-testid="textbox">TextBox: {values.myTextBox}</li>
          <li data-testid="checkbox">Checkbox: {values.myCheckBox}</li>
          <li data-testid="range">Range: {values.myRange}</li>
          <li data-testid="date">Date: {values.myDate}</li>
          <li data-testid="datetime">DateTime: {values.myDateTime}</li>
          <li data-testid="month">DateMonth: {values.myMonth}</li>
          <li data-testid="week">DateWeek: {values.myWeek}</li>
          <li data-testid="datetimeLocal">
            DateTimeLocal: {values.myDateTimeLocal}
          </li>
          <li data-testid="telephone">DropDown: {values.myDropDown}</li>
        </ul>
      </div>
    </div>
  )
}

export default App
