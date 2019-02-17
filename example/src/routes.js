import React from 'react'
import { Router } from '@reach/router'
import Home from './examples/home'

const ContactForm = React.lazy(() => import('./examples/contact'))
const TextInputs = React.lazy(() => import('./examples/inputs'))
const AttributesForm = React.lazy(() => import('./examples/attributes-form'))
const SelectorsForm = React.lazy(() => import('./examples/selectors'))
const Others = React.lazy(() => import('./examples/others'))
const Styling = React.lazy(() => import('./examples/styling'))
const Hooks = React.lazy(() => import('./examples/hook'))
export default () => {
  return (
    <Router>
      <Home path="react-form-elements/" />
      <Styling path="react-form-elements/styling" />
      <TextInputs path="react-form-elements/inputs" />
      <ContactForm path="react-form-elements/contact" />
      <AttributesForm path="react-form-elements/attributes" />
      <SelectorsForm path="react-form-elements/selectors" />
      <Others path="react-form-elements/others" />
      <Hooks path="react-form-elements/hook" />
    </Router>
  )
}
