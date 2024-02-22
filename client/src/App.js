import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Heading from './components/Heading';
import EventsCalendar from './components/Calendar';
import About from './components/About';
import EmployeeLogin from './components/EmployeeLogin';

// have a portal to render the different users of the application

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<About></About>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/employee-login" element={<EmployeeLogin></EmployeeLogin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
