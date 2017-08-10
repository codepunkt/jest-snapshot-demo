import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('<Button />', () => {
  it('matches previous snapshot', () => {
    const ary = [
      <Button pressed={true} />,
      <Button pressed={false} />,
      <Button text="Press me!" />,
    ]

    ary.forEach(elem =>
      expect(shallow(elem)).toMatchSnapshot()
    )
  })
})
