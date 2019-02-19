import React from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'
const StylingInfo = () => {
  const formMarkup = `<form
    class="rfe-form"
    name="testForm"
  >
  ...
  </form>`

  const textBox = `<div class="rfe-form__row ">
    <label for="id-3-1">
      My Label
    </label>
    <input
      id="id-3-1"
      name="TextBox"
      type="text"
      value="My Input Value"
    />
  </div>`

  const radio = `<div class="rfe-form__row rfe-radiogroup">
  <label>The Radio</label>
  <div class="rfe-radiogroup__row">
    <label  for="id-1-1"> irst</label>
    <input
      checked=""
      id="id-1-1"
      name="mygroup"
      type="radio"
      value="first"
    />
  </div>
  <div class="rfe-radiogroup__row">
    <label for="id-2-1">Second</label>
    <input
      id="id-2-1"
      name="mygroup"
      type="radio"
      value="second"
    />
  </div>
  <input
    type="hidden"
    value="first"
  />
</div>
`
  return (
    <main>
      <section>
        <h2 className="mar-b-md mar-t-md">Styling</h2>
        <div className=" mar-t-md">
          The form elements do not contain any styles applied. However they do
          have certain class names applied that you can use to style.
        </div>
        <div className=" mar-t-md">
          <h3 className="mar-b-md mar-t-md">The Form Element</h3>
          The form element renders just a form tag with the class{' '}
          <strong>"rfe-form"</strong>
          applied.
        </div>
        <div className="mar-b-md mar-t-md">
          <h3 className="mar-b-md">Form Markup</h3>
          <SyntaxHighlighter language="jsx" style={tomorrow}>
            {formMarkup}
          </SyntaxHighlighter>
        </div>
        <hr />
        <div className=" mar-t-md">
          <h3 className="mar-b-md mar-t-md">The Text Inputs</h3>
          The text input element renders a div with the class
          <strong>"rfe-form__row"</strong>
          applied. Then a label element and an input element as a sibling to the
          label. If you are using a range element it also a span as a sibling to
          the label and input element.
        </div>
        <div className="mar-b-md mar-t-md">
          <h3 className="mar-b-md">TextBox Markup</h3>
          <SyntaxHighlighter language="jsx" style={tomorrow}>
            {textBox}
          </SyntaxHighlighter>
        </div>
        <hr />
        <div className=" mar-t-md">
          <h3 className="mar-b-md mar-t-md">The Radio Group</h3>
          The RadioGroup element renders a div with the class
          <strong>"rfe-form__row rfe-radiogroup"</strong>
          applied. Then a label element and <strong>N</strong> number of divs
          for the number of options passed. Each div has the
          <strong>"rfe-radiogroup__row"</strong> applied.
        </div>
        <div className="mar-b-md mar-t-md">
          <h3 className="mar-b-md">RadioGroup Markup</h3>
          <SyntaxHighlighter language="jsx" style={tomorrow}>
            {radio}
          </SyntaxHighlighter>
        </div>
      </section>
    </main>
  )
}

export default StylingInfo
