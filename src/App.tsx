import React from 'react'
import Circle from './components/progress-bar/circle'
import Title from './components/title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title
          title="Got a"
          subtitle="CODE"
          description="exemplos de códigos para componentes ReactJs"
        />
        <Circle completed={1} />
      </header>
    </div>
  )
}

export default App
