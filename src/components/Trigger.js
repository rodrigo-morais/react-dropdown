import React, { PropTypes } from 'react'

function Trigger({ text }) {
  return (
    <a>{text}</a>
  )
}

Trigger.propTypes = {
  text: PropTypes.string.isRequired
}

export default Trigger
