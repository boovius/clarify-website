import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../Container/Container'
import { primaryColor, secondaryColor } from '../DayOne.styles'
import RoundButton from '../../RoundButton'
import SpanLeadingSpace from '../../SpanLeadingSpace'
import DelayedWord from '../../DelayedWord'


const OneTwo = () => (
  <div className='one-two'>
    <Link to='3'>
      <RoundButton
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >the mission</RoundButton>
    </Link>
    <SpanLeadingSpace>
      <DelayedWord word="..."/>
    </SpanLeadingSpace>
  </div>
)

export default OneTwo
