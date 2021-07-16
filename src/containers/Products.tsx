import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { ProductsContext } from 'contexts/Products';
import { useState } from 'react';
import { useMemo } from 'react';

const Products: React.FC<RouteComponentProps> = () => {
  const { products, fetchProducts, addProduct, removeProduct } = useContext(ProductsContext);
  const [sortState, setSortState] = useState({ key: "", direction: "" });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  const sortedItems = useMemo(() => {
    let sortableProducts = [...products]

    if (sortState !== null) {

      sortableProducts.sort((a, b) => {

        if (a[sortState.key] < b[sortState.key]) {
          return sortState.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortState.key] > b[sortState.key]) {
          return sortState.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      })

    }
    return sortableProducts;
  }, [sortState, products])


  const handleSort = (key) => {
    let direction = "ascending"
    if (
      sortState &&
      sortState.key === key &&
      sortState.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortState({ key, direction });
  }

  return (
    <div style={{ margin: "50px" }}>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th><button /*onClick={() => handleSort("category")}*/>CATEGORY</button></th>
            <th><button onClick={() => handleSort("price")}>PRICE</button></th>
            <th>ACTIONS</th>
          </tr>
          {sortedItems.map((product) => {
            return (
              <tr key={product.id} >
                <td>{product.id}</td>
                <td> {product.name}</td>
                <td> {product.category.name}</td>
                <td>${product.price}</td>
                <td><button onClick={(e) => removeProduct(product.id)} >-</button> Select <button onClick={(e) => addProduct(product)}>+</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
