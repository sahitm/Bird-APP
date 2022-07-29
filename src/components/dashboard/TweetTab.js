import {React , useRef} from 'react'
import './TweetTab.css'
import { Avatar, Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import MoodIcon from '@mui/icons-material/Mood';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useContext } from 'react';
import {Context} from '../context/Context'

function TweetTab() {

  const {twtData,SetTwtData,twtText, SetTwtText} = useContext(Context)
  const inputRef = useRef();

  function handletwtChange() {
    SetTwtData([...twtData,twtText])
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div className='tweetTab'>
        <Avatar />
        <div className='pictureInput'>
            <input ref={inputRef} className='tweetInput' placeholder="What's Happening" onChange={(event) => SetTwtText(event.target.value)}/>
            <hr></hr>
            <div className='optionsButton'>
                <div className='tweetTab--icons'>
                    <InsertPhotoIcon />
                    <GifBoxIcon />
                    <PollIcon />
                    <MoodIcon />
                    <LocationOnIcon />
                </div>
                
                <Button className='tweetBtn' onClick={handletwtChange}>Tweet</Button>
            </div>
        </div>
    </div>
  )
}

export default TweetTab