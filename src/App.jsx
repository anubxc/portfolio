import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Github from './pages/Github'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Github/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App