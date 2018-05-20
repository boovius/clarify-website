import React from 'react';
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const TitleCard = ({match}) => (
  <div className='title-card'>
    <p>Day 1</p>
    <h2>Begin with the End</h2>
    <Link to='2'>
      <FontAwesomeIcon className='down-arrow' icon="angle-double-down" />
    </Link>
  </div>
)

export default TitleCard;
