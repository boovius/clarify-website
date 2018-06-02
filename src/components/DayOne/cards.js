//////
// This holds the core data to be used in the Day 1 module
// It consists of an object with three properties: problem, perspective, and exercise
// Each property holds a multi-dimensional array (array of arrays)
// With the child arrays holding a series of React components (or html primatives)
// Note: React is a necessary import here for use of jsx
//////
import React from 'react'
import DelayedWord from '../DelayedWord'

const cards = {
  problem: [
    [
      <h3>So:</h3>,
      <p>We want more out of life</p>,
      <p>than what we're currently experiencing</p>
    ],
    [
      <p>But we may not know which direction to go next.</p>
    ],
    [
      <p>Or possibly what we even want.</p>
    ],
  ],
  perspective: [
    [
      <p>But what if things were different?</p>
    ],
    [
      <span>What if instead of feeling lost</span>,
      <span> .</span>,
      <span>.</span>,
      <span>.</span>,
    ],
    [
      <p>You were heading towards a life that lit you up?</p>
    ]
  ],
  exercise: [
    [
      <DelayedWord word="Exercise"/>,
      <span>: </span>,
      <span>.</span>,
      <span>.</span>,
      <span>.</span>,
    ],
    [
      <p>Imagine you are at your funeral</p>
    ],
    [
      <p>a dear friend gets up</p>,
      <p>and gives an incredible eulogy for you.</p>
    ],
    [
      <p>You discover you have lived your greatest life.</p>,
    ],
    [
      <h3 style={{color: 'black'}}>Write down:</h3>,
      <p>What do they say about you,</p>,
      <p>what you did with your life,</p>,
      <p>and how you affected others?</p>,
    ],

    //Look over this eulogy.  Pick out the vital points from it and the values that define commonalities between these points.  In short, how did you live your life?

  ]
}

export default cards
