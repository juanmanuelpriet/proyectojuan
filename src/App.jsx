import React, { useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProduct, setCountProduct] = useState(0);

  return (
    <div className="App">
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProduct={countProduct}
        setCountProduct={setCountProduct}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProduct={countProduct}
        setCountProduct={setCountProduct}
      />
    </div>
  );
}

export default App;
