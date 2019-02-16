import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'
import { Form, TextArea, TextBox, EmailInput } from '../../../src'

const ContactForm = () => {
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
      name="contactForm"
      onSubmit={values => {
        console.log('Name', values.name)
        console.log('Email', values.emailAddress)
        console.log('Message', values.message)
        sendData({ formValues: values })
      }}
    >
      <TextBox name="name" label="Your Name" initialValue="" />
      <EmailInput
        name="emailAddress"
        label="Your Email"
        initialValue=""
      />
      <TextArea label="Your Message" name="message" />
      <Button>Send</Button>
    </Form>)
  `
  return (
    <main>
      {data && (
        <section>
          <h2 className="mar-b-md mar-t-md">Submitted Data</h2>
          <ul>
            <li>Name: {data.formValues.name}</li>
            <li>Email: {data.formValues.emailAddress}</li>
            <li>Message: {data.formValues.message}</li>
          </ul>
        </section>
      )}
      <section>
        <h2 className="mar-b-md mar-t-md">Contact</h2>
        <div>
          <Form
            name="contactForm"
            onSubmit={values => {
              console.log('Name', values.name)
              console.log('Email', values.emailAddress)
              console.log('Message', values.message)
              setData({ formValues: values })
            }}
          >
            <TextBox name="name" label="Your Name" initialValue="" />
            <EmailInput
              name="emailAddress"
              label="Your Email"
              initialValue=""
            />
            <TextArea label="Your Message" name="message" />

            <button>Send</button>
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

export default ContactForm