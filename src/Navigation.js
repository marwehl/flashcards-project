import React from 'react'
import styled from 'styled-components/macro'

const NavigationStyled = styled.nav`
display: flex;
> button {
  flex-grow: 1;
  font-size: 1em;
}
`


export default function Navigation({ onClick, buttonTexts }) {
  return (
  <NavigationStyled>
    {buttonTexts.map((text, index) =>
      <button 
      key={index} 
      onClick={() => onClick(index)}>
      {text}
      </button>)
    }
  </NavigationStyled>
  )
}