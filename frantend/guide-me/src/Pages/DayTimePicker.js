import React from 'react'
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import './DayTime.css';



export default function DayTimePicker() {
  const [value, setValue] = React.useState(new Date()); 

  return (
    <div className="temp">
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="portrait" openTo="day"
      value={value} 
      onChange={(newValue) => {
        setValue(newValue);
        console.log(newValue.getDay)
      }}
      
      renderInput={(params) => <TextField {...params} />}

      />
      </LocalizationProvider> */}
    </div>
  );
}