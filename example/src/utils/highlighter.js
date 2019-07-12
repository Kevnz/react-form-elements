import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export default class Highlight extends Component {
  render() {
    const { children, ...props } = this.props
    return (
      <SyntaxHighlighter
        language="jsx"
        style={prism}
        showLineNumbers={false}
        wrapLines={true}
      >
        {children}
      </SyntaxHighlighter>
    )
  }
}
