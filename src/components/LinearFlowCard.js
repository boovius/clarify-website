import React from 'react'
import DownArrowLink from './DownArrowLink'

const LinearFlowCard = ({day, index, messages}) => (
  <div className={`${day}-${index}`}>
    {messages.map((message,i) => <p key={i}>{message}</p>)}
    <DownArrowLink next={`${parseInt(index)+1}`} />
  </div>
)

export default LinearFlowCard;
