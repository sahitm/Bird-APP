import React from 'react'
import Sidebar from './dashboard/Sidebar'
import Feed from './dashboard/Feed'
import Trending from './dashboard/Trending'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <Feed />
      <Trending />
    </div>
  )
}

export default Home