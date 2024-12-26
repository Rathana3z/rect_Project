import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const [totalQualities, setTotalQualities] = useState(0)

  const carts = useSelector((store) => store.cart.items)
  
  
  const {items,  totalAmount} = useSelector((state) => state.cart)
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQualities(total);
  }, [carts]);
  
  return (
    <div className="top-area">
      <div className="header-area">
        {/* Start Navigation */}
        <nav
          className="navbar navbar-default bootsnav navbar-sticky navbar-scrollspy"
          data-minus-value-desktop="70"
          data-minus-value-mobile="55"
          data-speed="1000"
        >
          {/* Start Top Search */}
          <div className="top-search">
            <div className="container">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times"></i>
                </span>
              </div>
            </div>
          </div>
          {/* End Top Search */}

          <div className="container">
            {/* Attribute Navigation */}
            <div className="attr-nav">
              <ul>
                <li className="search">
                  <button className="btn btn-link">
                    <span className="lnr lnr-magnifier"></span>
                  </button>
                </li>
                <li className="nav-setting">
                  <Link to="/">
                    <span className="lnr lnr-cog"></span>
                  </Link>
                </li>
                <li className="dropdown">
                  <button
                    className="btn btn-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="lnr lnr-cart"></span>
                    <span className="badge badge-bg-1"> {totalQualities} </span>
                  </button>
                  <ul className="dropdown-menu cart-list s-cate">
                    {items.length > 0 ? (
                      items.map((product, index) => (
                        <li key={index} className="single-cart-list">
                          <Link to="/product" className="photo">
                            <img
                              src={product.image}
                              className="cart-thumb"
                              alt={product.name}
                            />
                          </Link>
                          <div className="cart-list-txt">
                            <h6>
                              <Link to="/product">{product.name}</Link>
                            </h6>
                            <p>
                              {product.quantity} x{" "}
                              <span className="price">${product.price * product.quantity}</span>
                            </p>

                           
                          </div>
                          
                          <div className="cart-close">
                            <span className="lnr lnr-cross">
                              
                            </span>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="single-cart-list">
                        <p>Your cart is empty!</p>
                      </li>
                    )}
                    <div>
                      Total: {totalAmount} <br/>
                      <Link to={"/checkout"}>
                      <button>
                      <p> View Check Cart </p>
                      </button>
                      </Link>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
            {/* End Attribute Navigation */}

            {/* Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" to="/">
                furn.
              </Link>
            </div>

            {/* Collect Nav Links */}
            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-center"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className="scroll active">
                 <Link to={"/"}>
                    Home
                 </Link>
                </li>
                <li className="scroll">
                  <a href="#new-arrivals">New Arrival</a>
                </li>
                <li className="scroll">
                  <a href="#feature">Features</a>
                </li>
                <li className="scroll">
                  <a href="#blog">Blog</a>
                </li>
                <li className="scroll">
                  <a href="#newsletter">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navigation */}
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default NavBar;
