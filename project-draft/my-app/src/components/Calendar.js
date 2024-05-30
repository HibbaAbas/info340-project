import React from 'react';
import dayjs from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';



export function MyCalendar() {
    const [value,setValue] = React.useState(dayjs());

    return (
        <>
        
            <div className="calendar-mobile">
                <img src="/img/calendar-icon.png" alt="calendar icon" />
                <div className="week-view">
                    <table cellSpacing="15px" cellPadding="15" className="mobile-table">
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

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar value={value} onChange={(newValue) => setValue(newValue)}/>
                </LocalizationProvider>
                
            </div>
            </>
    );
}

