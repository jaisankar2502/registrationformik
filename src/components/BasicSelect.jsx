import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormLabel, Grid } from "@mui/material";

const BasicSelect = () => {
  const ageArray = Array.from({ length: 100 }, (_, index) => index + 1);
  return (
    <Grid container spacing={2} padding={1} alignItems="center">
      <Grid item xs={4} md={4}>
        <FormLabel>Age</FormLabel>
      </Grid>
      <Grid item xs={8} md={8}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
          fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            {ageArray.map((age) => (
              <MenuItem value={age}>{age}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default BasicSelect;
