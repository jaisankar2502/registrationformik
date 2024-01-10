import { Grid, TextField, FormLabel } from '@mui/material'
import React from 'react'

const Textbox = () => {
  const formFields = [
    { label: 'FirstName', type: 'text' },
    { label: 'LastName', type: 'text' },
    { label: 'Email', type: 'email' },
  ];

  return (
    <>
      {
        formFields.map((value) => (
          <Grid container spacing={2} padding={1} alignItems="center" >
            <Grid item xs={6} md={4} >
              <FormLabel id="demo-row-radio-buttons-group-label">{value.label}</FormLabel>
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField fullWidth id="outlined-basic" label={value.label} variant="outlined" type={value.type}  />
            </Grid>
          </Grid>
        ))
      }
    </>

  )
}

export default Textbox