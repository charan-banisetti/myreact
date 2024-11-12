import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductDetailPage = ({ products }) => {
  const { id } = useParams(); // Get product ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id));

  const navigate = useNavigate(); // Hook to navigate back to the previous page

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate(-1)}>Go Back</button> {/* Back button */}
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;