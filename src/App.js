import Categories from "./views/listings/Categories/Categories";
import Products from "./views/listings/Products/Products";
import Product from "./views/listings/Products/Product/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/categories/:id/products" children={<Products />} />
          <Route path="/products/:id" component={Product} />
          <Route path="/" component={Categories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
