import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Checkout({ products }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">
          Distribution Center Side
        </Typography>
      </Grid>
      {products.map(product => (
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Box p={3}>
              <Grid container>
                <Grid item xs={12}>
                  Product Name: {product.productName}
                </Grid>
                <Grid item xs={12}>
                   Quantity: {product.count}
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Checkout;
