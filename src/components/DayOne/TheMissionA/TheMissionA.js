import React from 'react'
import { Link } from "react-router-dom";
import { primaryColor, secondaryColor } from '../DayOne.styles'
import RoundButton from '../../RoundButton'
import SpanLeadingSpace from '../../SpanLeadingSpace'
import DelayedWord from '../../DelayedWord'


const TheMissionA = () => (
  <div className='one-two'>
    <RoundButton
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      disabled
    >the mission</RoundButton>
    <SpanLeadingSpace>
      <DelayedWord word="..."/>
    </SpanLeadingSpace>
  </div>
)

export default TheMissionA
