import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home';
import Rankings from './components/Pages/Rankings';
import MyProfile from './components/Pages/Profile';
import UpdatePoints from './components/Pages/UpdatePoints';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='rankings' element={<Rankings/>} />
          <Route path='profile' element={<MyProfile/>} />
          <Route path='updatepoints' element={<UpdatePoints/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
