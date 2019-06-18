import React from 'react'
import { render, cleanup } from '@testing-library/react'

import DateTime from '../datetime'
const types = [
  'date',
  'datetime',
  'month',
  'week',
  'time',
  'datetime',
  'datetime-local',
]
describe('DateTime component', () => {
  afterEach(() => {
    cleanup()
  })

  describe.each(types)('The Rendered HTML', dateType => {
    it('should have a label', () => {
      const { container } = render(
        <DateTime
          label={`My DateTime Label for ${dateType}`}
          initialValue=""
          type={dateType}
        />
      )

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
