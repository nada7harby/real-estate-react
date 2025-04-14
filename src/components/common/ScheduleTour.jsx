import * as React from 'react';
import Stack from '@mui/material/Stack';
import DatePickerValue from './DatePickerValue';
import TimePickerValue from './TimePickerValue';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Inputs from './Inputs';
import Grid from '@mui/material/Grid';
import img1 from '../../assets/images/img-1.jpg';
import '../../styles/components/schedule_tour.css';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

export default function ScheduleTour() {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      date: null,
      time: null,
      name: '',
      phone: '',
      email: '',
      message: '',
    }
  });

  const handleDateChange = (newDate) => {
    setValue('date', newDate);
    console.log(newDate?.$d?.toDateString());
  };

  const handleTimeChange = (newTime) => {
    setValue('time', newTime);
    console.log('handle time Change');
    console.log(newTime?.format('hh:mm A'));
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div>
      <div className="text-xl font-bold mt-10 mb-5 ">
        Schedule A Tour
      </div>
      <div className="shedule__tour p-4 flex my-10">
        <div className="w-3/4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} columns={10}>
  <Grid item xs={5}>
      <Controller
        name="date"
        control={control}
        rules={{ required: 'Date is required' }}
        render={({ field, fieldState }) => (
          <>
            <DatePickerValue
              value={field.value}
              onChange={(newDate) => {
                field.onChange(newDate);
                handleDateChange(newDate);
              }}
            />
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </Grid>
  <Grid item xs={5}>
    <Controller
      name="time"
      control={control}
      rules={{ required: 'Time is required' }}
      render={({ field, fieldState }) => (
        <>
          <TimePickerValue
            value={field.value}
            onChange={(newTime) => {
              field.onChange(newTime);
              handleTimeChange(newTime);
            }}
          />
          {fieldState.error && (
            <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
          )}
        </>
      )}
    />
  </Grid>
</Grid>
              <Inputs control={control} />
            </form>
          </LocalizationProvider>
        </div>
        <div className="w-1/4 px-2">
          <div className=''>
            <img className="object-cover rounded-xl m-3" src={img1} />
          </div>
          <div className="info px-2">
            <h6 className='text-md font-normal'>Discover your dream property</h6>
            <p>
              Immerse yourself in the captivating ambiance of our properties. 
              <span className='text-lg'> Book a personalized tour</span> to explore the exquisite beauty and unique features of our property.
              Our knowledgeable staff will guide you through the property, answering any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}