import './App.css';
import Child from './components/Child';
import Attendance from './components/Attendance';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import Navigation from './containers/Navigation';
import ChildrenAttendance from './containers/ChildrenAttendance';



function App() {
  return (
    <Router>
      <Navigation/>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/children' element={<Child/>} />
      <Route exact path='/attendance' element={<Attendance/>}/>
      <Route path="children/:id" element={<ChildrenAttendance/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
