import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import UrlInput from '../url-input'

describe('UrlInput component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <UrlInput label="My UrlInput Label" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My UrlInput Label')
      expect(label.textContent).toBe('My UrlInput Label')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in but not be valid', () => {
      const { getByLabelText, container } = render(
        <UrlInput
          label="My Example URL"
          initialValue="http://www.example.com"
        />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Example URL')
      expect(input.value).toBe('http://www.example.com')
      expect(input.validity.valid).toBe(true)
      fireEvent.change(input, { target: { value: 'Updated Value' } })
      expect(input.validity.valid).toBe(false)
    })
  })
})
