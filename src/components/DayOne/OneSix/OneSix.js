import React from 'react'
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const OneSix = () => (
  <div className='one-six'>
    <p>What really matters to me?</p>
    <p>What matters most?</p>
    <div>
      <Link to='7'>
        <FontAwesomeIcon className='down-arrow' icon="angle-double-down" />
      </Link>
    </div>
  </div>
)

export default OneSix;
