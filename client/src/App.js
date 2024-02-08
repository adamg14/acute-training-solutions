import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import EventsCalendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <EventsCalendar></EventsCalendar>
    </div>
  );
}

export default App;
