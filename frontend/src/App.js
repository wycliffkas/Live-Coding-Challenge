import React, {useEffect, useState} from 'react';
import axios from "axios"

import './App.css';
import Investments from './components/investments';

const App = () => {

  useEffect(() => {
    fetchInvestors()
  }, [])

  const [investors, setInvestors] = useState([])

  const fetchInvestors = () => {
    axios.get("http://localhost:4000/investors")
    .then(result => {
        console.log("result", result.data.data.investors)
        setInvestors(result.data.data.investors)
    })
    .catch(error => console.log(error))

  }

  return (
    <div className="App">
    <header className="App-header">
      <h1>Brickblock Live Coding Challenge</h1>
    </header>
    <main className="App-main">

      <Investments investors={investors}/>
    </main>
  </div>
  )

};

export default App;
