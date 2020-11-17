import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./screens/Products";
import Footer from "./components/Footer.js";
import Shop from "./components/Shop.js";
import ProductsSlider from "./screens/ProductsSlider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetial from "./screens/ProductDetial.js";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <header>
            <Home />
          </header>
          <main>
            <section>
              <section className="products-center">
                <ProductsSlider />
              </section>
              <section className="products-center">
                <Products />
              </section>
            </section>
          </main>
        </Route>
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/product/:id" exact component={ProductDetial} />
        <Route path="/shop" component={Shop} />
      </Switch>
      <footer id="footer" className="section footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
