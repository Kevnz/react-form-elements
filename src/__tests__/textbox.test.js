import React from 'react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { render, fireEvent, cleanup } from '@testing-library/react'
import ReactDOMServer from 'react-dom/server'
import TextBox from '../textbox'

expect.extend(toHaveNoViolations)

describe('TextBox component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', async () => {
      const { getByText, container } = render(
        <TextBox label="My Label" initialValue="" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Label')
      expect(label.textContent).toBe('My Label')
    })
    it('should not violate', async () => {
      const html = ReactDOMServer.renderToString(
        <TextBox label="My Label" initialValue="" />
      )
      const results = await axe(html)
      expect(results).toHaveNoViolations()
    })
    it('should have a placeholder when passed', () => {
      const { getByText, container } = render(
        <TextBox
          label="My Label"
          initialValue=""
          placeholder="textbox placeholder"
        />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Label')
      expect(label.textContent).toBe('My Label')
    })
    it('should have a no label when passed an empty string as label', () => {
      const { container } = render(
        <TextBox label="" initialValue="" placeholder="textbox placeholder" />
      )
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  describe('handling input', () => {
    it('should set a value when passed in', () => {
      const { getByLabelText, container } = render(
        <TextBox label="My Label" initialValue="My Input Value" />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = getByLabelText('My Label')
      expect(input.value).toBe('My Input Value')
    })
    it('should update a value when changed', () => {
      const { getByLabelText, container } = render(
        <TextBox label="My Label" initialValue="My Input Value" />
      )
      const input = getByLabelText('My Label')

      fireEvent.change(input, { target: { value: 'Updated Value' } })
      expect(input.value).toBe('Updated Value')
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
