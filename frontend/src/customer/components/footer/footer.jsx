import { Button } from "@mui/base";
import { Grid, Typography } from "@mui/material";
import React from "react";

const footer = () => {
  return (
    <div>
      <Grid
        className='bg-black text-white text-center mt-10'
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
      <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant='h6'>Company</Typography>
            <div><Button className="pb-5" variant='h6' gutterBottom>about</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>blog</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>press</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>jobs</Button></div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant='h6'>Company</Typography>
            <div><Button className="pb-5" variant='h6' gutterBottom>about</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>blog</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>press</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>jobs</Button></div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant='h6'>Company</Typography>
            <div><Button className="pb-5" variant='h6' gutterBottom>about</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>blog</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>press</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>jobs</Button></div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant='h6'>Company</Typography>
            <div><Button className="pb-5" variant='h6' gutterBottom>about</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>blog</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>press</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>jobs</Button></div>
      </Grid>
      <Grid className="pt-20" item xs={12} >
            <Typography className="pb-5" variant='h6'>Company</Typography>
            <div><Button className="pb-5" variant='h6' gutterBottom>about</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>blog</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>press</Button></div>
            <div><Button className="pb-5" variant='h6' gutterBottom>jobs</Button></div>
      </Grid>
      </Grid>
    </div>
  );
};

export default footer;
