import React, { useState } from 'react';
import { IProduct, ICartItem, ProductsContextType } from 'type';

const contextDefaultValues: ProductsContextType = {
  products: [],
  cartItems: [],
  addProduct: () => { },
  removeProduct: () => { },
  fetchProducts: () => { },
};

export const ProductsContext = React.createContext<ProductsContextType>(contextDefaultValues);

const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>(contextDefaultValues.products);
  const [cartItems, setCartItems] = useState<ICartItem[]>(contextDefaultValues.cartItems);

  const fetchProducts = () =>
    fetch('http://localhost:3001/api/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data));

  const addProduct = (newItem) => {
    setCartItems(prev => {
      const foundItem = prev.find((item) => item.id === newItem.id);

      if (foundItem) {
        return prev.map(item =>
          item.id === newItem.id
            ?
            { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }


  const removeProduct = (productId) => {
    setCartItems(prev =>

      prev.reduce((ack, item) => {
        if (item.id === productId) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ICartItem[])
    );
  }


  return (
    <ProductsContext.Provider value={{ products, cartItems, fetchProducts, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
