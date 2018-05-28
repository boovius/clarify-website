import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Container from '../Container'
import TitleCard from './TitleCard/TitleCard'
import LinearFlowCard from '../LinearFlowCard'
import './DayOne.css'
import cards from './cards'


const cardFlow = (match, cards, startingIndex) => cards.map((messages, cardIndex) =>
  <Route key={cardIndex} path={`${match.url}/${startingIndex + cardIndex}`} render={
    (props) => (
      <LinearFlowCard
        {...props}
        length={cards.length}
        day='one'
        startingIndex={startingIndex}
        index={`${startingIndex + cardIndex}`}
        messages={messages}
      />
    )
  }/>
)

const DayOne = ({match}) => (
  <div id='day-1'>
    <Container>
      <Switch>
        <Route path={`${match.url}/1`} component={TitleCard} />
        {cardFlow(match, cards.problem, 2)}
        {cardFlow(match, cards.perspective, 2+cards.problem.length)}
        {cardFlow(match, cards.exercise, 2+cards.problem.length+cards.perspective.length)}
        <Redirect to={`${match.url}/1`} />
      </Switch>
    </Container>
  </div>
)

export default DayOne
