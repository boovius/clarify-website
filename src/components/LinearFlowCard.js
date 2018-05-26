import React from 'react'
import DownArrowLink from './DownArrowLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Delayed from 'react-delayed'

const LinearFlowCard = ({flowLength, day, index, messages}) => (
    {messages.map((message,i) => (
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
    ))}
    <Delayed mounted={true} mountAfter={(messages.length+1)*500}>
      <ReactCSSTransitionGroup
        transitionName='message'
        transitionAppearTimeout={500}
        transitionAppear={true}
        transitionEnter={false}
        transitionLeave={false}
      >
        <DownArrowLink ratio={index/flowLength} next={`${parseInt(index)+1}`} />
      </ReactCSSTransitionGroup>
    </Delayed>
  </div>
)

export default LinearFlowCard;
