import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Rankings from './components/Rankings';
import FindPlayer from './components/FindPlayer';
import UpdatePoints from './components/UpdatePoints';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='rankings' element={<Rankings/>} />
          <Route path='findplayer' element={<FindPlayer/>} />
          <Route path='updatepoints' element={<UpdatePoints/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
