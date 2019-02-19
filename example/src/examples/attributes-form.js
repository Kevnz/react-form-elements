import React, { useState } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
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

const AttributesForm = () => {
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
      name="attributesForm"
      onSubmit={values => {}}
    >
    <TextBox name="name" label="TextBox" initialValue="" required />
    <EmailInput
      name="emailAddress"
      label="Email Input"
      initialValue=""
    />
    <UrlInput
      name="webAddress"
      label="UrlInput"
      initialValue=""
      placeholder="https://www.example.com"
      required
    />
    <Telephone
      name="telephoneNumber"
      label="Telephone Number"
      initialValue=""
    />
    <TextArea label="TextArea" name="message" />
    <Button>Send</Button>
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
        <h2 className="mar-b-md mar-t-md">Native Attributes</h2>
        <div>
          <Form
            name="inputsForm"
            onSubmit={values => {
              console.info('Name', values.userName)
              console.info('Email', values.userEmail)
              console.info('Message', values.message)
              console.info('URL', values.webAddress)
              console.info('Telephone', values.telephoneNumber)
              setData({ formValues: values })
            }}
          >
            <TextBox name="name" label="TextBox" initialValue="" required />
            <EmailInput
              name="emailAddress"
              label="Email Input"
              initialValue=""
            />
            <UrlInput
              name="webAddress"
              label="UrlInput"
              initialValue=""
              placeholder="https://www.example.com"
              required
            />
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
          <SyntaxHighlighter language="jsx" style={tomorrow}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </section>
    </main>
  )
}

export default AttributesForm
