import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

// // this is an example of how to skip a test:
// it('renders without crashing')

test('renders without crashing', () => {
  const div = document.createElement('div')

  expect(() => {
    ReactDOM.render(<App />, div)
  }).not.toThrow()
})
