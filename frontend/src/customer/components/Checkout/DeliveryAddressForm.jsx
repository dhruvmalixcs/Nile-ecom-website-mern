import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
      
      const data=new FormData(e.currentTarget);
      const address={
        firstname:data.get("firstName"),
        lastname:data.get("lastName"),
        streetAddress:data.get("address"),
        city:data.get("city"),
        state:data.get("state"),
        phoneNo:data.get("PhoneNo"),
        pincode:data.get("pincode")
      }

      console.log("address",address);
    }
  return (
    <div>

    
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className=" border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "purple" }}
              size="large"
              variant="contained"
            >
              Deliver here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-5-md shadow-md p-5 ">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullwidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullwidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="city"
                    fullwidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="state"
                    fullwidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="pincode"
                    fullwidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="PhoneNo"
                    name="PhoneNo"
                    label="PhoneNo"
                    fullwidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button sx={{py:1.5}} type="submit">
                  Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
