import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { primaryColor, secondaryColor } from './DayOne/DayOne.styles'
import { css as glamor } from 'glamor'
import { darken } from 'polished'


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

const PastBreadCrumbs = ({index}) => {
  let breadcrumbs = []
  for (let i = 0; i < index - 1; i++) {
    breadcrumbs.push(<Circle filled={true} />)
  }
  return breadcrumbs
}

const PresentBreadCrumb = ({index}) => (
  <Link to={`${parseInt(index)+1}`}>
    <Circle link={true} filled={true}/>
  </Link>
)

const FutureBreadCrumbs = ({length, index}) => {
  let breadcrumbs = []
  for (let i = 0; i < length - index + 1; i++) {
    breadcrumbs.push(<Circle filled={false} />)
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
