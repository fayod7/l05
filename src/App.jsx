import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Clean from './components/clean/Clean'
import Testimonials from './components/testimonials/Testimonials'


function App() {

  return (
    <>
    <Header/> 
      <Hero/>
      <Products/>
      <Clean/>
      <Testimonials/>
    </>
  )
}

export default App
