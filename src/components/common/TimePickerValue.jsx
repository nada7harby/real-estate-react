import * as React from 'react';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerValue({value , onChange}) {
  // const [value, setValue] = React.useState(dayjs('2022-04-17T10:00:00'));
  return (
    <TimePicker 
    value={value}
    onChange={onChange}
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

