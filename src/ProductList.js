import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Checkout({ products, setProducts }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">User Side App</Typography>
      </Grid>
      {products.map((product, index) => (
        <Grid item xs={12} key={index}>
          <Paper elevation={3}>
            <Box p={3}>
              <Grid container>
                <Grid item xs={7}>
                  #{product.id}
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="h4">
                    Name:- {product.productName}
                  </Typography>
                  <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <span
                      onClick={e => {
                        setProducts(products => {
                          let arr = [...products];
                          console.log("arr :", arr);
                          arr[index].count++;
                          return [...arr];
                        });
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="secondary"
                        style={{ marginRight: "10px" }}
                      >
                        +
                      </Button>
                    </span>
                    Quantity {product.count}
                    <span
                      onClick={e => {
                        setProducts(products => {
                          let arr = [...products];
                          arr[index].count--;
                          console.log("arr :", arr);
                          return [...arr];
                        });
                      }}
                    >
                      <Button
                        variant="outlined"
                        color="secondary"
                        style={{ marginLeft: "10px" }}
                      >
                        -
                      </Button>
                    </span>
                  </div>
                  <div>
                    <Link to="/checkout">
                      <Button variant="contained" color="primary">
                        Order
                      </Button>
                    </Link>
                  </div>
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
