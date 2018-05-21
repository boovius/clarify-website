import React from 'react'
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const OneFive = () => (
  <div className='one-five'>
    <p>It requires that we ask ourselves hard questions.</p>
    <div>
      <Link to='6'>
        <FontAwesomeIcon className='down-arrow' icon="angle-double-down" />
      </Link>
    </div>
  </div>
)

export default OneFive;
