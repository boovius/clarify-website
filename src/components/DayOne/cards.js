//////
// This holds the core data to be used in the Day 1 module
// It consists of an object with three properties: problem, perspective, and exercise
// Each property holds a multi-dimensional array (array of arrays)
// With the child arrays holding a series of React components (or html primatives)
// Note: React is a necessary import here for use of jsx
//////
import React from 'react'
import DelayedWord from '../DelayedWord'
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
      <p>What do they say about you,</p>,
      <p>what you did with your life,</p>,
      <p>and how you affected others?</p>,
      <div
        style={
          {color: 'black', textAlign: 'center', marginTop: '5em', textTransform: 'uppercase', fontWeight: 'bold'}
        }
      >
        <DelayedWord word="write this down" />
        <div
          style={
            {fontSize: '.8em'}
          }
        >
          <DelayedFadeInSet
            transition='message'
            index={1}
            timeout={500}
          >
            <p>Take a blank sheet of paper</p>
            <p>And set a timer for 10 minutes</p>
            <h2>Go</h2>
          </DelayedFadeInSet>
        </div>
      </div>,
    ],

    //Look over this eulogy.  Pick out the vital points from it and the values that define commonalities between these points.  In short, how did you live your life?

  ]
}

export default cards
