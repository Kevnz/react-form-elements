import React, { useState } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'
import { Button, Form, Meter, Progress } from '../../../src'

const OtherElementsForm = () => {
  const [data, setData] = useState(null)
  const codeString = `
  import React, { Component, createRef } from 'react'
  import {
    Form,
    Meter,
    Progress,
  } from 'react-form-elements'

  export default () =>
    (<Form>
      <Meter
        label="Meter"
        name="meter"
        initialValue={30}
        min={10}
        max={50}
        low={15}
        high={40}
        optimum={30}
      />
      <Progress
        initialValue={35}
        label="Progress Bar"
        name="progressBar"
      />
    </Form>)
  `
  return (
    <main>
      {data && (
        <section>
          <h2 className="mar-b-md mar-t-md">Submitted Data</h2>
          <ul>
            <li>Meter: {data.formValues.meter}</li>
            <li>High Meter: {data.formValues.highMeter}</li>
            <li>Low Meter: {data.formValues.lowMeter}</li>
          </ul>
        </section>
      )}
      <section>
        <h2 className="mar-b-md mar-t-md">Other Elements</h2>
        <div>
          <Form
            name="inputsForm"
            onSubmit={values => {
              setData({ formValues: values })
            }}
          >
            <Meter
              label="Meter"
              name="meter"
              initialValue={30}
              min={10}
              max={50}
              low={15}
              high={40}
              optimum={30}
            />
            <Meter
              label="High Meter"
              name="highMeter"
              initialValue={41}
              min={10}
              max={50}
              low={15}
              high={40}
              optimum={30}
            />
            <Meter
              label="Low Meter"
              name="lowMeter"
              initialValue={12}
              min={10}
              max={50}
              low={15}
              high={40}
              optimum={30}
            />
            <Progress
              initialValue={35}
              label="Progress Bar"
              name="progressBar"
            />
            <Button>Check</Button>
          </Form>
          <div className="pad-t-md">
            <ul>
              <li>
                <a
                  href="https://css-tricks.com/html5-meter-element/"
                  target="blank"
                >
                  For information styling a the Meter element{' '}
                </a>
              </li>
              <li>
                <a
                  href="https://css-tricks.com/html5-progress-element/"
                  target="blank"
                >
                  For information styling a the Progress element{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className="mar-b-md mar-t-md">
            <h3 className="mar-b-md">Code from Example</h3>
            <SyntaxHighlighter language="jsx" style={tomorrow}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OtherElementsForm
