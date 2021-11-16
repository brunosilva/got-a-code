import React from 'react'
import ComponentList from './componentList'
import Home from './home'

function App() {
  return (
    <div className="App">
      <Home>
        <ComponentList />
      </Home>
    </div>
  )
}

export default App
