import React from 'react'
import DownArrowLink from './DownArrowLink'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Delayed from 'react-delayed'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import DelayedWord from './DelayedWord'

const LinearFlowCard = ({flowLength, day, index, messages}) => (
  <div className={`card-flow ${day}-${index}`}>
    {messages.map((message,i) => (
      <Delayed key={i} mounted={true} mountAfter={(i+1)*500}>
        <ReactCSSTransitionGroup
          transitionName='message'
          transitionAppearTimeout={500}
          transitionAppear={true}
          transitionEnter={false}
          transitionLeave={false}
        >
          <p><DelayedWord word={message} /></p>
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
    <FontAwesomeIcon className='angle-double-down angle-double-down-marker' icon='angle-double-down' />
  </div>
)

export default LinearFlowCard;
