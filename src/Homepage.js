import React from 'react'
import Card from './Card'

export default function Homepage({cards}) {
  return (
    <section>
      <h1>All cards</h1>
      {cards.map((card, index)=>{
        <Card
        key={index}
        title={card.title}
        question={card.question}
        answer={card.answer} 
        />
      })}
    </section>
  )
}