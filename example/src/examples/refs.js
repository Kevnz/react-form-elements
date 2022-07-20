import React, { useState, useRef } from 'react'
import Highlight from '../utils/highlighter'
import {
  Form,
  TextArea,
  TextBox,
  EmailInput,
  Fieldset,
  Button,
} from '../../../src'

const ContactForm = () => {
  const [data, setData] = useState(null)
  const formRef = useRef(null)
  const codeString = `
  import React  from 'react'
  import {
    Button,
    EmailInput,
    Fieldset,
    Form,
    TextArea,
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
      <Fieldset legend="Contact Form">
        <TextBox name="name" label="Your Name" initialValue="" />
        <EmailInput
          name="emailAddress"
          label="Your Email"
          initialValue=""
        />
        <TextArea label="Your Message" name="message" />
        <Button>Send</Button>
      </Fieldset>
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
            ref={formRef}
            name="contactForm"
            onSubmit={values => {
              console.info('Name', values.name)
              console.info('Email', values.emailAddress)
              console.info('Message', values.message)
              setData({ formValues: values })
            }}
          >
            <TextBox name="name" label="Your Name" initialValue="" />
          </Form>
          <div>
            <a
              href="#"
              onClick={e => {
                e.preventDefault()
                console.log('form ref', formRef.current)
                formRef.current.submit()
              }}
            >
              Submit
            </a>
          </div>
        </div>
        <div className="mar-b-md mar-t-md">
          <h3 className="mar-b-md">Code from Example</h3>
          <Highlight>{codeString}</Highlight>
        </div>
      </section>
    </main>
  )
}

export default ContactForm
