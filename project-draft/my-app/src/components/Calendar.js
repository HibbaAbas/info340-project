import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';







const MyCalendar = () => {
    const calendarRef = React.useRef(null);
    const handleWindowResize = () => {


        // CHECKK IF ALLOWED
        let calendarApi = calendarRef.current.getApi();
        if(window.innerWidth < 768) {
            calendarApi.changeView('dayGridWeek');

        }else{
            calendarApi.changeView('dayGridMonth');

        }

    };
    React.useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView='dayGridMonth'
            headToolbar={{
                left:'prev,next today',
                center: 'title',
                right: 'dayGridMonth, timeGridWeek, timeGridDay'
            }}
            editable={true}
            selectable={true}
        />
    );
};

export default MyCalendar;
 // import Calendar from 'react-calendar';

// export default function MyCalendar() {
//     const[value,onChange] = useState(new Date());

//     return(
//         <div>
//             <Calendar
//                    onChange={onChange}
//                    value={value}
//                    view="month"
//                    maxDetail="month"
//                    />
//         </div>

//     );

//     }