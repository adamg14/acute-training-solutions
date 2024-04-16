import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useNavigate } from "react-router-dom";

function EventsCalendar(){
    const localizer = momentLocalizer(moment);
    const navigate = useNavigate();
    const trainerEvents = [
        {
            start: new Date(2024, 1, 8, 12, 30),
            end: new Date(2024, 1, 8, 14, 30),
            title: "Meeting with Gavin from Acute Training Solutions - Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium",
            // prompt the user to click a new link for more information about the course
            location: "Bute Street"
        }
    ];

    return (
        <div>
            <h3>Calendar</h3>
            <Calendar
            localizer={localizer}
            events={trainerEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}></Calendar>
        </div>
    );
}

export default EventsCalendar;