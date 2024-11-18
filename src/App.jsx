// Task 2: Create the App Component
import React, { useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  // Manage products state with useState
  const [products, setProducts] = useState([
    { id: 1, name: "Air Conditioner", price: 1999.99, description: "High quality air conditioner unit" },
    { id: 2, name: "Refrigerator", price: 899.99, description: "High quality Samsung smart fridge" },
    { id: 3, name: "Stove", price: 699.99, description: "High quality electric stove" },
  ]);

// Function to add a new product
const addProduct = (newProduct) => {
  setProducts([...products, { ...newProduct, id: products.length + 1 }]);
};

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;