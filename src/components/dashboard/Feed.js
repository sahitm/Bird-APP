import React from 'react'
import './Feed.css'
import TweetTab from './TweetTab'
import Post from './Post'
import { useContext } from 'react';
import {Context} from '../context/Context'

function Feed() {

  const {loginvalues,twtData,SetTwtData} = useContext(Context)

  const postElements = twtData.map((item) => {
     return <Post loginvalues={loginvalues} twtText={item} twtData={twtData} SetTwtData={SetTwtData}/>
  })

  return (
    <div className='feed'>

        <div className='feed-header'>
          <h1>Home</h1>
          <hr></hr>
          <TweetTab />
        </div>

        {postElements}
        

    </div>
  )
}

export default Feed