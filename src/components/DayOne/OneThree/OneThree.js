import React from 'react'
import { primaryColor, secondaryColor } from '../DayOne.styles'
import RoundButton from '../../RoundButton'
import SpanLeadingSpace from '../../SpanLeadingSpace'
import DownArrowLink from '../../DownArrowLink'

const OneThree = () => (
  <div className='one-three'>
      <RoundButton
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        disabled
      >our mission</RoundButton>
    <SpanLeadingSpace>take a directed first step</SpanLeadingSpace>
    <p>towards a life</p>
    <p>of our highest fulfillment.</p>
    <DownArrowLink next='4' />
  </div>
)

export default OneThree
