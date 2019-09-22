import React, { useState } from 'react'
import styled from 'styled-components/macro'



const FormStyled=styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 600px;
`
const ButtonStyled=styled.button`
font-size: 1.5em;
padding: 10px 20px;
border-radius: 10px;
`


export default function Settings ({handleSubmit}) {

  const [data, setData] = useState({})
  function onInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  
  return (

      <FormStyled onSubmit={handleSubmit}>
      <input
      value={data.inputTitle}
      name="title"
      onChange={onInputChange}></input>
      <textarea
      value={data.inputQuestion}
      name="question"
      onChange={onInputChange} 
      rows="12" colums="26"></textarea>
      <textarea
      name="answer"
      value={data.inputAnswer}
      onChange={onInputChange} 
      rows="12" colums="26"></textarea>
      <ButtonStyled>Create card</ButtonStyled>
      </FormStyled>
  )
}