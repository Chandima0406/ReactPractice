import React from 'react'
import './topicbox.css'

export default function Topicbox(props) {
  
  return (
    <div>
      <div className="topicbox">
        <span className='text'>MY favorit food is {props.food}</span>
      </div>    
    </div>
  )
}
