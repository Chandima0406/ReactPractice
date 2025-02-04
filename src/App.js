import logo from './logo.svg';
import './App.css';

function App() {
  let count = 0;
  return (
    <>

    <span className='title'>My counter</span>
    <p className='subtitle'>The count is {count}</p>
    <button className='button'>-</button>
    <button className='button'>+</button>

    </>
  );
}

export default App;
