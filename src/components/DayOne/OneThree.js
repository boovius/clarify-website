import React from 'react'
import { Link } from "react-router-dom";
import { primaryColor, secondaryColor } from '../DayOne.styles'
import RoundButton from '../../RoundButton'

const OneThree = () => (
  <div className='one-three'>
    <Link to='3'>
      <RoundButton
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        disabled
      >our mission</RoundButton>
    </Link>
    <span>take a directed first step towards a life of our highest fulfillment.</span>
  </div>
)

export default OneThree
