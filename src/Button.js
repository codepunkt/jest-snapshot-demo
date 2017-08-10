import React from 'react'

export default ({ pressed, text }) => {
  const className = pressed
    ? 'button--pressed'
    : 'button'

  return (
    <button className={className}>
      {text}
    </button>
  )
}
