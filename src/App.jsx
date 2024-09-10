// import { useState } from 'react'
import './App.css'

import Home from'./Components/Home'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'

function App() {

  return (
    <>
        <h1 className="text-3xl font-bold underline">
          Hello Maya Mohan!
        </h1>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
