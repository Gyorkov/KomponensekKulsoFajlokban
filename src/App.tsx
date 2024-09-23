import { useState } from 'react'
import { FejResz } from './fejResz'
import { OldalTartalom } from './oldalTartalom'
import { LabResz } from './labResz'
import './App.css'

function App() {
  return (
    <div>
      <FejResz />
      <br />
      <OldalTartalom />
      <br />
      <LabResz />
    </div>
  )
}

export default App