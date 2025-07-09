import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/router'

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="bg-light flex-grow-1 py-4">
        <div className="container">
          <AppRoutes />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
