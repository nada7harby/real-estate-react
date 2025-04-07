import * as React from 'react';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue() {
  const [value, setValue] = React.useState(dayjs('2022-04-17T10:00:00'));

  return (
    <TimePicker 
    
    slotProps={{
      textField : {
        sx:{
          borderRadius : "40px",
        }
      }
    }}
  
     /> 
  );
}

