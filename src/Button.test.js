import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

const def = { text: 'Press me!' }

describe('<Button />', () => {
  it('matches snapshot when pressed', () => {
    expect(
      shallow(
        <Button {...def} pressed={true} />
      )
    ).toMatchSnapshot()
  })

  it('matches snapshot when not pressed', () => {
    expect(
      shallow(
        <Button {...def} pressed={false} />
      )
    ).toMatchSnapshot()
  })
})
