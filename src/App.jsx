import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Models from "./components/Models"




const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Models />
    </main>
  )
}

export default App