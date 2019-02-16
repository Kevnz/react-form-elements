import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Meter from '../meter'

describe('Meter component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <Meter label="My Meter Element" initialValue={50} />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Meter Element')
      expect(label.textContent).toBe('My Meter Element')
    })
  })
  describe('Element attributes', () => {
    it('should have a value set', () => {
      const { container } = render(
        <Meter label="My Example Meter" initialValue={50} max={80} />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = container.querySelector('meter')

      expect(input.getAttribute('value')).toBe('50')
      expect(input.getAttribute('max')).toBe('80')
    })
  })
})
