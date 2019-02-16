import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {
  Button,
  Checkbox,
  ColorInput,
  DateTime,
  DropDown,
  EmailInput,
  Fieldset,
  Form,
  Option,
  OptionGroup,
  RadioGroup,
  Range,
  Telephone,
  TextBox,
  UrlInput,
} from 'react-form-elements'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Form Elements</h1>
        <Form
          name="WorkingForm"
          onSubmit={e => {
            console.info('form data', e)
          }}
        >
          <Fieldset legend="The Form">
            <TextBox
              label="My Label"
              name="tbox"
              placeholder="The Placeholder"
            />
            <Checkbox
              label="My Checkbox"
              isChecked={true}
              name="check"
              value="checkpoint"
            />
            <DateTime label="My Date" name="date" />
            <Range label="My Range" name="range" />
            <Telephone label="Telephone" name="tele" />
            <DateTime label="My DateTime" type="datetime" name="dtime" />
            <DateTime label="My Month" type="month" />
            <DateTime label="My Week" type="week" />
            <DateTime label="My DateTime" type="datetime-local" />
            <DateTime label="My Time" type="time" />
          </Fieldset>
          <Fieldset legend="The Form 2">
            <DropDown label="Drop Down" initialValue="2">
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
              name="rgroup"
              label="The Radio"
              initialChecked="first"
              options={[
                { value: 'first', label: 'First' },
                { value: 'second', label: 'Second' },
              ]}
            />
            <ColorInput
              label="Color"
              name="color"
              initialValue="#0668fa"
              required
            />
            <UrlInput name="dontcallmeearl" label="URL" />
            <EmailInput
              name="emailbox"
              label="Email"
              initialValue="nospam@example.com"
            />
            <Button
              onClick={e => {
                console.info('The button was clicked')
              }}
            >
              Check
            </Button>
          </Fieldset>
        </Form>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
