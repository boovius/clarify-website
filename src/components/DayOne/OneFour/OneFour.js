import React from 'react'
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const OneFour = () => (
  <div className='one-four'>
    <p>A sense of direction to a life of our highest fulfillment,</p>
    <p>requires a connection to your deepest and most core values.</p>
    <div>
      <Link to='5'>
        <FontAwesomeIcon className='down-arrow' icon="angle-double-down" />
      </Link>
    </div>
  </div>
)

export default OneFour;
