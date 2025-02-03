import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch, Link} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
