import React from 'react'
import Route from './Route/routes'
import Aos from 'aos'
import ScrollOnTop from './Contexts/ScrollOnTop'
function App() {
  Aos.init();
  return (
    <ScrollOnTop>
      <Route />
    </ScrollOnTop>

  )
}

export default App
