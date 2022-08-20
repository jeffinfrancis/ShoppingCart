import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContext from "./Context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <>
      <Router>
        <CartContext>
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/checkout/" element={<Checkout />} />
          </Routes>
        </CartContext>
      </Router>
    </>
  );
}

export default App;
