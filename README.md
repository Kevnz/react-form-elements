# ReactFormElements

Simplify form element management.


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
import React, { Component, createRef } from 'react'
import { TextBox, Checkbox, Range, DateTime, Telephone, DropDown, Option, OptionGroup } from 'react-form-elements'

export default class App extends Component {
  constructor(props) {
    const references = {
      modal: createRef(),
      shim: createRef(),
      textBox: createRef(),
      checkBox: createRef(),
      range: createRef(),
      date: createRef(),
      telephone: createRef(),
      dropdown: createRef()

    }
    super(props)
    this.references = references
  }

  render() {
    return (
      <div>
        <h2>Example Code</h2>
        <SyntaxHighlighter language="jsx" style={darcula}>
          {codeString}
        </SyntaxHighlighter>
        <form>
          <TextBox label="My Label" ref={this.references.textBox} />
          <Checkbox
            label="My Checkbox"
            ref={this.references.checkBox}
            initialValue={true}
          />
          <DateTime label="My Date" ref={this.references.date} />
          <Range label="My Range" ref={this.references.range} />
          <Telephone label="Telephone" ref={this.references.telephone} />
          <DropDown
            label="My Drop Down"
            initialValue="2"
            ref={this.references.dropdown}
          >
            <OptionGroup label="First Group">
              <Option initialValue="1">First</Option>
              <Option initialValue="2">Second</Option>
              <Option initialValue="3" label="Third" />
            </OptionGroup>
          </DropDown>
          <button
            onClick={e => {
              e.preventDefault()
              // this.references.textBox.current.getValue()
            }}
          >
            Check
          </button>
        </form>
      </div>
    )
  }
}
```

### Properties

* TextBox
* DropDown
* Option
* OptionGroup
* Range
* CheckBox
* Telephone


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

