import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import { TextArea } from '../'

describe('TextBox component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, getByLabelText, container } = render(
        <TextArea label="My Label" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Label', { exact: false })
      const tArea = getByLabelText('My Label', { exact: false })
      expect(label.textContent).toBe('My Label')
      expect(tArea.value).toBe('')
    })
    it('should support children', () => {
      const { getByText, getByLabelText, container } = render(
        <TextArea label="My Label">This is my value</TextArea>
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Label', { exact: false })
      const tArea = getByLabelText('My Label', { exact: false })
      expect(label.textContent).toContain('My Label')
      expect(tArea.value).toBe('This is my value')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <TextArea label="My Label" initialValue="My Input Value" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label', { exact: false })
      expect(input.value).toBe('My Input Value')
    })
    it('should update a value when changed', () => {
      const { getByLabelText, container } = render(
        <TextArea label="My Label">This is my value</TextArea>
      )
      const tArea = getByLabelText('My Label', { exact: false })
      fireEvent.change(tArea, { target: { value: 'Updated Value' } })
      expect(tArea.value).toBe('Updated Value')
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
