import "./App.css";
import Home from "./page/home";
// import "./assets/css/owl.carousel.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/bootsnav.css";
import "./assets/css/style.css";
import "./assets/css/linearicons.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/animate.css";
import "./assets/css/responsive.css";
// javaScript
import "./assets/js/bootstrap.min.js";
import "./assets/js/owl.carousel.min.js";
// import "./assets/js/bootsnav.js";
import "./assets/js/jquery.js";
// // import "./assets/js/custom.js";

// import $ from "jqery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCarousel from "./Componets/ProductCarousel.js";
import Checkout from "./page/Checkout.jsx";
import NavBar from "./Componets/NavBar.js";
import PayPalButton from "./Componets/PayPalButton.js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  const initialOptions = {
    clientId: "YOUR_CLIENT_ID",
    // Add other options as needed
};
  
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productID/" element={<ProductCarousel />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
