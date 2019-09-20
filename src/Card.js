import React, {useState} from 'react'
import styled from 'styled-components/macro'

const CardStyled = styled.section`
 background: white;
padding: 20px;
border-radius: 5px;
box-shadow: 0 10px 10px #0002;
`

export default function Card({title, question, answer}){

const [isAnswerVisible, setIsVisibleAnswer] = useState(false)

function toggleAnswer() {
  setIsVisibleAnswer(!isAnswerVisible)
}

  return (
    <CardStyled onClick={toggleAnswer}>
      <h3>{title}</h3>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer}/>}
    </CardStyled>
  )

function Answer({text}){
  return (
<>
<hr />
<p>{text}</p>
</>
  )
}

}