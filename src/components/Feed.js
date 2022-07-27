import React from 'react'
import './Feed.css'
import TweetTab from './TweetTab'

function Feed() {
  return (
    <div className='feed'>
        <div className='feed-header'>
          <h1>Home</h1>
        </div>
        <div>
        <TweetTab />
        </div>

    </div>
  )
}

export default Feed