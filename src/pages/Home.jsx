import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Why from '../components/Why'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { HashRouter } from 'react-router-dom';
function Home() {
  return (
    <HashRouter>
    <div className='home'>
      <Header/>
      <Hero/>
      <About/>
      <Why/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    </HashRouter>
  )
}

export default Home
