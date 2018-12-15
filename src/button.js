import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { children, ...props } = this.props
    return <button {...props}>{children}</button>
  }
}
Button.displayName = 'ReactFormElements(Button)'
