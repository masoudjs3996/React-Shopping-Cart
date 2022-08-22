import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./common/cart/Cart";
import Header from "./common/header/Header";
import Data from "./conponents/flashDeals/Data";
import Sdata from "./conponents/shop/Sdata";
import Pages from "./Pages/pages";
import Footer from "./common/footer/Footer"

function App() {
  // stop1 fetch data from database
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCardItem] = useState([]);
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <Header cartItem={cartItem} />
      <Switch>
        <Route path="/" exact>
          <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
        </Route>
        <Route path="/cart" exact>
          <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
