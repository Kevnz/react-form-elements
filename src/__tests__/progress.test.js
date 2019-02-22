import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Progress from '../progress'

describe('Progress component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should have a label', () => {
      const { getByText, container } = render(
        <Progress label="My Progress Element" initialValue={50} />
      )

      expect(container.firstChild).toMatchSnapshot()
      const label = getByText('My Progress Element')
      expect(label.textContent).toBe('My Progress Element')
    })
  })
  describe('handling input', () => {
    it('should have a value set', () => {
      const { container } = render(
        <Progress label="My Example Progress" initialValue={20} max={100} />
      )

      expect(container.firstChild).toMatchSnapshot()
      const input = container.querySelector('progress')

      expect(input.getAttribute('value')).toBe('20')
    })
  })
})
