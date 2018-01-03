import React, { Component } from 'react'
import ToggleButton from './components/ToggleButton'

class App extends Component {
  constructor (props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)

    this.state = {
      isToggled: false,
      isButtonDisabled: false
    }
  }

  handleToggle () {
    this.setState(prevState => {
      return {
        isToggled: !prevState.isToggled
      }
    })
  }

  render () {
    const { state } = this

    return (
      <div>
        <ToggleButton isToggled={state.isToggled} onClick={this.handleToggle} disabled={state.isButtonDisabled} data-test='toggle-button' />
        <div style={{ marginTop: 10 }}>
          <input type='checkbox' checked={state.isButtonDisabled} onChange={e => this.setState({ isButtonDisabled: e.target.checked })} data-test='toggle-disabled-checkbox' />
          Disable Button
        </div>
      </div>
    )
  }
}

export default App
