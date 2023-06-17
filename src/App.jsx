import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RecommendedVideos from './components/RecommendedVideos'

export default function App() {
  return (
    <div className='app'>
      <Header/>
     <div className="app__page">
      <Sidebar />
      <RecommendedVideos />
     </div>

    </div>
  )
}
