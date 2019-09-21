import React from 'react'
import Card from './Card'
import styled from 'styled-components/macro'

const HomepageStyled = styled.div`
padding: 20px; 
display: grid;
align-content: flex-start;
gap: 20px;
`


export default function Homepage({cards}) {
  return (
    <HomepageStyled>
      <h1>All cards</h1>
      {cards.map((card, index) => (
        <Card
        key={index}
        title={card.title}
        question={card.question}
        answer={card.answer} 
        />
      ))}
    </HomepageStyled>
  )
}