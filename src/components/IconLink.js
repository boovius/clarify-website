import React from 'react'
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const IconLink = ({next, icon}) => (
  <Link to={next}>
    <FontAwesomeIcon className={icon} icon={icon} />
  </Link>
)
export default IconLink
//"angle-double-down"
