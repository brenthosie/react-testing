import React from 'react'
import PropTypes from 'prop-types'

const buttonStyles = { border: '1px solid black' }

const ToggleButton = props => (
  <button
    style={buttonStyles}
    disabled={props.disabled}
    onClick={props.disabled ? null : props.onClick}
  >
    {`I am ${props.isToggled ? '' : 'not'} toggled`}
  </button>
)

ToggleButton.propTypes = {
  disabled: PropTypes.bool,
  isToggled: PropTypes.bool,
  onClick: PropTypes.func
}

export default ToggleButton
