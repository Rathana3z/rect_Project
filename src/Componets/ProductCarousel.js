import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../feature/productSlice/productSlice";
import NavBar from "./NavBar";

function ProductCarousel() {
  
  // product ID
  const {productID} = useParams();
  const dispatch = useDispatch();
  const {productDetail, productDetailStatus} = useSelector((state) => state.products);

  useEffect(() =>{
    // check condition
    if(productDetailStatus === "idle" || productDetailStatus.id !== parseInt(productID)){
      dispatch(fetchProductDetail(productID));
    }
  },[dispatch, productID])

  // if wrong id
  if(!productID){
    return(
      <p>Invaild product detail...</p>
    )
  }
  // loading page
  if(productDetailStatus === "loading"){
    return(
      <p>Loading ....</p>
    )
  }

  return (
    <div className="carousel-inner" role="listbox">
      <div >
            <div className="single-slide-item">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    {/* Left Column: Product Description */}
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>{productDetail?.title}</h2>
                          <p>{productDetail?.description}</p>
                          <div className="packages-price">
                            <p>
                              $ {productDetail.price}
                              <del>${productDetail?.price}</del> {/* Example discount */}
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            // onClick={() => alert(`Added ${product.title} to cart`)}
                          >
                            <span className="lnr lnr-plus-circle"></span>
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Right Column: Product Image */}
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img
                            src={productDetail?.image}
                            alt={productDetail?.title}
                            style={{ maxWidth: "100%", objectFit: "contain" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default ProductCarousel;
