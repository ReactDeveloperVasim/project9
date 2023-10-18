import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

export const Home = () => {
  const [cat, setCat] = useState("");
  const [data, setData] = useState(["Fashion", "Cosmetics", "Kids", "Toys"]);
  return (
    <Grid container spacing={2} >
      <Grid item xs={8}>
        <TextField
          variant="outlined"
          label="Add Category"
          fullWidth
          onChange={(e) => setCat(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          sx={{ height: 53 }}
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => setData([...data, cat])}
        >
          submit
        </Button>
      </Grid>
      {data.map((item) => (
        <Grid item xs={2}>
          <Button variant="outlined" color="warning" fullWidth>
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
