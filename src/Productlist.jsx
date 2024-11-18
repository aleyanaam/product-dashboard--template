// Task 3: Create the ProductList Component
import React from "react";
import ProductItem from "./ProductItem";


//Task 5 implementing keys
//The ProductList component is responsible for rendering a list of products passed down as props.
const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
            <li key={product.id} >
            <ProductItem product={product} />
            </li>
        ))}
        </ul>
    </div>
  );
};

export default ProductList;