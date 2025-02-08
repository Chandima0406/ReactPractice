import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count , setcount] = useState(0);
  //let count = 0;

  const increment = () =>{
    //count +=1;
    setcount(count+1);
  }

  const decriment = () =>{
    //count -=1
    setcount(count-1);
  }

  useEffect(()=>{
    //what i want to do as a side effect 
    console.log(`New count is: ${count}`);
  },[count]  //dependancy array

  )
  return (
    <>

    <span className='title'>My counter</span>
    <p className='subtitle'>The count is {count}</p>
    <button onClick={decriment} className='button'>-</button>
    <button onClick={increment} className='button'>+</button>

    </>
  );
}

export default App;