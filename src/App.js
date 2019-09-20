import React from 'react';
import Navigation from './Navigation'
import Homepage from '.Homepage'


function App() {
  return (
  <>
  {renderPage()}
   <Navigation 
   buttonTexts={['Home', 'Practice', 'Bookmarked', 'Settings']}
   onClick={setActiveIndex}>/></Navigation>
   </>
  );
}

export default App;
