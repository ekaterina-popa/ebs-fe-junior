import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsProvider from 'contexts/Products';
import Header from 'components/Header';
import Products from './containers/Products';
import Cart from 'containers/Cart';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ProductsProvider>
        <Switch>
          <Route exact path="/" render={(props) => <Products {...props} />} />
          <Route exact path="/cart" render={(props) => <Cart {...props} />} />
        </Switch>
      </ProductsProvider>
    </div>
  );
};

export default App;
