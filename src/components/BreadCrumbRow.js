import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { secondaryColor } from './DayOne/DayOne.styles'
import { css as glamor } from 'glamor'
import Footprints from '../assets/icons/footprints'
import Lighthouse from '../assets/icons/lighthouse'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


const Circle = styled.div`
  border-radius: 30px;
  background-color: ${secondaryColor};
  opacity: 0.4;
  height: 10px;
  width: 10px;
`
const pathStyles = glamor({
  fill: 'white',
  transition: 'opacity .25s linear'
})

const hoverStyles = glamor({
  opacity: .4,
  transition: 'opacity .25s linear'
})

const PastBreadCrumbs = ({startingIndex, index}) => {
  let breadcrumbs = []
  for (let i = 0; i < index - startingIndex; i++) {
    breadcrumbs.push(<Footprints key={i} pathStyles={hoverStyles} hoverStyles='' size={40}/>)
  }
  return breadcrumbs
}

const breadCrumbLinkStyles =  glamor({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  ':hover': {
    opacity: 1
  }
})

let bounce = glamor.keyframes({ 
  '0%': { transform: 'scale(1)', opacity: 1 },
  '60%': { transform: 'scale(.8)', opacity: .4},
  '100%': { transform: 'scale(1)', opacity: 1}
})

const arrowStyles =  glamor({
  marginLeft: '0.5em',
  animation: `${bounce} 2s infinite`,
})

const PresentBreadCrumb = ({index}) => (
  <Link to={`${parseInt(index, 10)+1}`} className={breadCrumbLinkStyles} >
    <Footprints pathStyles={pathStyles} hoverStyles={hoverStyles} size={40}/>
    <FontAwesomeIcon {...arrowStyles} size='2x' icon='arrow-circle-right' />
  </Link>
)

const FutureBreadCrumbs = ({length, startingIndex, index}) => {
  let breadcrumbs = []
  const futureCrumbLength = startingIndex + length - index - 1
  for (let i = 0; i < futureCrumbLength; i++) {
    i === futureCrumbLength - 1 ?
    breadcrumbs.push(<Lighthouse key={i} />) :
    breadcrumbs.push(<div key={i}/>)
  }
  return breadcrumbs
}

const breadCrumbRowStyles = glamor({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

const BreadCrumbRow = (props) => (
  <div className={`${breadCrumbRowStyles} ${props.styleRule}`}>
    <PastBreadCrumbs {...props} />
    <PresentBreadCrumb {...props} />
    <FutureBreadCrumbs {...props} />
  </div>
)

export default BreadCrumbRow
