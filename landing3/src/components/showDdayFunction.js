import { useState, useEffect } from 'react';
import flatpickr from 'flatpickr';

const ShowDdayFunction = () => {
    const [startDate, setStartDate] = useState('2023-12-16');
    const [endDate, setEndDate] = useState('2023-12-17');
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [calendar, setCalendar] = useState(null);

    useEffect(() => {
        const initialStartDate = document.getElementById('startDayInput').value;
        const initialEndDate = document.getElementById('endDayInput').value;
        setStartDate(initialStartDate);
        setEndDate(initialEndDate);

        const cal = flatpickr("#calendar", {
            mode: "range",
            defaultDate: [initialStartDate, initialEndDate],
            onClose: (selectedDates) => {
                if (selectedDates[0]) {
                    setStartDate(formatDate(selectedDates[0]));
                }
                if (selectedDates[selectedDates.length - 1]) {
                    setEndDate(formatDate(selectedDates[selectedDates.length - 1]));
                }
            }
        });
        setCalendar(cal);

        return () => {
            cal.destroy();
        }
    }, []);

    const toggleCalendar = () => {
        setCalendarVisible(!calendarVisible);
        if (!calendarVisible && calendar) {
            calendar.open();
        } else if (calendarVisible && calendar) {
            calendar.close();
        }
    };

    const formatDate = (date) => {
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    return (            
        <div className="icon">
            <div style={{display: 'none'}}>
                <input id="startDayInput" type="text" value={startDate} readOnly />
                <input id="endDayInput" type="text" value={endDate} readOnly />
            </div>
            <button className="calendar-button" onClick={toggleCalendar}>
                <i id="calendarIcon" className="bi bi-calendar-fill"></i>
            </button>
            <div className="calendar" id="calendar"></div>
        </div>
    );
}

export default ShowDdayFunction;
