import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
 
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/about' element ={<About/>}></Route>
      <Route path='/profile' element ={<Profile/>}></Route>
    </Routes>
    
    </BrowserRouter>
   </div>
  );
}

export default App;