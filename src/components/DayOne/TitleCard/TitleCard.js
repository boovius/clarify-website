import React from 'react';
import RoundButton from '../../RoundButton'
import { primaryColor, secondaryColor } from '../DayOne.styles'
import { Link } from 'react-router-dom'


const TitleCard = ({match}) => (
  <div className='title-card'>
    <p>Day 1</p>
    <h2>Begin with the End</h2>
    <Link to='2'>
      <RoundButton
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >start</RoundButton>
    </Link>
  </div>
)

export default TitleCard;
