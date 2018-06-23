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
      <p>We look at the material of our pasts</p>,
    ],
    [
      <p>Or we look around at the material of our present</p>,
    ],
    [
      <p>We tend to consider that which is "likely"</p>,
      <p>rather than that which is possible</p>
    ],
    [
      <p>We tend to consider that which feels "responsible"</p>,
      <p>rather than what truly speaks to our hearts</p>
    ],
    [
      <p>But remember we are here because our shoes no longer really fit.</p>
    ],
    [
      <p>So that requires of us that we shed the materials of our old shoes,</p>,
      <p>and like a snake sheds its skin,</p>,
      <p>find new materials that better fit where we are now and where we want to go.</p>
    ]
  ],
  exercise: [
    [
      <p>But what if we could upgrade?</p>,
      <p>What if the scope of our materials was much wider?</p>
    ],
    [
      <p>What could we do?</p>,
    ],
    [
      <p>What would we do?</p>,
    ],
    [
      <p>Imagine you were bequeathed a nearly unfathomable amount of money</p>,
      <p>($10 million)</p>,
      <p>from a lost relative, whom you never knew.</p>,
    ],
    [
      <p>However, there are two stipulations for receiving the inheritance.</p>,
    ],
    [
      <p>The first is that you cannot save or invest this money.</p>,
      <p>You must spend it.</p>,
    ],
    [
      <p>The second is that you cannot spend it on anything material</p>,
      <p>e.g. you cannot buy a wonderful new house.</p>,
    ],
    [
      <p>We’re after experiences.</p>,
      <p>We’re after life.</p>,
    ],
    [
      <h2>Your Challenge</h2>,
      <p style={{color: 'black'}}>Create visions of what you are doing in spending this money</p>,
      <p style={{color: 'black'}}>Take a blank sheet of paper</p>,
      <p style={{color: 'black'}}>Draw a heart in the center of your page</p>,
      <p style={{color: 'black'}}>Set a timer for 10 minutes</p>,
      <p style={{color: 'black'}}>And draw your visions in thought bubbles around the center</p>,
      <p style={{color: 'black'}}>Then draw a line connecting each one to your center</p>,
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
          <p style={{color: 'black', textTransform: 'uppercase', fontWeight: 'bold'}}><DelayedWord word="I am ...."/></p>
          <p>You have $10 million</p>
          <p>You must spend it</p>
          <p>What are you doing?</p>
        </DelayedFadeInSet>
          <DelayedFadeIn
            transition='message'
            index={6}
            timeout={500}
          >
            <p style={{color: 'black', fontSize: '.8em', fontWeight: 'bold'}}><DelayedWord word="Move forward when you have your visions"/></p>
          </DelayedFadeIn>
      </div>,
    ],
  ]
}

export default cards
