import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Heading from './components/Heading';
import EventsCalendar from './components/Calendar';
import About from './components/About';
import EmployeeLogin from './components/EmployeeLogin';
import EmployeeRegister from './components/EmployeeRegister';
import HomePage from './components/HomePage';
import TrainerHome from './components/TrainerHome';
import EmployeeHome from './components/EmployeeHome';
import AdminHome from './components/AdminHome';
// have a portal to render the different users of the application

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/employee-login" element={<EmployeeLogin></EmployeeLogin>}></Route>
          <Route path="/employee-register" element={<EmployeeRegister></EmployeeRegister>}></Route>
          <Route path="/trainer-home" element={<TrainerHome></TrainerHome>} ></Route>
          <Route path="/employee-home" element={<EmployeeHome></EmployeeHome>} ></Route>
          <Route path="/admin-home" element={<AdminHome></AdminHome>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
