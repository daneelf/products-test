import Categories from "./views/listings/Categories/Categories";
import Products from "./views/listings/Products/Products";
import Product from './views/listings/Products/Product/Product';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/categories/:id/products" children={<Products />} />
        <Route path="/products/:id" component={Product} />
        <Route path="/" component={Categories} />
      </Switch>
    </Router>
  );
}

export default App;
