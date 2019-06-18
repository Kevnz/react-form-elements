import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import { DropDown, Option, OptionGroup } from '../'

describe('DropDown component', () => {
  afterEach(() => {
    cleanup()
  })
  describe('The Rendered HTML', () => {
    it('should render the full tree', () => {
      const { container } = render(
        <DropDown label="Drop Down" initialValue="2">
          <OptionGroup label="First Group">
            <Option initialValue="1">First</Option>
            <Option initialValue="2">Second</Option>
            <Option initialValue="3" label="Third" />
          </OptionGroup>
          <OptionGroup label="Second Group">
            <Option initialValue="11">Second First</Option>
            <Option initialValue="12">Second Second</Option>
            <Option initialValue="13" label="Second Third" />
          </OptionGroup>
          <OptionGroup label="Third Group">
            <Option initialValue="21">Third First</Option>
            <Option initialValue="22">Third Second</Option>
            <Option initialValue="23" label="Third Third" />
          </OptionGroup>
        </DropDown>
      )

      expect(container.firstChild).toMatchSnapshot()
    })

    it('should not need the OptionGroup', () => {
      const { container } = render(
        <DropDown label="Drop Down" initialValue="13">
          <Option initialValue="1">First</Option>
          <Option initialValue="2">Second</Option>
          <Option initialValue="3" label="Third" />
          <Option initialValue="11">Second First</Option>
          <Option initialValue="12">Second Second</Option>
          <Option initialValue="13" label="Second Third" />
          <Option initialValue="21">Third First</Option>
          <Option initialValue="22">Third Second</Option>
          <Option initialValue="23" label="Third Third" />
        </DropDown>
      )
      expect(container.firstChild).toMatchSnapshot()
    })
    it('should allow a mix of OptionGroups and Options', () => {
      const { container } = render(
        <DropDown label="Drop Down" initialValue="2" data-testid="dd1">
          <OptionGroup label="First Group">
            <Option initialValue="1">First</Option>
            <Option initialValue="2">Second</Option>
            <Option initialValue="3" label="Third" />
          </OptionGroup>
          <OptionGroup label="Second Group">
            <Option initialValue="11">Second First</Option>
            <Option initialValue="12">Second Second</Option>
            <Option initialValue="13" label="Second Third" />
          </OptionGroup>
          <Option initialValue="21">Third First</Option>
          <Option initialValue="22">Third Second</Option>
          <Option initialValue="23" label="Third Third" />
        </DropDown>
      )
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  describe('handling change', () => {
    it('should set a value when passed in', () => {
      const { getByTestId } = render(
        <DropDown label="Drop Down" initialValue="2" data-testid="dd1">
          <OptionGroup label="First Group">
            <Option initialValue="1">First</Option>
            <Option initialValue="2">Second</Option>
            <Option initialValue="3" label="Third" />
          </OptionGroup>
          <OptionGroup label="Second Group">
            <Option initialValue="11">Second First</Option>
            <Option initialValue="12">Second Second</Option>
            <Option initialValue="13" label="Second Third" />
          </OptionGroup>
          <OptionGroup label="Third Group">
            <Option initialValue="21">Third First</Option>
            <Option initialValue="22">Third Second</Option>
            <Option initialValue="23" label="Third Third" />
          </OptionGroup>
        </DropDown>
      )
      const select = getByTestId('dd1')
      expect(select.value).toBe('2')
      fireEvent.change(select, { target: { value: '13' } })
      expect(select.value).toBe('13')
    })

    it('should set a value when passed in', () => {
      const { getByTestId } = render(
        <DropDown label="Drop Down" initialValue="13" data-testid="dd1">
          <Option initialValue="1">First</Option>
          <Option initialValue="2">Second</Option>
          <Option initialValue="3" label="Third" />
          <Option initialValue="11">Second First</Option>
          <Option initialValue="12">Second Second</Option>
          <Option initialValue="13" label="Second Third" />
          <Option initialValue="21">Third First</Option>
          <Option initialValue="22">Third Second</Option>
          <Option initialValue="23" label="Third Third" />
        </DropDown>
      )
      const select = getByTestId('dd1')
      expect(select.value).toBe('13')
      fireEvent.change(select, { target: { value: '1' } })
      expect(select.value).toBe('1')
    })
  })
})
