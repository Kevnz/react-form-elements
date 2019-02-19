import React, { useState, createRef } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'
import { Button, Form, useFormElement } from '../../../src'
import ErrorBoundry from '../utils/boundry'

const HookedForm = () => {
  const [data, setData] = useState(null)
  const codeString = `
  import React, { createRef } from 'react'
  import {
    useFormElement,
    Button,
    Form,
  } from 'react-form-elements'

  export default () => {
    const ref = createRef()
    const { id, value, handleChange, inputRef } = useFormElement('', ref)
    return (<Form
        name="sampleForm"
        onSubmit={values => {
          sendData({ formValues: values })
        }}
      >
        <input
          id={id}
          name="hookedInput"
          type="text"
          value={value}
          onChange={handleChange}
          ref={inputRef}
        />
        <Button>Submit</Button>
      </Form>)
    }
  `
  const ref = createRef()
  const { id, value, handleChange, inputRef } = useFormElement('', ref)
  return (
    <ErrorBoundry>
      <main>
        {data && (
          <section>
            <h2 className="mar-b-md mar-t-md">Submitted Data</h2>
            <ul>
              <li>Hook: {data.formValues.hookedInput}</li>
            </ul>
          </section>
        )}
        <section>
          <h2 className="mar-b-md mar-t-md">Hook</h2>
          <div>
            <Form
              name="contactForm"
              onSubmit={values => {
                console.info('From Hooked Input', values.hookedInput)
                setData({ formValues: values })
              }}
            >
              {' '}
              <label htmlFor={id}>
                <h4>Custom Hook Input</h4>
              </label>
              <input
                id={id}
                name="hookedInput"
                type="text"
                value={value}
                onChange={handleChange}
                ref={inputRef}
              />
              <Button>Submit</Button>
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
    </ErrorBoundry>
  )
}

export default HookedForm
