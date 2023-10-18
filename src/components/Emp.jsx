import React, { useState } from "react";
import { Card, CardContent, Button, TextField, Grid } from "@mui/material";

export const Emp = () => {
  const [input, setInput] = useState(" ");
  const [name, setName] = useState([" Revan", "Suresh"]);
  return (
    <Grid container spacing={2} sx={{marginTop:10}}>
      <Grid item xs={8} >
        <TextField
          variant="outlined"
          fullWidth
          label="Add Names"
          onChange={(e) => setInput(e.target.value)
          
          }
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          fullWidth
          sx={{height:53}}
          onClick={() => setName([...name, input])}
        >
          submit
        </Button>
      </Grid>

      {name.map((item) => (
        <Grid item xs={3}>
          <Card sx={{ bgcolor: "skyblue", height: 200 }}>
            <CardContent>
              <h1>MR .{item.toUpperCase()}</h1>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
