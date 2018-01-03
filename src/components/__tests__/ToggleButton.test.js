import React from 'react'
import ToggleButton from '../ToggleButton'
import { shallow } from 'enzyme'

// // this is an example of how to skip a test:
// it('The button should be disabled the button when disabled is passed as true')

test('When isToggled is false, the button label says "I am not toggled"', () => {
  const wrapper = shallow(<ToggleButton isToggled={false} />)
  expect(wrapper.text()).toBe("I am not toggled")
})

test('When isToggled is true, the button label says "I am toggled"', () => {
  const wrapper = shallow(<ToggleButton isToggled={true} />)
  expect(wrapper.text()).toBe("I am toggled")
})

test('The button should be disabled the button when disabled is passed as true', () => {
  const wrapper = shallow(<ToggleButton disabled={true} />)
  expect(wrapper.prop('disabled')).toBe(true)
})

test('When ToggleButton is not disabled, clicking the button fires onClick', () => {
  const onClick = jest.fn()
  const wrapper = shallow(<ToggleButton onClick={onClick} />)
  wrapper.simulate('click')

  expect(onClick).toHaveBeenCalled()
})

test('When ToggleButton is disabled, clicking the button does not fire onClick', () => {
  const onClick = jest.fn()
  const wrapper = shallow(<ToggleButton disabled={true} onClick={onClick} />)
  wrapper.simulate('click')

  expect(onClick).not.toHaveBeenCalled()
})
