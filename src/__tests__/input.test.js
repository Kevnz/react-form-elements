import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Input from '../input'

describe('Input component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should render input element', () => {
      const { container } = render(<Input initialValue="" />)

      expect(container.firstChild).toMatchSnapshot()
    })
    it('should have a placeholder when passed', () => {
      const { container } = render(
        <Input initialValue="" placeholder="textbox placeholder" />
      )

      expect(container.firstChild).toMatchSnapshot()
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { container } = render(<Input initialValue="My Input Value" />)

      expect(container.firstChild).toMatchSnapshot()
      const input = container.firstChild
      expect(input.value).toBe('My Input Value')
    })
    it('should update a value when changed', () => {
      const { container } = render(<Input initialValue="My Input Value" />)
      const input = container.firstChild

      fireEvent.change(input, { target: { value: 'Updated Value' } })
      expect(input.value).toBe('Updated Value')
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
