import React, { useState } from "react";
import { IoBagHandle } from "react-icons/io5"; // Importa un ícono de bolsa desde react-icons

export function Header({ allProducts, setAllProducts }) {
  const [active, setActive] = useState(false);

  const totalQuantity = allProducts.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const total = allProducts.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);

  const removeFromCart = (productId) => {
    const updatedCart = allProducts.filter((product) => product.id !== productId);
    setAllProducts(updatedCart);
  };

  const clearCart = () => {
    setAllProducts([]);
  };

  return (
    <header>
      <h1>Tienda</h1>

      <div className="container-icon" onClick={() => setActive(!active)}>
        <IoBagHandle className="icon-bag" /> {/* Utiliza el nuevo ícono de bolsa */}
        <div className="count-products">
          <span id="contador-productos">{totalQuantity}</span>
        </div>

        <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
          {allProducts.length ? (
            <div className="row-product">
              {allProducts.map((product) => (
                <div className="cart-product" key={product.id}>
                  <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">
                      {product.quantity}
                    </span>
                    <p className="titulo-producto-carrito">
                      {product.nameProduct}
                    </p>
                    <span className="precio-producto-carrito">
                      ${product.price}
                    </span>
                    <button
                      className="remove-product"
                      onClick={() => removeFromCart(product.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <button className="btn-clear-all" onClick={clearCart}>
                Vaciar el Carrito
              </button>
            </div>
          ) : (
            <p className="cart-empty">El Carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
}
