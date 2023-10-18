import React, { useState } from "react";
import { Card,CardContent,Grid,TextField,Button } from "@mui/material";
export const Colours=()=>{
    const[clr,setClr]=useState("orange");
    const[data,setData]=useState(["Yellow","Brown"])
    return(
            <Grid container spacing={2} sx={{marginBottom:10, align:"center"}}>
                <Grid item xs={8}>
                    <TextField variant="outlined" fullWidth label="" onChange={(e)=> setClr(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <Button sx={{height:53}} variant="contained" color="success" fullWidth onClick={()=>setData([...data,clr])}>submit</Button>
                </Grid>
                {
                    data.map((item)=>
                        <Grid item xs={3}>
                            <Card sx={{bgcolor:item , height:200}}>
                                <CardContent>
                                    {item}
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }

            </Grid>
    );
}