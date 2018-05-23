import React from 'react';
import DownArrowLink from '../../DownArrowLink'


const TitleCard = ({match}) => (
  <div className='title-card'>
    <p>Day 1</p>
    <h2>Begin with the End</h2>
    <DownArrowLink next='2' />
  </div>
)

export default TitleCard;
