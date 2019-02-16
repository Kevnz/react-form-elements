import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Radio from '../radio'

describe('Radio component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <Radio label="My Checkbox Label" value="myradio" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Checkbox Label')
      expect(label.textContent).toBe('My Checkbox Label')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <Radio label="My Label" isChecked={true} value="myradio" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      expect(input.checked).toBe(true)
    })
    it('should update a value when changed in', () => {
      const { getByLabelText, container } = render(
        <Radio label="My Label" isChecked={false} value="myradio" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      expect(input.checked).toBe(false)
      fireEvent.click(input)
      expect(input.value).toBe('myradio')
      expect(input.checked).toBe(true)
    })
  })
})
