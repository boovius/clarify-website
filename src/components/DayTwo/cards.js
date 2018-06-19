//////
// This holds the core data to be used in the Day 2 module
//
// It consists of an object with three properties: problem, perspective, and exercise
// Each property holds a multi-dimensional array (array of arrays)
// With the child arrays holding a series of React components (or html primatives)
// Note: React is a necessary import here for use of jsx
//////
import React from 'react'
import DelayedWord from '../DelayedWord'
import DelayedFadeIn from '../DelayedFadeIn'
import DelayedFadeInSet from '../DelayedFadeInSet'

const cards = {
  problem: [
    [
      <p>Too often we block ourselves from living into our dreams</p>,
    ],
    [
      <p>Too often all we see is</p>,
      <p>"I just can't because..."</p>
    ],
    [
      <p>Something seems irresponsible about our brightest ideas</p>,
    ],
    [
      <p>Like they seem incredible but we can't really do that, right?</p>,
    ]
  ],
  perspective: [
    [
      <p>One’s man safe and reasonable is not another’s.</p>
    ],
    [
      <p>And fundamentally there are no rules as to how one should live their life.</p>
    ],
    [
      <p>Imagine a life where you were beholden to no one but yourself</p>,
      <p>and where you had the resources at your ready disposal to put towards whatever you wanted.</p>
    ],
    [
      <p>Would this vision not be the truest,</p>,
      <p>highest,</p>,
      <p>clearest vision of your desire?</p>,
    ],
    [
      <p>What if this were your life?</p>
    ]
  ],
  exercise: [
    [
      <p>you will do some new fun stuff</p>,
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
