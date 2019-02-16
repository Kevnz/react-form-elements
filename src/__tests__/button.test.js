import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Button from '../button'

describe('TextBox component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { container } = render(<Button>Save</Button>)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
  describe('handling event', () => {
    it('should set a value when passed in', () => {
      const mockHandler = jest.fn()
      const { container } = render(<Button onClick={mockHandler}>Save</Button>)
      expect(mockHandler.mock.calls.length).toBe(0)
      fireEvent.click(container.firstChild)
      expect(mockHandler.mock.calls.length).toBe(1)
    })
  })
})
