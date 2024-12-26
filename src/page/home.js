import React from "react";
// import '../App.css';
import "./NewArrivals.js";
import "../Componets/ProductCarousel.js";
import "../Componets/PopularProducts.js";
import BlodPage from "./BlodPage.js";
import NewArrivals from "./NewArrivals";
import ProductCarousel from "../Componets/ProductCarousel.js";
import PopularProducts from "../Componets/PopularProducts.js";
import NavBar from "../Componets/NavBar.js";
import Collection from "../Componets/Collection.jsx";
import Feature from "../Componets/Feature.jsx";
import NewLetter from "../Componets/NewLetter.jsx";
import Footer from "../Componets/Footer.jsx";
import Clients from "../Componets/Clients.jsx";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Slider from "../Componets/Slider.jsx";

const Home = () => {
  return (
    <div>
      <header id="home" class="welcome-hero"> 
        {/* <ToastContainer /> */}
      </header>
      {/* <Slider /> */}
      <PopularProducts />

      <section id="new-arrivals" className="new-arrivals">
        <div className="container">
          <NewArrivals />
        </div>
      </section>
      <Collection />
      <Feature />
      <BlodPage />
      <Clients />
      <NewLetter />
      <Footer />
      
    </div>
  );
};
export default Home;
