import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {
  TextBox,
  Checkbox,
  Range,
  DateTime,
  Telephone,
  DropDown,
  Option,
  OptionGroup,
} from '../src'

const ref = React.createRef()
const checkRef = React.createRef()
const rangeRef = React.createRef()
const dateRef = React.createRef()
const telephoneRef = React.createRef()
const dropDownRef = React.createRef()
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Form Elements</h1>
        <TextBox label="My Label" ref={ref} />
        <Checkbox label="My Checkbox" ref={checkRef} initialValue={true} />
        <DateTime label="My Date" ref={dateRef} />
        <Range label="My Range" ref={rangeRef} />
        <Telephone label="Telephone" ref={telephoneRef} />
        <DateTime label="My DateTime" type="datetime" />
        <DateTime label="My Month" type="month" />
        <DateTime label="My Week" type="week" />
        <DateTime label="My DateTime" type="datetime-local" />
        <DateTime label="My Time" type="time" />
        <DropDown label="Drop Down" initialValue="2" ref={dropDownRef}>
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
            console.log('click')
            e.preventDefault()
            console.log('text box', ref.current.getValue())
            console.log('c box', checkRef.current.getValue())
            console.log('range', rangeRef.current.getValue())
            console.log('DropDown', dropDownRef.current.getValue())
          }}
        >
          Check
        </button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
