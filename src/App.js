import React, {useState} from 'react';
import Navigation from './Navigation'
import Homepage from './Homepage'


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
    3: <section>Settings</section>
  }
return pages[activeIndex] || <section>404</section>
}

  return (
  <div>
  {renderPage()}
   <Navigation 
   buttonTexts={['Home', 'Practice', 'Bookmarked', 'Settings']}
   onClick={setActiveIndex}
   />
   </div>
  );
}

