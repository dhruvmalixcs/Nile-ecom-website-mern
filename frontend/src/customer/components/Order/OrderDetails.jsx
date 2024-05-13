import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-5">
      <div>
        <h1 className="font-bold text-xl py-7 ">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
      {[1,1,1,1].map((item)=> <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxup9-BfJ41xFg1ck-ym4CcDv58-C4iY6rw&s"
              ></img>
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Balenciaga Jacket</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>size : L</span> <span>color : Black</span>
                </p>
                <p className=" ">seller: Kanye West</p>
                <p>1233 $</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon
                sx={{ fontSize: "2rem" }}
                className="text-5xl px-2"
              />
              <span>Rate and Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
       


      </Grid>
    </div>
  );
};

export default OrderDetails;
