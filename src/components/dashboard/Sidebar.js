import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';





function Sidebar() {
  return (
    <div className='sidebar'>

        <TwitterIcon className='sidebar--twittericon' />

        <SidebarOptions Icon={HomeIcon} text="Home"/>
        <SidebarOptions Icon={SearchIcon} text="Explore"/>
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications"/>
        <SidebarOptions Icon={MailOutlineIcon} text="Messages"/>
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOptions Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOptions Icon={MoreHorizIcon} text="More"/>

        <Button className='tweetButton'>Tweet</Button>

    </div>
  )
}

export default Sidebar