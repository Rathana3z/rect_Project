import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../feature/productSlice/productSlice";
import { addToCart } from "../feature/cartSlice/cartSlice";


function NewArrivals() {
  
  const dispatch = useDispatch()
  const { products, productsStatus } =useSelector((state) => state.products);
  
  useEffect(() =>{
    // call to api
    if(productsStatus === "idle"){
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus])
  
  if(productsStatus === "loading"){
    return(
      <p>Loading ...</p>
    )
  }
  // error
  if(productsStatus === "failure"){
    return(
      <p>error: {productsStatus} </p>
    )
  }

  const handleAddToProduct = (product) => {
    dispatch(addToCart(product));
    console.log("Product added to cart:", product);
  };
  
  return (
    <section id="new-arrivals" className="new-arrivals">
      <div className="container">
        <div className="section-header">
          <h2>New Arrivals</h2>
        </div>
        {/* <!--/.section-header--> */}
        <div className="new-arrivals-content">
          {/* First row: First 4 products */}
          <div className="row">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src={product.image}
                      alt="new-arrivals images"
                      style={{ maxHeight: "250px", objectFit: "contain" }} // Ensure image fits nicely
                    />
                    <div className="single-new-arrival-bg-overlay"></div>
                    <div className="sale bg-1">
                      <p>sale</p>
                    </div>
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart"></span>
                        <Link  onClick={() => handleAddToProduct(product)}>
                          add <span>to</span> cart
                        </Link>
                        <Link to={`/product/${product.id}/`}>
                          <button  style={{marginLeft: "20px"}}>
                            View
                          </button>
                        </Link>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart"></span>
                        <span className="lnr lnr-frame-expand"></span>
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">{product.title}</a>
                  </h4>
                  <p className="arrival-product-price">
                    ${product.price.toFixed(6)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Second row: Last 4 products */}
          <div className="row">
            {products.slice(4, 8).map((product) => (
              <div key={product.id} className="col-md-3 col-sm-4">
                <div className="single-new-arrival">
                  <div className="single-new-arrival-bg">
                    <img
                      src={product.image}
                      alt="new-arrivals images"
                      style={{ maxHeight: "250px", objectFit: "contain" }} // Ensure image fits nicely
                    />
                    <div className="single-new-arrival-bg-overlay"></div>
                    <div className="sale bg-1">
                      <p>sale</p>
                    </div>
                    <div className="new-arrival-cart">
                      <p>
                        <span className="lnr lnr-cart"></span>
                        <Link to={`/product/${product.id}`} onClick={() => handleAddToProduct(product)}>
                          add <span>to</span> cart
                        </Link>
                      </p>
                      <p className="arrival-review pull-right">
                        <span className="lnr lnr-heart"></span>
                        <span className="lnr lnr-frame-expand"></span>
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">{product.title}</a>
                  </h4>
                  <p className="arrival-product-price">
                    ${product.price.toFixed(6)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!--/.container--> */}
    </section>
  );
}

export default NewArrivals;
