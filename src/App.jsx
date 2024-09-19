import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetStarShips from './assets/Components/GetStarships'
import Header from './assets/Components/Header'
function App() {

  return (
    <>
    <Header />
      <GetStarShips />
    </>
  )
}

export default App
