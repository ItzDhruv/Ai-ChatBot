import React from 'react'
import Sidebar from './components/slidebar/sidebar'
import Main from './components/main/main'
import './index.css'
const App = () => {
  return (
    <>
    <div className='main-component'>

    <Sidebar/>
    <Main/>
    </div>
    </>
  )
}

export default App
