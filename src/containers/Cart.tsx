import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { ProductsContext } from 'contexts/Products';

const Cart: React.FC<RouteComponentProps> = () => {

  const { cartItems, addProduct, removeProduct } = useContext(ProductsContext);

  console.log(cartItems);
  return (
    <div style={{ margin: "50px" }}>
      {cartItems.length === 0 ?
        (<h3>No items in the Cart</h3>)
        :
        (
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>ACTIONS</th>
              </tr>
              {cartItems.map((product) => {
                return (
                  <tr key={product.id} >
                    <td>{product.id}</td>
                    <td> {product.name}</td>
                    <td> {product.category.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td><button onClick={(e) => removeProduct(product.id)} >-</button> Select <button onClick={(e) => addProduct(product)}>+</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )
      }
    </div>
  );
};

export default Cart;
