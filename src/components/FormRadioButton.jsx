import React from 'react';
import { Grid, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';


const FormRadioButton = () => {
  return (
<Grid container spacing={5} padding={1} alignItems="center">
  <Grid item xs={12} sm={6} md={3}>
    <FormLabel>Gender</FormLabel>
  </Grid>
  <Grid item xs={12} sm={6} md={9}>
    <RadioGroup row name="row-radio-buttons-group"  style={{ marginLeft: '1px' }} >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
       <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </Grid>
</Grid>

  );
};

export default FormRadioButton;
