import React from 'react'
import './topicbox.css'

export default function Topicbox() {
  const topic = "MY favorit food is kottu"
  const item = "and rice"
  return (
    <div>
      <div className="topicbox">
        <span className='text'>{topic} {item}</span>
      </div>    
    </div>
  )
}
