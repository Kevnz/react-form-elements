import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import EmailInput from '../email-input'

describe('EmailInput component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <EmailInput label="My EmailInput Label" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My EmailInput Label')
      expect(label.textContent).toBe('My EmailInput Label')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in but not be valid', () => {
      const { getByLabelText, container } = render(
        <EmailInput label="My Example Email" initialValue="name@example.com" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Example Email')
      expect(input.value).toBe('name@example.com')
      expect(input.validity.valid).toBe(true)
      fireEvent.change(input, { target: { value: 'Updated Value' } })
      expect(input.validity.valid).toBe(false)
    })
  })
})
