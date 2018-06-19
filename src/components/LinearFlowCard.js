import React from 'react'
import Container from './Container'
import DelayedFadeIn from './DelayedFadeIn'
import BreadCrumbRow from './BreadCrumbRow'
import { css as glamor } from 'glamor'

const cardFlowStyles = glamor({
  position: 'absolute',
  height: '100%',
  width: '100%',
})

const breadCrumbStyleRule = glamor({
  position: 'absolute',
  width: '50%',
  bottom: '100px',
})

const fadeInElements = (elements) => {
  return (elements.map((element,i) =>
    <DelayedFadeIn key={i} transition='message' index={i} timeout={500}>
      {element}
    </DelayedFadeIn>
  ))
}

const fadeInBreadCrumbRow = (length, index, startingIndex, delayIndex) => (
  <DelayedFadeIn transition='message' index={delayIndex} timeout={500}>
    <BreadCrumbRow
      styleRule={breadCrumbStyleRule}
      length={length}
      startingIndex={startingIndex}
      index={index}
    />
  </DelayedFadeIn>
)

const LinearFlowCard = ({length, day, startingIndex, index, elements, phase, styles}) => (
  <div className={`${cardFlowStyles} ${styles[phase]}`}>
    <Container>
      {fadeInElements(elements)}
      {fadeInBreadCrumbRow(length, index, startingIndex, elements.length)}
    </Container>
  </div>
)

export default LinearFlowCard;
