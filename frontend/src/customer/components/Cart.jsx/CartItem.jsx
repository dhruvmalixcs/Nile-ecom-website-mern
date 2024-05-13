import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Button } from "@mui/base";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="object-cover object-top w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxup9-BfJ41xFg1ck-ym4CcDv58-C4iY6rw&s"
            alt="balenciaga"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">balenciaga</p>
          <p className="opacity-70">Size-L,White</p>
          <p className="opacity-70 mt-2">seller - Kanye West</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-4">
            <p className="font-semibold">1999</p>
            <p className="opacity-50 line-through">2111</p>
            <p className="text-green-600 font-semibold">10%</p>
          </div>
        </div>
       
      </div>
       <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineOutlinedIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-md ">3</span>
              <IconButton sx={{color:"RGB(145 85 253)"}}>
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            
          </div>
          <div>
            <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
