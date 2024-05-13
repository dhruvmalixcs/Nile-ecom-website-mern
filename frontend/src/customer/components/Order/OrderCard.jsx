import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className=" w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxup9-BfJ41xFg1ck-ym4CcDv58-C4iY6rw&s"
            />
            <div className="ml-5 space-y-2">
              <p>Balenciaga Jacket</p>
              <p className="opacity-50 text-xs fot-semibold ">size : L</p>
              <p className="opacity-50 text-xs fot-semibold ">color : Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$1234</p>
        </Grid>
        <Grid item xs={4}>
          {true && 
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>delivered on march 3</span>
              </p>
              <p className="text-xs">Yout item has been delivered</p>
            </div>
          }
          {false && (
            <p>
              <span>Expected delivery on 5 march</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
