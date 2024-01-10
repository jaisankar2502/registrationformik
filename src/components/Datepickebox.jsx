import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormLabel, Grid } from '@mui/material';

function Datepickebox() {
  
    return (
    <Grid container spacing={2} padding={1}  alignItems="center">
      <Grid item xs={6} md={4}>
        <FormLabel>Date of Birth</FormLabel>

      </Grid>
      <Grid item xs={6} md={8}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
      </Grid>

    </Grid>
 
  )
  
}

export default Datepickebox