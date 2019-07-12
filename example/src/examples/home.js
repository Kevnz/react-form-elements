import React from 'react'
import Highlight from '../utils/highlighter'
const Home = () => {
  const codeString = `
  import React, { Component, createRef } from 'react'
  import {
    Button,
    Form,
    TextBox,
  } from 'react-form-elements'

  export default () =>
    (<Form
      onSubmit={formData => {
        // formData.textBoxInput
      }}>
      <TextBox name="textBoxInput" label="TextBox" initialValue="" />
      <Button>Submit</Button>
    </Form>)
  `

  return (
    <main>
      <section>
        <div className="leader mar-t-md">
          A collection of components that make working with HTML forms easier.
        </div>
        <div className="mar-b-md mar-t-md">
          <h3 className="mar-b-md">Example</h3>
          <Highlight>{codeString}</Highlight>
        </div>
      </section>
    </main>
  )
}

export default Home
