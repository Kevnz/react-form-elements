import React from 'react'
import { Router } from '@reach/router'
import Home from './examples/home'

const ContactForm = React.lazy(() => import('./examples/contact'))
const TextInputs = React.lazy(() => import('./examples/inputs'))
const AttributesForm = React.lazy(() => import('./examples/attributes-form'))
const SelectorsForm = React.lazy(() => import('./examples/selectors'))
const Others = React.lazy(() => import('./examples/others'))
const Styling = React.lazy(() => import('./examples/styling'))
export default () => {
  return (
    <Router>
      <Home path="/" />
      <Styling path="/styling" />
      <TextInputs path="/inputs" />
      <ContactForm path="/contact" />
      <AttributesForm path="/attributes" />
      <SelectorsForm path="/selectors" />
      <Others path="/others" />
    </Router>
  )
}
