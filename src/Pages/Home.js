import React from 'react'
import Topicbox from '../Components/Topicbox'
import Content from '../Components/Content'


export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
      <Topicbox food ="kottu" price ="Rs.750"/>
      <Topicbox food ="rice" price ="Rs.650"/>
      <Topicbox food ="noodles" price ="Rs.550"/>
      
      
      
    </div>
  )
}
