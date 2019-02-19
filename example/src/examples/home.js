import React from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'

import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'
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
          <SyntaxHighlighter language="jsx" style={tomorrow}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </section>
    </main>
  )
}

export default Home
