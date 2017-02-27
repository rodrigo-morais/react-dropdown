import { expect } from 'chai'
import React from 'react'
import Trigger from 'src/components/Trigger'
import { shallow } from 'enzyme'

describe('Trigger Component', () => {
  const text = 'Select Something'
  const props = { text }
  let trigger

  context('when text is informed', () => {
    beforeEach(() => {
      trigger = shallow(<Trigger {...props} />)
    })

    it('renders a text', () => {
      expect(trigger.props().children).to.be.equal(text)
    })
  })

  context('when text is not informed', () => {
    beforeEach(() => {
      trigger = shallow(<Trigger />)
    })

    it('renders a default text when the text is not informed', () => {
      const defaultText = 'Select'

      expect(trigger.props().children).to.be.equal(defaultText)
    })
  })

  context('when text is undefined', () => {
    const defaultText = 'Select'

    it('renders a default text when the text is undefined', () => {
      const undefinedText = undefined

      trigger = shallow(<Trigger text={undefinedText} />)

      expect(trigger.props().children).to.be.equal(defaultText)
    })

    it('renders a default text when the text is null', () => {
      const nullText = null

      trigger = shallow(<Trigger text={nullText} />)

      expect(trigger.props().children).to.be.equal(defaultText)
    })
  })
})
