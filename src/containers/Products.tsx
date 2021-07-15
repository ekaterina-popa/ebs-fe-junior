import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ProductsContext } from 'contexts/Products';
import { useContext, useEffect } from 'react-router/node_modules/@types/react';

/*interface Props{
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}*/

const Products: React.FC<RouteComponentProps> = () => {
  const { products, fetchProducts } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div>
            <p>{product.id}</p>
            <p> {product.name}</p>
            <p> {product.category}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default Products;
