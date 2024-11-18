import React, { useState } from "react";
// Task 6: Create the AddProductForm Component
const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price), description };
    addProduct(newProduct);
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;