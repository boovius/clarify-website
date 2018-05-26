import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Delayed from 'react-delayed'

const DelayedWord = ({word}) => {
  const letters = word.split('')
  return (
    <span>
      {letters.map((letter,i) => (
        <Delayed key={i} mounted={true} mountAfter={(i+1)*50}>
          <ReactCSSTransitionGroup
            transitionName='message'
            transitionAppearTimeout={50}
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}
          >
            <span>{letter}</span>
          </ReactCSSTransitionGroup>
        </Delayed>
      ))}
    </span>
  )
}

export default DelayedWord
