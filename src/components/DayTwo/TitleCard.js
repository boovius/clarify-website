import React from 'react';
import Container from '../Container'
import DelayedFadeInSet from '../DelayedFadeInSet'
import RoundButton from '../RoundButton'
import { primaryColor, secondaryColor } from './DayTwo.styles'
import { Link } from 'react-router-dom'


const TitleCard = ({match}) => (
  <Container>
    <div className='title-card'>
      <DelayedFadeInSet index={0} transition='message' timeout={500}>
        <p>Level Two</p>
        <h2>Unlocking Possibility</h2>
        <Link to='2'>
          <RoundButton
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          >start</RoundButton>
        </Link>
      </DelayedFadeInSet>
    </div>
  </Container>
)

export default TitleCard;
