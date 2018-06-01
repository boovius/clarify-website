import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Container from './Container'
import Delayed from 'react-delayed'
import BreadCrumbRow from './BreadCrumbRow'
import { css as glamor } from 'glamor'

const breadCrumbStyleRule = glamor({
  position: 'absolute',
  width: '50%',
  bottom: '100px',
})

const fadeInMessages = (messages) => (messages.map((message,i) =>
  <Delayed key={i} mounted={true} mountAfter={(i+1)*500}>
    <ReactCSSTransitionGroup
      transitionName='message'
      transitionAppearTimeout={500}
      transitionAppear={true}
      transitionEnter={false}
      transitionLeave={false}
    >
      <p>{message}</p>
    </ReactCSSTransitionGroup>
  </Delayed>
))

const fadeInBreadCrumbRow = (length, index, startingIndex, messages) => (
  <Delayed mounted={true} mountAfter={(messages.length + 1) * 500}>
    <ReactCSSTransitionGroup
      transitionName='message'
      transitionAppearTimeout={500}
      transitionAppear={true}
      transitionEnter={false}
      transitionLeave={false}
    >
      <BreadCrumbRow
        styleRule={breadCrumbStyleRule}
        length={length}
        startingIndex={startingIndex}
        index={index}
      />
    </ReactCSSTransitionGroup>
  </Delayed>
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
