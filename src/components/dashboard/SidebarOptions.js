import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({Icon,text}) {
  return (
    <div className='sidebarOptions'>
        <Icon className="materialIcons"/>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions