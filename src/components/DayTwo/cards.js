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
      <p>If we’re on a mission to create our own shoes, we’re going to need some material</p>
    ],
    [
      <p>As this is a project to construct our lives, it is our most vital project.</p>,
      <p>As such, it is crucial that we choose material that speaks to us.</p>
    ],
    [
      <p>Material either speaks to us or it doesn’t.</p>
    ],
  ],
  perspective: [
    [
      <p>Too often in creating our shoes, we choose from a very limited set of materials.</p>
    ],
    [
      <p>We look at the material that has made up our pasts</p>,
      <p>Or we look at materials that can be created from the resources we feel are currently at our disposal.</p>,
      <p>Or we consider materials that will not compromise the materials we currently have.</p>
    ],
    [
      <p>But we’re here because our shoes no longer quite fit.</p>
    ],
    [
      <p>It is a requirement that we shed these materials now,</p>,
      <p>as a snake sheds its skin,</p>,
      <p>so that we can find new ones that better fit where we are now and where we want to go.</p>
    ]
  ],
  exercise: [
    [
      <p>But what if we could upgrade?</p>,
      <p>What if the scope of our materials was much wider?</p>
    ],
    [
      <p>What could we do?</p>,
      <p>What would we do?</p>,
    ],
    [
      <p>What could we do?</p>,
      <p>What would we do?</p>,
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
