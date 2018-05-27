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
      >the mission</RoundButton>
    <SpanLeadingSpace>to take a directed first step</SpanLeadingSpace>
    <p>towards a life</p>
    <p>that lights us up.</p>
    <DownArrowLink next='4' />
  </div>
)

export default OneThree
