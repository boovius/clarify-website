import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Container from '../Container/Container'
import TitleCard from './TitleCard/TitleCard'
import OneTwo from './OneTwo/OneTwo'
import OneThree from './OneThree/OneThree'
import LinearFlowCard from '../LinearFlowCard'
import './DayOne.css'


const cards = [
  [
    "A sense of direction to a life of our highest fulfillment",
    "requires a connection to our deepest and most core values."
  ],
  [
    "It requires that we ask ourselves hard questions.",
  ],
  [
    "What really matters to me?",
    "What matters most?",
  ],
  [
    "We need to consider the totality of our lives.",
    "Our lives as a whole.",
  ],
  [
    "We're going to imagine our lives at the very end of them.",
  ],
]

const cardFlow = (match) => cards.map((messages, cardIndex) =>
  <Route key={cardIndex} path={`${match.url}/${4 + cardIndex}`} render={
    (props) => (
      <LinearFlowCard {...props} day='one' index={`${4 + cardIndex}`} messages={messages} />
    )
  }/>
)

const DayOne = ({match}) => (
  <div id='day-1'>
    <Container>
      <Switch>
        <Route path={`${match.url}/1`} component={TitleCard} />
        <Route path={`${match.url}/2`} component={OneTwo} />
        <Route path={`${match.url}/3`} component={OneThree} />
        {cardFlow(match)}
        <Redirect to={`${match.url}/1`} />
      </Switch>
    </Container>
  </div>
)

export default DayOne
