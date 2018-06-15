//////
// This holds the core data to be used in the Day 1 module
// It consists of an object with three properties: problem, perspective, and exercise
// Each property holds a multi-dimensional array (array of arrays)
// With the child arrays holding a series of React components (or html primatives)
// Note: React is a necessary import here for use of jsx
//////
import React from 'react'
import DelayedWord from '../DelayedWord'
import DelayedFadeIn from '../DelayedFadeIn'
import DelayedFadeInSet from '../DelayedFadeInSet'
import TheMissionA from './TheMissionA/TheMissionA'
import TheMissionB from './TheMissionB/TheMissionB'

const cards = {
  problem: [
    [
      <h3 style={{color: 'black'}}>
        <DelayedWord word="The problem: "/>
      </h3>,
      <p>We want more out of life.</p>,
    ],
    [
      <h3>However</h3>
    ],
    [
      <p>We may not know which direction to go next.</p>
    ],
    [
      <p>Or possibly we do not even know what we want.</p>
    ],
  ],
  perspective: [
    [
      <h3 style={{color: 'black'}}>
        <DelayedWord word="Imagine: "/>
      </h3>,
      <p>What if things were different?</p>
    ],
    [
      <span>What if instead of feeling lost</span>,
    ],
    [
      <p>You felt centered</p>,
      <span>And directed</span>
    ],
    [
      <p>You were heading towards a life</p>,
      <p>that lit you up?</p>,
    ],
    [
      <p>You were heading towards a life</p>,
      <p>that excited you?</p>,
    ],
    [
      <p>Where each day</p>,
      <span>in your life held the possiblity of being purposeful</span>,
      <span> .</span>,
      <span>.</span>,
      <span>.</span>,
    ]
  ],
  exercise: [
    [
      <TheMissionA />
    ],
    [
      <TheMissionB />
    ],
    [
      <p>To do this we're going to need to gain some more clarity</p>,
      <p>on what are our core values.</p>
    ],
    [
      <h3>So ...</h3>
    ],
    [
      <p>Imagine you are whisked away far, far into the future.</p>,
    ],
    [
      <p>Just after your own death.</p>
    ],
    [
      <p>And you at your own funeral.</p>
    ],
    [
      <p>A dear friend gets up</p>,
    ],
    [
      <p>This is a friend you have not met yet</p>,
    ],
    [
      <p>But it is evident by their words and emotion that they will come to know you quite well</p>,
    ],
    [
      <p>You listen to your friend's words.</p>,
      <p>And you cannot believe what you are hearing.</p>,
    ],
    [
      <p>It seems that you have lived your greatest life.</p>,
      <p>Abundant in meaning and joy.</p>,
    ],
    [
      <h2>Your Challenge</h2>,
      <p style={{color: 'black'}}>Take a blank sheet of paper</p>,
      <p style={{color: 'black'}}>And set a timer for 10 minutes</p>,
      <div
        style={
          {textAlign: 'center', marginTop: '5em', fontWeight: 'bold'}
        }
      >
        <DelayedFadeInSet
          transition='message'
          index={1}
          timeout={500}
        >
          <p style={{color: 'black', textTransform: 'uppercase', fontWeight: 'bold'}}><DelayedWord word="Now Write this Down"/></p>
          <p>What does your friend say about you in this eulogy?</p>
          <p>How you lived your life,</p>
          <p>And how your presence affected others?</p>
        </DelayedFadeInSet>
          <DelayedFadeIn
            transition='message'
            index={6}
            timeout={500}
          >
            <p style={{color: 'black', fontSize: '.8em', fontWeight: 'bold'}}><DelayedWord word="Move forward when you have your eulogy"/></p>
          </DelayedFadeIn>
      </div>,
    ],
    [
      <h2>Your Challenge</h2>,
      <p>Now</p>,
      <p>Look over your eulogy</p>,
      <div
        style={
          {textAlign: 'center', marginTop: '5em', fontWeight: 'bold'}
        }
      >
        <DelayedFadeInSet
          transition='message'
          index={1}
          timeout={500}
        >
          <p style={{color: 'black', fontWeight: 'bold', textTransform: 'uppercase'}}><DelayedWord word="Ask yourself"/></p>
          <p>What values are represented here, by this,</p>
          <p>my greatest life lived?</p>
          <p>What values can I pull out of this?</p>
          <DelayedFadeIn
            transition='message'
            index={4}
            timeout={500}
          >
            <p style={{color: 'black', fontSize: '.8em', fontWeight: 'bold'}}><DelayedWord word="Write these down (...try to keep it to five or less)"/></p>
          </DelayedFadeIn>
        </DelayedFadeInSet>
      </div>
    ]
  ]
}

export default cards
