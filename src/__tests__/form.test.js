import React, { createRef, useRef, useState } from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import ReactDOMServer from 'react-dom/server'
import {
  Button,
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

expect.extend(toHaveNoViolations)

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
    </Form>
  )
}
const SingleItem = ({ onSubmit }) => {
  return (
    <Form
      name="testForm"
      onSubmit={e => {
        onSubmit(e)
      }}
    >
      <TextBox label="My Label" name="myTextBox" />
      <Button>Save</Button>
    </Form>
  )
}

const SingleTextBox = ({ onSubmit, formRef }) => {
  return (
    <Form
      ref={formRef}
      name="testForm"
      onSubmit={e => {
        onSubmit(e)
      }}
    >
      <TextBox label="My Label" name="myTextBox" />
    </Form>
  )
}
const ClearOnSubmit = ({ onSubmit }) => {
  const [mess, setMess] = useState('')
  const ref = useRef()
  return (
    <>
      <div>{mess}</div>
      <Form
        ref={ref}
        name="testForm"
        onSubmit={e => {
          onSubmit(e)
          setMess(e.myTextBox + ' set')

          ref.current.reset()
        }}
      >
        <TextBox label="My Label" name="myTextBox" />
        <Button>Save</Button>
      </Form>
    </>
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
  it('should not have a11y violations', async () => {
    const html = ReactDOMServer.renderToString(<App onSubmit={() => {}} />)
    const results = await axe(html)
    expect(results).toHaveNoViolations()
  })

  it('should render and Submit one single item', () => {
    const CHANGED_TEXTBOX = 'Changed Value'
    const { container, getByLabelText, getByText } = render(
      <SingleItem
        onSubmit={e => {
          expect(e).toMatchSnapshot()
          expect(e.myTextBox).toBe(CHANGED_TEXTBOX)
        }}
      />
    )
    const textBox = getByLabelText('My Label')
    const button = getByText('Save')
    expect(container.firstChild).toMatchSnapshot()

    fireEvent.change(textBox, { target: { value: CHANGED_TEXTBOX } })

    fireEvent.keyPress(textBox, { key: 'Enter', code: 13 })
    fireEvent.keyDown(textBox, { key: 'Enter', code: 13 })
    fireEvent.keyUp(textBox, { key: 'Enter', code: 13 })
    fireEvent.click(button)
  })
  it('should reset the form', async () => {
    const CHANGED_TEXTBOX = 'Changed Value To Reset'
    const { container, getByLabelText, getByText, findByText } = render(
      <ClearOnSubmit
        onSubmit={e => {
          expect(e).toMatchSnapshot()
          expect(e.myTextBox).toBe(CHANGED_TEXTBOX)
        }}
      />
    )
    const textBox = getByLabelText('My Label')
    const button = getByText('Save')
    expect(container.firstChild).toMatchSnapshot()

    fireEvent.change(textBox, { target: { value: CHANGED_TEXTBOX } })

    fireEvent.click(button)
    await findByText(/Changed Value To Reset set/)

    expect(textBox.value).toBe('')
  })
  it('should render and Submit one single text box', () => {
    const CHANGED_TEXTBOX = 'Changed Value'
    const formRef = createRef(null)
    const { container, getByLabelText } = render(
      <SingleTextBox
        formRef={formRef}
        onSubmit={e => {
          expect(e).toMatchSnapshot()
          expect(e.myTextBox).toBe(CHANGED_TEXTBOX)
        }}
      />
    )
    const textBox = getByLabelText('My Label')

    expect(container.firstChild).toMatchSnapshot()

    fireEvent.change(textBox, { target: { value: CHANGED_TEXTBOX } })

    fireEvent.keyPress(textBox, { key: 'Enter', code: 13 })
    fireEvent.keyDown(textBox, { key: 'Enter', code: 13 })
    fireEvent.keyUp(textBox, { key: 'Enter', code: 13 })
    formRef.current.submit()
  })
})
