import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'
import {
  Button,
  EmailInput,
  Form,
  Telephone,
  TextArea,
  TextBox,
  UrlInput,
} from '../../../src'

const InputsForm = () => {
  console.log('InputsForm')
  const [data, setData] = useState(null)
  const codeString = `
  import React, { Component, createRef } from 'react'
  import {
    Button,
    Form,
    TextBox,
  } from 'react-form-elements'

  export default () =>
    (<Form
      onSubmit={values => {
        console.log('formValues', values)
      }}
    >
      <TextBox name="name" label="TextBox" initialValue="" />
      <EmailInput
        name="emailAddress"
        label="Email Input"
        initialValue=""
      />
      <UrlInput name="webAddress" label="UrlInput" initialValue="" />
      <Telephone
        name="telephoneNumber"
        label="Telephone Number"
        initialValue=""
      />
      <TextArea label="TextArea" name="message" />
      <Button>Submit</Button>
    </Form>)
  `

  return (
    <main>
      {data && (
        <section>
          <h2 className="mar-b-md mar-t-md">Submitted Data</h2>
          <ul>
            <li>TextBox: {data.formValues.userName}</li>
            <li>EmailInput: {data.formValues.userEmail}</li>
            <li>UrlInput: {data.formValues.webAddress}</li>
            <li>Telephone: {data.formValues.telephoneNumber}</li>
            <li>TextArea: {data.formValues.message}</li>
          </ul>
        </section>
      )}
      <section>
        <h2 className="mar-b-md mar-t-md">Text Inputs</h2>
        <div>
          <Form
            name="inputsForm"
            onSubmit={values => {
              console.log('Name', values.userName)
              console.log('Email', values.userEmail)
              console.log('Message', values.message)
              console.log('URL', values.webAddress)
              console.log('Telephone', values.telephoneNumber)
              setData({ formValues: values })
            }}
          >
            <TextBox name="name" label="TextBox" initialValue="" />
            <EmailInput
              name="emailAddress"
              label="Email Input"
              initialValue=""
            />
            <UrlInput name="webAddress" label="UrlInput" initialValue="" />
            <Telephone
              name="telephoneNumber"
              label="Telephone Number"
              initialValue=""
            />
            <TextArea label="TextArea" name="message" />

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

export default InputsForm
