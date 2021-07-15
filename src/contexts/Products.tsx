import React, { useContext, useState } from 'react';
import { IProduct, ProductsContextType } from 'type';

const contextDefaultValues: ProductsContextType = {
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  fetchProducts: () => {},
};

export const ProductsContext = React.createContext<ProductsContextType>(contextDefaultValues);

const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>(contextDefaultValues.products);

  const fetchProducts = () =>
    fetch('http://localhost:3001/api/products/')
      .then((response) => response.json())
      .then((data) => setProducts({ ...data, id: Math.floor(Math.random() * 100) }));

  const addProduct = (newProduct: IProduct) => setProducts((products) => [...products, newProduct]);

  const removeProduct = (productId: number) =>
    setProducts((products) => products.filter((prod) => prod.id !== productId));

  return (
    <ProductsContext.Provider value={{ products, fetchProducts, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
