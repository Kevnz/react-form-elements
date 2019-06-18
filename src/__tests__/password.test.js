import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import Password from '../password'

describe('Password component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const labelText = 'My Password Label'
      const { getByText, getByLabelText, container } = render(
        <Password label={labelText} />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText(labelText)
      const input = getByLabelText(labelText)
      expect(label.textContent).toBe(labelText)
      expect(input.type).toBe('password')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in but not be valid', () => {
      const { getByLabelText, container } = render(
        <Password label="My Example Label" initialValue="password" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Example Label')
      expect(input.value).toBe('password')
      expect(input.validity.valid).toBe(true)
      fireEvent.change(input, { target: { value: 'Updated Value' } })
      expect(input.validity.valid).toBe(true)
    })
  })
})
