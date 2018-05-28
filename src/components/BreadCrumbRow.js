import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { primaryColor, secondaryColor } from './DayOne/DayOne.styles'
import { css as glamor } from 'glamor'
import { darken } from 'polished'
import footprints from '../assets/icons/footprints-horizontal.svg'
import lighthouse from '../assets/icons/lighthouse.svg'


const Circle = styled.div`
  border-radius: 30px;
  background-color: ${secondaryColor};
  opacity: 0.4;
  height: 10px;
  width: 10px;

  ${ props => props.filled && css`
    background-color: ${secondaryColor};
    opacity: 1;
  `}

  ${ props => props.link && css`
    height: 20px;
    width: 20px;
    cursor: pointer;

    &:hover {
      background-color: ${darken(0.1, secondaryColor)};
    }
  `}
`

const PastBreadCrumbs = ({startingIndex, index}) => {
  let breadcrumbs = []
  for (let i = 0; i < index - startingIndex; i++) {
    breadcrumbs.push(<Circle key={i} />)
  }
  return breadcrumbs
}

const footprintStyle = glamor({
  height: '30px',
  width: '30px'
})

const PresentBreadCrumb = ({index}) => (
  <Link to={`${parseInt(index)+1}`}>
    <img className={footprintStyle} src={footprints} />
  </Link>
)

const FutureBreadCrumbs = ({length, startingIndex, index}) => {
  let breadcrumbs = []
  const futureCrumbLength = startingIndex + length - index - 1
  for (let i = 0; i < futureCrumbLength; i++) {
    i == futureCrumbLength - 1 ?
    breadcrumbs.push(<img key={i} className={footprintStyle} src={lighthouse} />) :
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
