import React, { createRef, useRef } from 'react'
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
  useFormElement,
  useForm,
} from 'react-form-elements'
let renderCount = 0
const App = () => {
  const ref = useRef()
  const formRef = useRef()
  const { id, value, handleChange, inputRef } = useFormElement('', ref)
  const { addToForm, onSubmit } = useForm('sample')
  renderCount++

  return (
    <div>
      <h1>React Form Elements</h1>
      <h2>Renders - {renderCount}</h2>
      <form
        onSubmit={onSubmit(data => {
          console.info('onsubmit handler', data)
        })}
      >
        <fieldset>
          <legend>Form Hook</legend>
          <TextBox
            label="My Label"
            name="tbox"
            placeholder="The Placeholder"
            ref={addToForm}
          />
          <input
            name="firstName"
            type="text"
            ref={addToForm}
            defaultValue="Kevin"
          />
          <input
            name="lastName"
            type="text"
            ref={addToForm}
            defaultValue="Isom"
          />
          <br />
          <select ref={addToForm} name="dropdown" defaultValue="13">
            <optgroup label="First Group">
              <option value="1">First</option>
              <option value="2">Second</option>
              <option value="3">Third</option>
            </optgroup>
            <optgroup label="Second Group">
              <option value="11">Second First</option>
              <option value="12">Second Second</option>
              <option value="13">Second Third</option>
            </optgroup>
            <optgroup label="Third Group">
              <option value="21">Third First</option>
              <option value="22">Third Second</option>
              <option value="23">Third Third</option>
            </optgroup>
          </select>
          <br />
          <input type="checkbox" name="check" defaultChecked ref={addToForm} />
          <br />
          <div>
            <label>The Radio</label>
            <div>
              <label> First </label>
              <input name="rgroup" type="radio" value="first" ref={addToForm} />
            </div>
            <div>
              <label> Second </label>
              <input
                name="rgroup"
                type="radio"
                value="second"
                ref={addToForm}
              />
            </div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <hr />
      <Form
        ref={formRef}
        name="WorkingForm"
        onSubmit={e => {
          console.info('form data', e)
        }}
      >
        <Fieldset legend="The Form">
          <input
            id={id}
            name="hookedInput"
            type="text"
            value={value}
            onChange={handleChange}
            ref={inputRef}
          />
          <TextBox label="My Label" name="tbox" placeholder="The Placeholder" />
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
          <Button
            onClick={e => {
              e.preventDefault()
              console.info('The button was clicked', formRef)
              formRef.current.reset()
            }}
          >
            Cancel
          </Button>
        </Fieldset>
      </Form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
