import React from 'react'
import Topicbox from '../Components/Topicbox'
import Content from '../Components/Content'


export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
      <Topicbox food ="kottu" price ="Rs.750">
        <span>This is child props</span>
      </Topicbox>
      <Topicbox food ="rice" price ="Rs.650">
        <button>Click hear</button>
      </Topicbox>
      <Topicbox food ="noodles" price ="Rs.550">
        <p>child props</p>
      </Topicbox>
      
      
      
    </div>
  )
}
