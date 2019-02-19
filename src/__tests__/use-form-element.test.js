import React, { createRef } from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import useFormElement from '../utils/use-form-element'

describe('useFormElement hook', () => {
  afterEach(() => {
    cleanup()
  })

  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const val = 'My Input Value'
      const testId = 'test-hook-1'
      const TestInput = () => {
        const ref = createRef()
        const { value, handleChange, inputRef } = useFormElement(val, ref)

        return (
          <input
            data-testid={testId}
            name="hookedInput"
            type="text"
            value={value}
            onChange={handleChange}
            ref={inputRef}
          />
        )
      }

      const { getByTestId, container } = render(<TestInput />)

      expect(container.firstChild).toMatchSnapshot()
      const input = getByTestId(testId)
      expect(input.value).toBe(val)
    })
    it('should update a value when changed', () => {
      const val = 'My Input Value'
      const testId = 'test-hook-2'
      const TestInput = () => {
        const ref = createRef()
        const { id, value, handleChange, inputRef } = useFormElement(val, ref)

        return (
          <input
            data-testid={testId}
            name="hookedInput"
            type="text"
            value={value}
            onChange={handleChange}
            ref={inputRef}
          />
        )
      }
      const { getByTestId, container } = render(<TestInput />)
      const input = getByTestId(testId)

      fireEvent.change(input, { target: { value: 'Updated Value' } })
      expect(input.value).toBe('Updated Value')
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
