import React from 'react'
import { render, cleanup } from 'react-testing-library'

import { Telephone } from '../'

describe('Telephone component', () => {
  afterEach(() => {
    cleanup()
  })

  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <Telephone label="My Telephone Label" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Telephone Label')
      expect(label.textContent).toBe('My Telephone Label')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <Telephone label="My Label" initialValue="0800121212" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      expect(input.value).toBe('0800121212')
    })
  })
})
