import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import LinearFlowCard from '../LinearFlowCard'
import TitleCard from './TitleCard'
import * as styles from './DayTwo.styles'
import cards from './cards'
import './DayTwo.css'


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

const DayTwo = ({match}) => (
  <div className={styles.baseStyles} id='day-2'>
    <Switch>
      <Route path={`${match.url}/1`} component={TitleCard} />
      {cardFlow(match, cards.problem, 2, 'problem')}
      {cardFlow(match, cards.perspective, 2+cards.problem.length, 'perspective')}
      {cardFlow(match, cards.exercise, 2+cards.problem.length+cards.perspective.length, 'exercise')}
      <Redirect to={`${match.url}/1`} />
    </Switch>
  </div>
)

export default DayTwo