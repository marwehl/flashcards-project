import React, {useState} from 'react'

export default function Card({title, question, answer}){

const [isAnswerVisible, setIsVisibleAnswer] = useState(false)

function toggleAnswer() {
  setIsVisibleAnswer(!isAnswerVisible)
}

  return (
    <section onClick={toggleAnswer}>
      <h3>{title}</h3>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer}/>}
    </section>
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