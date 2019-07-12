import React, { useState } from 'react'
import Highlight from '../utils/highlighter'
import {
  Button,
  EmailInput,
  Form,
  Password,
  Telephone,
  TextArea,
  TextBox,
  UrlInput,
} from '../../../src'

const InputsForm = () => {
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
      <Password
        name="password"
        label="Password Input"
        initialValue=""
      />
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
              console.info('Name', values.userName)
              console.info('Password', values.password)
              console.info('Email', values.userEmail)
              console.info('Message', values.message)
              console.info('URL', values.webAddress)
              console.info('Telephone', values.telephoneNumber)
              setData({ formValues: values })
            }}
          >
            <TextBox name="name" label="TextBox" initialValue="" />
            <Password name="password" label="Password Input" initialValue="" />
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
          <Highlight>{codeString}</Highlight>
        </div>
      </section>
    </main>
  )
}

export default InputsForm
