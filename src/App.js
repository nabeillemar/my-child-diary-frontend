import './App.css';
import Child from './components/Child';
import Attendance from './components/Attendance';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import Navigation from './containers/Navigation';
import ChildrenAttendance from './containers/ChildrenAttendance';
import ChildForm from './containers/ChildForm';
import ChildEdit from './containers/ChildEdit';



function App() {
  return (
    <Router>
      <Navigation/>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Home/>}  />
      <Route exact path='/childform' element={<ChildForm/>}/> 
      <Route exact path='/children' element={<Child />} />
      <Route exact path='/attendance' element={<Attendance />}/>
      <Route path="children/:id" element={<ChildrenAttendance />}/> 
      <Route path="children/:id/edit" element={<ChildEdit />}/> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;


