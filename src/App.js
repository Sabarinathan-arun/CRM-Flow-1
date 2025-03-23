import React from 'react'
import Home from './component/Home'
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
const App = () => {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  )
}

export default App
