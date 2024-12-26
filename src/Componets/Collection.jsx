import React from 'react'

const Collection = () => {
  return (
    <>
        <section id="sofa-collection">
                        <div className="owl-carousel owl-theme" id="collection-carousel">
                            <div className="sofa-collection collectionbg1">
                                <div className="container">
                                    <div className="sofa-collection-txt">
                                        <h2>unlimited collection</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div className="sofa-collection-price">
                                            <h4>strting from <span>$ 19.9</span></h4>
                                        </div>
                                        <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick={() => window.location.href = '#'}>
                                            view more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.sofa-collection--> */}
                            <div className="sofa-collection collectionbg2">
                                <div className="container">
                                    <div className="sofa-collection-txt">
                                        <h2>unlimited Cloths collection</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <div className="sofa-collection-price">
                                            <h4>strting from <span>$ 29.9</span></h4>
                                        </div>
                                        <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick={() => window.location.href = '#'}>
                                            view more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.sofa-collection--> */}
                        </div>
                        {/* <!--/.collection-carousel--> */}
        
                    </section>
    </>
  )
}

export default Collection
