import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Radio from '../radio'

const LABEL_TEXT = 'My Checkbox Label'
describe('Radio component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(<Radio label={LABEL_TEXT} />)

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText(LABEL_TEXT)
      expect(label.textContent).toBe(LABEL_TEXT)
    })
    it('should not be checked', () => {
      const { getByLabelText, container } = render(
        <Radio label={LABEL_TEXT} initialValue="The Value" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const check = getByLabelText(LABEL_TEXT)
      expect(check).toMatchSnapshot()
      expect(check.checked).toBe(false)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <Radio label={LABEL_TEXT} initialValue="The Value" checked />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText(LABEL_TEXT)
      expect(input.checked).toBe(true)
    })
    it('should update a value when changed in', () => {
      const { getByLabelText, container } = render(
        <Radio label={LABEL_TEXT} initialValue="The Value" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText(LABEL_TEXT)
      fireEvent.change(input, { target: { value: 43 } })
      expect(input.value).toBe('43')
    })
  })
})
