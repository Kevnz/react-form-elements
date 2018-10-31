import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Range from '../range'

describe('Range component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(<Range label="My Range Label" />)

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Range Label')
      expect(label.textContent).toBe('My Range Label')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <Range label="My Label" initialValue="23" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      expect(input.value).toBe('23')
    })
    it('should update a value when changed in', () => {
      const { getByLabelText, container } = render(
        <Range label="My Label" initialValue="23" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      fireEvent.change(input, { target: { value: 43 } })
      expect(input.value).toBe('43')
    })
  })
})
