import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import ColorInput from '../color-input'

describe('ColorInput component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <ColorInput label="My ColorInput Label" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My ColorInput Label')
      expect(label.textContent).toBe('My ColorInput Label')
    })
  })
  describe('handling input', () => {
    it('should set the value to `#000000` when passed non color input', () => {
      const { getByLabelText, container } = render(
        <ColorInput label="My Color Value" initialValue="#0668fa" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Color Value')
      expect(input.value).toBe('#0668fa')
      fireEvent.change(input, { target: { value: 'blue' } })
      expect(input.value).toBe('#000000')
    })
  })
})
