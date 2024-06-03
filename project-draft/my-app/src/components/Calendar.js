import React, {useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';



const MyCalendar = () => {
    const calendarRef = React.useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const calendarApi = calendarRef.current?.getApi();
            if(!calendarApi) return;
            calendarApi.updateSize();
            if(window.innerWidth < 768) {
                calendarApi.changeView('timeGridWeek');
            }else{
                calendarApi.changeView('dayGridMonth');
            }
            if (calendarApi) {
                calendarApi.updateSize();
            }
        };


        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="calendar">
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

        </div>
        
    );
};

export default MyCalendar;
