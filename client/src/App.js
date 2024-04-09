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
import AddEvent from './components/AddEvent';
import RegisterTrainer from './components/RegisterTrainer';
import LoginTrainer from './components/LoginTrainer';
import Events from './components/Events';
import EventPage from './components/EventPage';
import PotentialTrainers from './components/PotentialTrainers';
import PotentialEvents from './components/PotentialEvents';

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
          <Route path="/add-event" element={<AddEvent></AddEvent>}></Route>
          <Route path="/trainer-register" element={<RegisterTrainer></RegisterTrainer>}></Route>
          <Route path="/trainer-login" element={<LoginTrainer></LoginTrainer>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="event/:eventId" element={ <EventPage></EventPage>}></Route>
          <Route path="/event/potential-trainers/:employeeId/:eventId" element={ <PotentialTrainers></PotentialTrainers> }></Route>
          <Route path="/events/:trainerId" element={ <PotentialEvents></PotentialEvents> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
