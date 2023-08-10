import React from 'react'
// import "./assets/css/custom.css";
import "./assets/css/custom.css";
import Routers from './routers'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <>

      <Navbar />
      <Routers />
      <Footer />
    </>
  )
}

export default App
