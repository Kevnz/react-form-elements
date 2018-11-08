# ReactFormElements

Simplify form and input element management.


## Demo & Examples

Live demo: [kevinisom.info/react-form-elements](http://kevinisom.info/react-form-elements/)

## Installation

The easiest way to use react-form-elements is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-form-elements.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```bash
npm install react-form-elements --save
```


## Usage

```js
import React, { useState } from 'react'

import {
  TextBox,
  Checkbox,
  Range,
  DateTime,
  Telephone,
  DropDown,
  Option,
  OptionGroup,
  Radio,
  Form,
} from 'react-form-elements'

const App = () => {
  const [values, setValues] = useState({})

  return (
    <div>
      <h1>React Form Elements</h1>
      <Form
        name="testForm"
        onSubmit={data => {
          // data[form element name]
          setValues(data)
          // do something with values
        }}
      >
        <TextBox label="My Label" name="myTextBox" />
        <Checkbox
          label="My Checkbox"
          initialValue="The True"
          checked={false}
          name="myCheckBox"
        />
        <Radio label="My Radio" name="myRadio" checked={false} />
        <DateTime label="My Date" name="myDate" />
        <Range label="My Range" name="myRange" />
        <Telephone label="Telephone" name="myTelephone" />
        <DateTime label="My DateTime" type="datetime" name="myDateTime" />
        <DateTime label="My Month" type="month" name="myMonth" />
        <DateTime label="My Week" type="week" name="myWeek" />
        <DateTime
          label="My DateTime"
          type="datetime-local"
          name="myDateTimeLocal"
        />
        <DateTime label="My Time" type="time" name="myTime" />
        <DropDown
          label="My Drop Down"
          initialValue="2"
          data-testid="dd1"
          name="myDropDown"
        >
          <OptionGroup label="First Group">
            <Option initialValue="1">First</Option>
            <Option initialValue="2">Second</Option>
            <Option initialValue="3" label="Third" />
          </OptionGroup>
          <OptionGroup label="Second Group">
            <Option initialValue="11">Second First</Option>
            <Option initialValue="12">Second Second</Option>
            <Option initialValue="13" label="Second Third" />
          </OptionGroup>
          <OptionGroup label="Third Group">
            <Option initialValue="21">Third First</Option>
            <Option initialValue="22">Third Second</Option>
            <Option initialValue="23" label="Third Third" />
          </OptionGroup>
        </DropDown>
        <button onClick={e => {}}>Save</button>
      </Form>
      <div data-testid="ref-out">
        <ul>
          <li>TextBox: {values.myTextBox}</li>
          <li>Checkbox: {values.myCheckBox}</li>
          <li>Range: {values.myRange}</li>
          <li>Date: {values.myDate}</li>
          <li>DateTime: {values.myDateTime}</li>
          <li>DateMonth: {values.myMonth}</li>
          <li>DateWeek: {values.myWeek}</li>
          <li>DateTimeLocal: {values.myDateTimeLocal}</li>
          <li>DropDown: {values.myDropDown}</li>
        </ul>
      </div>
    </div>
  )
}

export default App

```

### Properties

* TextBox
* DropDown
* Option
* OptionGroup
* Range
* CheckBox
* Telephone
* Date
* DateTime
* Month
* Week
* Form


### Notes

__Still in Development__

## Demo & Examples local

To build the examples locally, run:

```bash
npm install
npm start
```

Then open [`localhost:8080`](http://localhost:8080) in a browser.

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>


Copyright (c) 2015 Kevin Isom.

