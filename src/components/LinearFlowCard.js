import React from 'react'
import DownArrowLink from './DownArrowLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Delayed from 'react-delayed'

const LinearFlowCard = ({day, index, messages}) => (
  <div className={`${day}-${index}`}>
    {messages.map((message,i) => (
      <Delayed key={i} mounted={true} mountAfter={(i+0)*500}>
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
    <DownArrowLink next={`${parseInt(index)+1}`} />
  </div>
)

export default LinearFlowCard;
