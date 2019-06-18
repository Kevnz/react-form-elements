import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import RadioGroup from '../radio-group'

describe('Radio component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <RadioGroup
          name="mygroup"
          label="The Radio"
          initialChecked="first"
          options={[
            { value: 'first', label: 'First' },
            { value: 'second', label: 'Second' },
          ]}
        />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('First')
      expect(label.textContent.trim()).toBe('First')
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <RadioGroup
          name="mygroup"
          label="The Radio"
          initialChecked="first"
          options={[
            { value: 'first', label: 'First' },
            { value: 'second', label: 'Second' },
          ]}
        />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('First')
      expect(input.checked).toBe(true)
    })
    it('should update a value when changed in', () => {
      const { getByLabelText, container } = render(
        <RadioGroup
          name="mygroup"
          label="The Radio"
          initialChecked="first"
          options={[
            { value: 'first', label: 'First' },
            { value: 'second', label: 'Second' },
          ]}
        />
      )

      expect(container.firstChild).toMatchSnapshot()
      const hidden = container.querySelector('input[type="hidden"]')
      expect(hidden.value).toBe('first') // implementation detail, bad expect
      const input = getByLabelText('Second')
      expect(input.checked).toBe(false)
      fireEvent.click(input)
      expect(input.value).toBe('second')
      expect(input.checked).toBe(true)

      expect(hidden.value).toBe('second') // implementation detail, bad expect
    })
  })
})
