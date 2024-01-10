import React from 'react'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
const Heading = ({text, variant}) => {
  return (
   <Grid container alignItems="center" justifyContent="center">
  <Typography variant={variant} padding={2}>
    {text}
  </Typography>
</Grid>
  )
 
}

export default Heading