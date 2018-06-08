import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Delayed from 'react-delayed'

const DelayedFadeIn = ({transition, index, timeout, children}) =>
  children.map((child, i) => (
    <Delayed mounted={true} mountAfter={(index+i+1)*timeout}>
      <ReactCSSTransitionGroup
        transitionName={transition}
        transitionAppearTimeout={timeout}
        transitionAppear={true}
        transitionEnter={false}
        transitionLeave={false}
      >
        {child}
      </ReactCSSTransitionGroup>
    </Delayed>
))

export default DelayedFadeIn
