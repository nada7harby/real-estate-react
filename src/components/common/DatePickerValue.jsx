import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../../../src/styles/components/date_pickers.css'
export default function DatePickerValue({value , onChange}) {
  // const [value, setValue] = React.useState(dayjs('2022-04-17'));
  // console.log(value , onchange);
  return (

<DatePicker
  sx={{width : "100%"}}
  value={value}
  onChange={onChange}
  slotProps={{
    calendarHeader : {
      className : "calender_header my-0"
    }
  }}
  
/>
  );
}

