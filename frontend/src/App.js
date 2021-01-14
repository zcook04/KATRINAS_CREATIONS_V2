import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Collections from './components/Collections/Collections'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Testimonials from './components/Testimonials/Testimonials'
import './App.css'

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Collections />
    <AboutMe />
    <Testimonials/>
    <Footer email="katrina@katrinascreationsde.com" company="Katrinas Creations"/>
    </>
  );
}

export default App;
