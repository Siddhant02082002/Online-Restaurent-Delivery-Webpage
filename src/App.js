import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CardProvider";
function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const shownCartHandler = () => {
    setCartIsShown(true);
  }
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose ={hideCartHandler}/>}
      <Header onShowCart={shownCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
