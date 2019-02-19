import React, { useState } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'
import {
  Button,
  CheckBox,
  DropDown,
  Form,
  OptionGroup,
  Option,
  RadioGroup,
  ColorInput,
  Range,
} from '../../../src'

const SelectorsForm = () => {
  const [data, setData] = useState(null)
  const codeString = `
  import React, { Component, createRef } from 'react'
  import {
    Form,
    Meter,
    Progress,
  } from 'react-form-elements'

  export default () =>
    (<Form>
      <DropDown name="dropdown" label="Drop Down" initialValue="2">
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
      </DropDown>
      <RadioGroup
        name="radioGroup"
        label="The Radio"
        initialChecked="first"
        options={[
          { value: 'first', label: 'First' },
          { value: 'second', label: 'Second' },
        ]}
      />
      <CheckBox
        label="A Checkbox"
        isChecked={true}
        name="checkbox"
        value="checkbox value"
      />
      <ColorInput
        label="Color"
        name="color"
        initialValue="#0668fa"
        required
      />
      <Range
        label="My Range"
        name="range"
        min={0}
        max={50}
        step={2}
        initialValue={24}
      />
    </Form>)
  `
  return (
    <main>
      {data && (
        <section>
          <h2 className="mar-b-md mar-t-md">Submitted Data</h2>
          <ul>
            <li>DropDown: {data.formValues.dropdown}</li>
            <li>RadioGroup: {data.formValues.radioGroup}</li>
            <li>CheckBox: {data.formValues.checkbox}</li>
            <li>Color: {data.formValues.color}</li>
            <li>Range: {data.formValues.range}</li>
          </ul>
        </section>
      )}
      <section>
        <h2 className="mar-b-md mar-t-md">Text Inputs</h2>
        <div>
          <Form
            name="inputsForm"
            onSubmit={values => {
              console.info('DropDown', values.dropdown)
              console.info('RadioGroup', values.radioGroup)
              console.info('CheckBox', values.checkbox)
              console.info('Color', values.color)
              console.info('Range', values.range)
              setData({ formValues: values })
            }}
          >
            <DropDown name="dropdown" label="Drop Down" initialValue="2">
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

            <RadioGroup
              name="radioGroup"
              label="The Radio"
              initialChecked="first"
              options={[
                { value: 'first', label: 'First' },
                { value: 'second', label: 'Second' },
              ]}
            />
            <CheckBox
              label="A Checkbox"
              isChecked={true}
              name="checkbox"
              value="checkbox value"
            />
            <ColorInput
              label="Color"
              name="color"
              initialValue="#0668fa"
              required
            />
            <Range
              label="My Range"
              name="range"
              min={0}
              max={50}
              step={2}
              initialValue={24}
            />
            <Button>Send</Button>
          </Form>
        </div>
        <div className="mar-b-md mar-t-md">
          <h3 className="mar-b-md">Code from Example</h3>
          <SyntaxHighlighter language="jsx" style={tomorrow}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </section>
    </main>
  )
}

export default SelectorsForm
