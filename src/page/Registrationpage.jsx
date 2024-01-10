import React from 'react'
import Textbox from '../components/Textbox'
import Datepickebox from '../components/Datepickebox';

import BasicSelect from '../components/BasicSelect';
import { Grid, Typography } from '@mui/material';
import Heading from '../components/Heading';
import FormRadioButton from '../components/FormRadioButton';
import FormButton from '../components/FormButton';
export const Registrationpage = () => {

  return (   
  <Grid  alignContent='center' minWidth='300px'>
    <Heading text={'Register'} variant={'h3'} />
   <Textbox/>
   <Datepickebox/>
   <BasicSelect/>
   <FormRadioButton/>
   <FormButton text={'Submit'}/>
  </Grid>
  
  )
}

export default Registrationpage

