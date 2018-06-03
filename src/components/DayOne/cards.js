//////
// This holds the core data to be used in the Day 1 module
// It consists of an object with three properties: problem, perspective, and exercise
// Each property holds a multi-dimensional array (array of arrays)
// With the child arrays holding a series of React components (or html primatives)
// Note: React is a necessary import here for use of jsx
//////
import React from 'react'
import DelayedWord from '../DelayedWord'
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
      <p>But we may not know which direction to go next.</p>
    ],
    [
      <p>Or possibly we do not know what we even want.</p>
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
      <p>You were heading towards a life</p>,
      <p>that lit you up?</p>,
    ],
    [
      <p>You were heading towards a life</p>,
      <p>that excited you?</p>,
    ],
    [
      <span>Where your day to day held meaning</span>,
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
      <p>Imagine you are at your funeral</p>
    ],
    [
      <p>a dear friend gets up</p>,
      <p>and gives a eulogy for you.</p>
    ],
    [
      <p>It's incredible.</p>,
      <p>You cannot believe what you are hearing.</p>,
    ],
    [
      <p>You discover you have lived your greatest life.</p>,
    ],
    [
      <p>What do they say about you,</p>,
      <p>what you did with your life,</p>,
      <p>and how you affected others?</p>,
      <p
        style={
          {color: 'black', textAlign: 'center', marginTop: '5em', textTransform: 'uppercase', fontWeight: 'bold'}
        }
      >
        <DelayedWord word="write this down" />
      </p>,
    ],

    //Look over this eulogy.  Pick out the vital points from it and the values that define commonalities between these points.  In short, how did you live your life?

  ]
}

export default cards
