import { expect } from 'chai'
import React from 'react'
import Trigger from 'src/components/Trigger'
import { shallow } from 'enzyme'

describe('Trigger Component', () => {
  const text = 'Select'
  const props = { text }
  const trigger = shallow(<Trigger {...props} />)

  it('renders a text', () => {
    expect(trigger.props().children).to.be.equal(text)
  })
})
