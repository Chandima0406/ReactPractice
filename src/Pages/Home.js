import React from 'react'
import Topicbox from '../Components/Topicbox'
import Content from '../Components/Content'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div>
        <h1>Home page</h1> 
        <Link to="/about">Go to the About Page</Link> 
        <Link to="/contact">Go to the contact Page</Link> 
        
    </div>
  )
}
