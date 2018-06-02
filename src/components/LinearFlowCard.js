import React from 'react'
import Container from './Container'
import DelayedFadeIn from './DelayedFadeIn'
import BreadCrumbRow from './BreadCrumbRow'
import { css as glamor } from 'glamor'

const breadCrumbStyleRule = glamor({
  position: 'absolute',
  width: '50%',
  bottom: '100px',
})

const fadeInMessages = (messages) => (messages.map((message,i) =>
  <DelayedFadeIn key={i} transition='message' index={i} timeout={500}>
    <p>{message}</p>
  </DelayedFadeIn>
))

const fadeInBreadCrumbRow = (length, index, startingIndex, messages) => (
  <DelayedFadeIn transition='message' index={messages.length} timeout={500}>
    <BreadCrumbRow
      styleRule={breadCrumbStyleRule}
      length={length}
      startingIndex={startingIndex}
      index={index}
    />
  </DelayedFadeIn>
)

const LinearFlowCard = ({length, day, startingIndex, index, messages, phase}) => (
  <div className={`card-flow ${day}-${index} ${phase}`}>
    <Container>
      {fadeInMessages(messages)}
      {fadeInBreadCrumbRow(length, index, startingIndex, messages)}
    </Container>
  </div>
)

export default LinearFlowCard;
