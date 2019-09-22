import React, {useState} from 'react';
import Navigation from './Navigation'
import Homepage from './Homepage'
import Settings from './Settings'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components/macro'

const AppStyled = styled.div`
height: 100vh;
display: grid;
grid-template-rows: auto 48px;
font-family: sans-serif;
`


export default function App() {

const [activeIndex, setActiveIndex] = useState(0)
const [cards, setCards] = useState([
  {
    title: 'foo',
    question: 'what',
    answer:'bla'
  },
  {
    title: 'bar',
    question: 'why',
    answer: 'blup'
  }

])

function renderPage(){
  const pages={
    0: <Homepage cards={cards}/>,
    1: <section>Practice</section>,
    2: <section>Bookmarked</section>,
    3: <Settings handleSubmit={addCard}/>
  }

return pages[activeIndex] || <section>404</section>
}

function addCard(event){
  event.preventDefault()
  setCards([
    ...cards,
    {title: data.inputTitle,
    question: data.inputQuestion,
    answer: data.inputAnswer
    } 
  ])
}


  return (
  <AppStyled>
      <GlobalStyle />
  {renderPage()}
   <Navigation 
   buttonTexts={['Home', 'Practice', 'Bookmarked', 'Settings']}
   onClick={setActiveIndex}
   />
   </AppStyled>
  );
}

