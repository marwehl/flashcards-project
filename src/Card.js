import React from 'react'

export default function Card({title, question, answer}){
  return (
    <section>
      <h3>{title}</h3>
      <p>{question}</p>
      <p>{answer}</p>
    </section>
  )
}