import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Checkbox from '../checkbox'

const LABEL = 'My Checkbox Label'
describe('Checkbox component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(<Checkbox label={LABEL} />)

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText(LABEL)
      expect(label.textContent).toBe(LABEL)
    })
  })
  it('should have checked attribute', () => {
    const { getByLabelText, container } = render(
      <Checkbox label={LABEL} name="TheName" checked />
    )

    expect(container.firstChild).toMatchSnapshot()
    const check = getByLabelText(LABEL)
    expect(check.checked).toBe(true)
  })
  it('should not have checked attribute', () => {
    const { getByLabelText, container } = render(
      <Checkbox label={LABEL} name="TheName" />
    )

    expect(container.firstChild).toMatchSnapshot()
    const check = getByLabelText(LABEL)
    expect(check).toMatchSnapshot()
    expect(check.checked).toBe(false)
  })
})
describe('handling input', () => {
  it('should set a value when passed in', () => {
    const { getByLabelText, container } = render(
      <Checkbox label="My Label" initialValue="The Value" checked />
    )

    expect(container.firstChild).toMatchSnapshot()
    const input = getByLabelText('My Label')
    expect(input.checked).toBe(true)
  })
  it('should update a value when changed in', () => {
    const { getByLabelText, container } = render(
      <Checkbox label="My Label" initialValue="The Value" />
    )

    expect(container.firstChild).toMatchSnapshot()
    const input = getByLabelText('My Label')
    fireEvent.change(input, { target: { value: 43 } })
    expect(input.value).toBe('43')
  })
})
