import React from 'react'

export default function Navigation({ onClick, buttonTexts }) {
  return (
  <nav>
    {buttonTexts.map((text, index) =>
      <button 
      key={index} 
      onClick={() => onClick(index)}>
      {text}
      </button>)
    }
  </nav>
  )
}