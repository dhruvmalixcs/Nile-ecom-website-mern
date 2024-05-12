import { Avatar, Grid, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p>Ram</p>
              <p>April 5,2022</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" />
          <p>
            The sun sets late during the summer months, providing a beautiful
            backdrop for outdoor activities.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
