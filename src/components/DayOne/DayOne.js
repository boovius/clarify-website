import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Container from '../Container/Container'
import TitleCard from './TitleCard/TitleCard'
import OneTwo from './OneTwo/OneTwo'
import OneThree from './OneThree/OneThree'
import LinearFlowCard from '../LinearFlowCard'
import './DayOne.css'
import cards from './cards'


const cardFlow = (match) => cards.map((messages, cardIndex) =>
  <Route key={cardIndex} path={`${match.url}/${4 + cardIndex}`} render={
    (props) => (
      <LinearFlowCard {...props} flowLength={cards.length} day='one' index={`${4 + cardIndex}`} messages={messages} />
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
