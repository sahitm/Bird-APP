import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Trending from './Trending';
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