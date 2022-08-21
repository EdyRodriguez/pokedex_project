import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'

const Home = () => <h1>Home</h1> 
const About = () => <h1>About</h1> 

function App() {
  return (
    <div className="App">
      aqui va lo de los pokes
      <Routes>
        <Route path="/" element={<Home/>} /><Route path="/about" element={<About/>} />
      </Routes>
      
    </div>
  )
}

export default App
