import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Delayed from 'react-delayed'
import BreadCrumbRow from './BreadCrumbRow'
import { css as glamor } from 'glamor'

const breadCrumbStyleRule = glamor({
  position: 'absolute',
  width: '50%',
  bottom: '100px',
})

const LinearFlowCard = ({length, day, index, messages}) => (
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
          <p>{message}</p>
        </ReactCSSTransitionGroup>
      </Delayed>
    ))}
    <Delayed mounted={true} mountAfter={(messages.length + 1) * 500}>
      <ReactCSSTransitionGroup
        transitionName='message'
        transitionAppearTimeout={500}
        transitionAppear={true}
        transitionEnter={false}
        transitionLeave={false}
      >
        <BreadCrumbRow styleRule={breadCrumbStyleRule} length={length} index={index} />
      </ReactCSSTransitionGroup>
    </Delayed>
  </div>
)

export default LinearFlowCard;
