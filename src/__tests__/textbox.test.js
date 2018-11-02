import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import TextBox from '../textbox'

describe('TextBox component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <TextBox label="My Label" initialValue="" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Label')
      expect(label.textContent).toBe('My Label')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <TextBox label="My Label" initialValue="My Input Value" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      expect(input.value).toBe('My Input Value')
    })
    it('should update a value when changed', () => {
      const { getByLabelText, container } = render(
        <TextBox label="My Label" initialValue="My Input Value" />
      )
      const input = getByLabelText('My Label')

      fireEvent.change(input, { target: { value: 'Updated Value' } })
      expect(input.value).toBe('Updated Value')
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
