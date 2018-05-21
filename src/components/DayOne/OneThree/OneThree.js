import React from 'react'
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { primaryColor, secondaryColor } from '../DayOne.styles'
import RoundButton from '../../RoundButton'
import SpanLeadingSpace from '../../SpanLeadingSpace'

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
    <div>
      <Link to='4'>
        <FontAwesomeIcon className='down-arrow' icon="angle-double-down" />
      </Link>
    </div>
  </div>
)

export default OneThree
