import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import TextBox from '../src/textbox'
import Checkbox from '../src/checkbox'
import Range from '../src/range'
import Date from '../src/date'
import Telephone from '../src/telephone'

const ref = React.createRef()
const checkRef = React.createRef()
const rangeRef = React.createRef()
const dateRef = React.createRef()
const telephoneRef = React.createRef()
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Form Elements</h1>
        <TextBox label="My Label" ref={ref} />
        <Checkbox label="My Checkbox" ref={checkRef} initialValue={true} />
        <Date label="My Date" ref={dateRef} />
        <Range label="My Range" ref={rangeRef} />
        <Telephone label="Telephone" ref={telephoneRef} />
        <Date label="My DateTime" type="datetime" />
        <Date label="My Month" type="month" />
        <Date label="My Week" type="week" />
        <Date label="My DateTime" type="datetime-local" />
        <Date label="My Time" type="time" />
        <button
          onClick={e => {
            console.log('click')
            e.preventDefault()
            console.log('text box', ref.current.getValue())
            console.log('c box', checkRef.current.getValue())
            console.log('range', rangeRef.current.getValue())
          }}
        >
          Check
        </button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
