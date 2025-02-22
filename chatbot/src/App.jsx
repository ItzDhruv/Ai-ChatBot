import React from 'react'
import Sidebar from './components/slidebar/sidebar'
import Main from './components/main/main'
import './index.css'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';
import LearnMore from "./components/Home/LearnMore"; 
const App = () => {
  return (
    <>
     
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/learnmore" element={<LearnMore />} />
    </Routes>
  </Router>
    </>
 
  )
}

export default App
