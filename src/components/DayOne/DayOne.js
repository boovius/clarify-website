import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Container from '../Container'
import TitleCard from './TitleCard/TitleCard'
import LinearFlowCard from '../LinearFlowCard'
import './DayOne.css'
import cards from './cards'


const problemFlow = (match) => cards.problem.map((messages, cardIndex) =>
  <Route key={cardIndex} path={`${match.url}/${2 + cardIndex}`} render={
    (props) => (
      <LinearFlowCard {...props} length={cards.problem.length} day='one' index={`${2 + cardIndex}`} messages={messages} />
    )
  }/>
)

const perspectiveFlow = (match) => cards.perspective.map((messages, cardIndex) =>
  <Route key={cardIndex} path={`${match.url}/${2 + cardIndex}`} render={
    (props) => (
      <LinearFlowCard {...props} length={cards.perspective.length} day='one' index={`${2 + cardIndex}`} messages={messages} />
    )
  }/>
)

const exerciseFlow = (match) => cards.exercise.map((messages, cardIndex) =>
  <Route key={cardIndex} path={`${match.url}/${2 + cardIndex}`} render={
    (props) => (
      <LinearFlowCard {...props} length={cards.exercise.length} day='one' index={`${2 + cardIndex}`} messages={messages} />
    )
  }/>
)

const DayOne = ({match}) => (
  <div id='day-1'>
    <Container>
      <Switch>
        <Route path={`${match.url}/1`} component={TitleCard} />
        {problemFlow(match)}
        {perspectiveFlow(match)}
        {exerciseFlow(match)}
        <Redirect to={`${match.url}/1`} />
      </Switch>
    </Container>
  </div>
)

export default DayOne
