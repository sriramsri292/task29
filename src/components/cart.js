import React, { useEffect } from "react";
import { useCart } from "./CartContextProvider";

export default function Cart() {
  const { addCart = [], handleQuantity, setAddCart } = useCart(); // Update to use "addCart" instead of "addcart"

  useEffect(() => {
    setAddCart(addCart); // Update the context state with the latest addCart data
  }, [addCart, setAddCart]);

  if (!Array.isArray(addCart) || addCart.length === 0) {
    return (
      <div>
        <h1>Your cart is empty buddy !!!!!</h1>
      </div>
    );
  }

  return (
    <div className="bbbb">
      <h2>Your Cart</h2>
      <ul>
        {addCart.map((product, i) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Quantity: {product.quantity}</p>
            {/* You can display more product details as needed */}
            <img src={product.thumbnail} alt={product.title} />
            <button onClick={() => handleQuantity(product.id, "decrement")}>Decrement quality</button>
            <button onClick={() => handleQuantity(product.id, "increment")}>Increment quality</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
