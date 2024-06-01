
// old version
import React from 'react';

export function Calendar(props) {
    return (
        <>
        
            <div className="calendar-mobile">
                <img src="/img/calendar-icon.png" alt="calendar icon" />
                <div className="week-view">
                    <table cellspacing="15px" cellpadding="15" className="mobile-table">
                        <thead>
                            <tr>
                                <th>s</th>
                                <th>m</th>
                                <th>t</th>
                                <th>w</th>
                                <th>t</th>
                                <th>f</th>
                                <th>s</th>  
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>14</td>
                                <td>15</td>
                                <td>16</td>
                                <td>17</td>
                                <td>18</td>
                                <td>19</td>
                                <td className="today">20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
      
            </div>
            <div className="calendar">
                <h3>April 2024</h3>
                <table cellspacing="20px" cellpadding="20">
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td class="today">20</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                        </tr>
                        <tr class="next-month">
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
    )
}



// import React, {useState} from 'react';
// import {Calendar, momentLocalizer} from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// import dayjs from 'dayjs';
// import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';

// const localizer = momentLocalizer(moment);

// export function MyCalendar() {
//     const[view,setView] = useState('month');
//     const [events,setEvents] = useState([]);

//     return (
//         <div className="calendar-container">
//             <Calendar 
//                 localizer={localizer}
//                 events={events}
//                 startAccessor="start"
//                 endAccessor="end"
//                 defaultView={view}
//                 views={['month', 'week']}
//                 onView={(newView) => setView(newView)}
//                 style={{height:'100vh'}}
//             />
//         </div>
//     );
// }

// export function MyCalendar() {
//     const [value,setValue] = React.useState(dayjs());

//     return (
//         <>
        
//             <div className="calendar-mobile">
//                 <img src="/img/calendar-icon.png" alt="calendar icon" />
//                 <div className="week-view">
//                     <table cellSpacing="15px" cellPadding="15" className="mobile-table">
//                         <thead>
//                             <tr>
//                                 <th>s</th>
//                                 <th>m</th>
//                                 <th>t</th>
//                                 <th>w</th>
//                                 <th>t</th>
//                                 <th>f</th>
//                                 <th>s</th>  
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>14</td>
//                                 <td>15</td>
//                                 <td>16</td>
//                                 <td>17</td>
//                                 <td>18</td>
//                                 <td>19</td>
//                                 <td className="today">20</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
      
//             </div>
//             <div className="calendar">

//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DateCalendar value={value} onChange={(newValue) => setValue(newValue)}/>
//                 </LocalizationProvider>
                
//             </div>
//             </>
//     );
// }

