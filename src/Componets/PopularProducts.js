import React, { useEffect, useState } from "react";
import './css/PopularProducts.css';

function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Fake Store API
    fetch("https://fakestoreapi.com/products?limit=3") // Adjust the limit based on your design
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section id="populer-products" className="populer-products">
      <div className="container">
        <div className="populer-products-content">
          <div className="row">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  className={`col-md-${index === 1 ? "6" : "3"}`}
                  key={product.id}
                >
                  <div className="single-populer-products">
                    {index === 1 ? (
                      // Middle Product - Larger Layout
                      <div className="single-inner-populer-products">
                        <div className="row">
                          <div className="col-md-4 col-sm-12">
                            <div className="single-inner-populer-product-img">
                              <img
                                src={product.image}
                                alt={product.title}
                                style={{ maxWidth: "100%", objectFit: "contain" }}
                              />
                            </div>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <div className="single-inner-populer-product-txt">
                              <h2>
                                <a href="#">{product.title}</a>
                              </h2>
                              <p>{product.description.substring(0, 100)}...</p>
                              <div className="populer-products-price">
                                <h4>
                                  Sales Start from <span>${product.price.toFixed(2)}</span>
                                </h4>
                              </div>
                              <button
                                className="btn-cart welcome-add-cart populer-products-btn"
                                onClick={() => alert(`Discover more about ${product.title}`)}
                              >
                                discover more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Side Products - Smaller Layout
                      <>
                        <div className="single-populer-product-img mt40">
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{ maxWidth: "100%", objectFit: "contain" }}
                          /><br/>
                        </div>
                        <h1>
                          <a href="#">{product.title}</a>
                        </h1>
                        <div className="single-populer-products-para">
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
