import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

// // this is an example of how to skip a test:
// it('When the App is rendered, isToggled begins as false')

test('When the App is rendered, isToggled begins as false', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state('isToggled')).toBe(false)
})

test('When the App is rendered, isButtonDisabled begins as false', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state('isButtonDisabled')).toBe(false)
})

test('When the ToggleButton is clicked and isToggled is false, isToggled becomes true', () => {
  const wrapper = shallow(<App />)
  wrapper.setState({ isToggled: false })
  const button = wrapper.findWhere(n => n.prop('data-test') === 'toggle-button')
  button.simulate('click')

  expect(wrapper.state('isToggled')).toBe(true)
})

test('When the ToggleButton is clicked and isToggled is true, isToggled becomes false', () => {
  const wrapper = shallow(<App />)
  wrapper.setState({ isToggled: true })
  const button = wrapper.findWhere(n => n.prop('data-test') === 'toggle-button')
  button.simulate('click')

  expect(wrapper.state('isToggled')).toBe(false)
})

test('When the checkbox is clicked and isButtonDisabled is false, isButtonDisabled becomes true', () => {
  const wrapper = shallow(<App />)
  wrapper.setState({ isButtonDisabled: false })
  expect(wrapper.state('isButtonDisabled')).toBe(false)

  const checkbox = wrapper.findWhere(n => n.prop('data-test') === 'toggle-disabled-checkbox')
  checkbox.simulate('change', { target: { checked: true } })

  expect(wrapper.state('isButtonDisabled')).toBe(true)
})

test('When the checkbox is clicked and isButtonDisabled is false, isButtonDisabled becomes true', () => {
  const wrapper = shallow(<App />)
  wrapper.setState({ isButtonDisabled: true })
  expect(wrapper.state('isButtonDisabled')).toBe(true)

  const checkbox = wrapper.findWhere(n => n.prop('data-test') === 'toggle-disabled-checkbox')
  checkbox.simulate('change', { target: { checked: false } })

  expect(wrapper.state('isButtonDisabled')).toBe(false)
})

test('The checkbox is driven by state.isButtonDisabled', () => {
  const wrapper = shallow(<App />)
  let checkbox

  checkbox = wrapper.findWhere(n => n.prop('data-test') === 'toggle-disabled-checkbox')
  expect(checkbox.prop('checked')).toBe(false)

  wrapper.setState({ isButtonDisabled: true })
  checkbox = wrapper.findWhere(n => n.prop('data-test') === 'toggle-disabled-checkbox')
  expect(checkbox.prop('checked')).toBe(true)
})
