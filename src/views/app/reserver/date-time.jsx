// import React, {useState, useEffect, useMemo} from "react";
// import { DatePicker, LocalizationProvider, renderTimeViewClock } from '@mui/x-date-pickers';
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import { StaticDateTimePicker } from "@mui/x-date-pickers";
// import { TimeField } from "@mui/x-date-pickers/TimeField";
// import dayjs from "dayjs";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// const DateTimeReservation = ({match}) => {


//   const minDate = useMemo(() => dayjs().add(3, "day"), []);
//   const maxDate = useMemo(() => dayjs().add(1, "year"), []);

//   const minTime = useMemo(() => dayjs().hour(9).minute(0), []); // 09:00 AM
//   const maxTime = useMemo(() => dayjs().hour(18).minute(0), []); // 06:00 PM


//   const shouldDisableDate = (date) => {
//     const day = date.day();
//     return day === 5 || day === 6;
//   };

//   const disabledTimes = {
//     "2025-04-01": ["10:00", "14:30"], // Disable 10:00 AM & 2:30 PM on April 1, 2025
//     "2025-04-03": ["09:00", "11:15"], // Disable 9:00 AM & 11:15 AM on April 3, 2025
//   };

//   // const shouldDisableTime = (value, view) => {
//   //   if (view !== "hours" && view !== "minutes") return false;
//   //   const dateKey = value.format("YYYY-MM-DD"); // Convert to 'YYYY-MM-DD'
//   //   const timeStr = value.format("HH:mm"); // Convert to 'HH:mm'
//   //   return disabledTimes[dateKey]?.includes(timeStr);
//   // };

//   const allowedHours = [9, 10, 11, 14, 16, 18];

//   // ❌ Disable hours not in the allowed list
//   const shouldDisableTime = (value, view) => {
//     if (view === "hours") {
//       return !allowedHours.includes(value.hour());
//     }
//     return false;
//   };


//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs} >
//       <div className="w-full flex justify-center items-center">
//         <div className="max-w-[500px] lg:min-w-[500px]">
//           <StaticDateTimePicker
//             viewRenderers={{
//               hours: null,
//               minutes: null,
//               seconds: null,
//             }}
//             slots={{
//               time: TimeField, // 🟢 Forces a dropdown list for time selection
//             }}
//             maxDate={maxDate}
//             minDate={minDate}
//             minTime={minTime}
//             maxTime={maxTime}
//             ampm={false}
//             shouldDisableDate={shouldDisableDate}
//             shouldDisableTime={shouldDisableTime}
//           />
//         </div>
//       </div>
//     </LocalizationProvider>
//   ); 
// };

// export default DateTimeReservation;



import React, { useState, useMemo } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MenuItem, Select } from "@mui/material";

const MyComponent = () => {

  const getNextValidDate = (date) => {
    let newDate = date;
    while (newDate.day() === 5 || newDate.day() === 6) { // 5 = Friday, 6 = Saturday
      newDate = newDate.add(1, "day");
    }
    return newDate;
  };

  const rawMinDate = useMemo(() => dayjs().add(3, "day"), []);
  const minDate = useMemo(() => getNextValidDate(rawMinDate), [rawMinDate]); // skip week-end
  const maxDate = useMemo(() => dayjs().add(1, "year"), []);

  const [selectedDate, setSelectedDate] = useState(minDate);
  const [selectedHour, setSelectedHour] = useState(null);

  const shouldDisableDate = (date) => {
    const day = date.day();
    return day === 5 || day === 6;
  };

  // List of available hours (modify as needed)
  const availableHours = [9, 10, 11, 14, 16, 18];

  // Handle hour selection
  const handleHourChange = (event) => {
    const hour = event.target.value;
    setSelectedHour(hour);
    setSelectedDate(selectedDate.hour(hour).minute(0)); // Update date with new hour
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <div className="w-full flex justify-center items-center">
        <div className="max-w-[500px] lg:min-w-[500px]">
          {/* 📅 Date Picker */}
          <StaticDatePicker
            value={selectedDate}
            shouldDisableDate={shouldDisableDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            minDate={minDate}
            maxDate={maxDate}
            sx={{
              "& .MuiPickersDay-today": {
                border: "none", // ❌ Removes the default circle around today's date
              },
            }}
            defaultValue={minDate}
          />

          {/* ⏰ Custom Time Selection as a Dropdown */}
          <Select
            value={selectedHour || ""}
            onChange={handleHourChange}
            displayEmpty
            fullWidth
            style={{ marginTop: 20 }}
          >
            <MenuItem value="" disabled>Select a time</MenuItem>
            {availableHours.map((hour) => (
              <MenuItem key={hour} value={hour}>
                {`${hour}:00`}
              </MenuItem>
            ))}
          </Select>
        </div>
       </div>
    </LocalizationProvider>
  );
};

export default MyComponent;
