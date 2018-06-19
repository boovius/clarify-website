import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import LinearFlowCard from '../LinearFlowCard'
import TitleCard from './TitleCard'
import cards from './cards'
import * as styles from './DayOne.styles'
import './DayOne.css'


const cardFlow = (match, cards, startingIndex, phase) => cards.map((elements, cardIndex) =>
  <Route key={cardIndex} path={`${match.url}/${startingIndex + cardIndex}`} render={
    (props) => (
      <LinearFlowCard
        {...props}
        length={cards.length}
        day='one'
        startingIndex={startingIndex}
        index={`${startingIndex + cardIndex}`}
        elements={elements}
        phase={phase}
        styles={styles}
      />
    )
  }/>
)

const DayOne = ({match}) => (
  <div className={styles.baseStyles} id='day-1'>
    <Switch>
      <Route path={`${match.url}/1`} component={TitleCard} />
      {cardFlow(match, cards.problem, 2, 'problem')}
      {cardFlow(match, cards.perspective, 2+cards.problem.length, 'perspective')}
      {cardFlow(match, cards.exercise, 2+cards.problem.length+cards.perspective.length, 'exercise')}
      <Redirect to={`${match.url}/1`} />
    </Switch>
  </div>
)

export default DayOne
