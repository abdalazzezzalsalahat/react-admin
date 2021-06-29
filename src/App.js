import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function Footer(props){
  return(
    <footer>
      <span>
        2021
        {props.massage}
      </span>
    </footer>
  );
}


// function Main(pr){
//   return(
    
//   );
// }

function App() {
  const [location, setLocation] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [avg, setAvg] = useState(0.0);
  const [order, setOrder] = useState('')
  const handleClick = () => {
    setOrder('{ ' + "location" + location + "MaxCustomers" + max + "MimCustomers" + min + "Avg Cookies" + avg +  ' }')
  }
  const handleMin = (e) => {
    setMin(e.target.value)
  }
  const handleMax = (e) => {
    setMax(e.target.value)
  }
  const handleAvg = (e) => {
    setAvg(e.target.value)
  }
  const handleLoc = (e) => {
    setMin(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookie admin</h1>
      </header>
      <main className= "App-body">
        <div className="head">
          <h2>The real stand</h2>
            <div className="row">
              <label>location</label>
              <input name="location" onChange={handleLoc}/>
            </div>
            <div>
              <label>Min Customer</label>
              <input onChange={handleMin}/>
            </div>
            <div>
              <label>Max Customer</label>
              <input onChange={handleMax}/>
            </div>
            <div>
              <label>Avg cookies</label>
              <input onChange={handleAvg}/>
            </div>
            <div>
              <button onClick={handleClick}>submit</button>
            </div>
          </div>
        <div>
          <label>{order}</label>
        </div>
        
      </main>
      <Footer massage = "this is a footer"/>
    </div>
  );
}



export default App;
