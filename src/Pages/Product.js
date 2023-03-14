import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import ProductCardLoading from '../Components/ProductCardLoading';

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getProduct();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <ProductCardLoading />
      ) : (
        <ProductCard key={product.id} product={product} />
      )}
    </>
  );
};

export default Product;
