import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Checkbox from '../checkbox'

describe('Checkbox component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <Checkbox label="My Checkbox Label" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Checkbox Label')
      expect(label.textContent).toBe('My Checkbox Label')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <Checkbox label="My Label" isChecked={true} value="test value" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      expect(input.checked).toBe(true)
    })
    it('should update a value when changed in', () => {
      const { getByLabelText, container } = render(
        <Checkbox label="My Label" isChecked={false} value="updateval" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      fireEvent.change(input, { target: { value: 43 } })
      expect(input.value).toBe('43')
    })
  })
})
