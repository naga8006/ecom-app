import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login.js"
import Nav from "./nav/Nav"
import Home from "./Home.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
