import React, { PropTypes } from 'react'

function Trigger({ text = 'Select' }) {
  return (
    <a>{ text || 'Select' }</a>
  )
}

Trigger.propTypes = {
  text: PropTypes.string.isRequired
}

export default Trigger
