import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Checkout from "./Checkout";

function App() {
  const [products, setProducts] = useState([
    { id: 1, count: 0, productName: "Product 1" },
    { id: 2, count: 0, productName: "Product 2" }
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ProductList products={products} setProducts={setProducts} />
            )}
          />
          <Route
            exact
            path="/checkout"
            render={() => <Checkout products={products} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
