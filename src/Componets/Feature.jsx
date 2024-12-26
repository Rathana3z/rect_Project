import React from 'react'
import img18 from '../assets/images/features/images.jpg';
import img19 from '../assets/images/features/download.jpg';
import img20 from '../assets/images/features/download (1).jpg';
import img21 from '../assets/images/features/kh.jpg';

const Feature = () => {
  return (
    <>
      <section id="feature" className="feature">
				<div className="container">
					<div className="section-header">
						<h2>featured products</h2>
					</div>
					{/* <!--/.section-header--> */}
					<div className="feature-content">
						<div className="row">
							<div className="col-sm-3">
								<div className="single-feature">
									<img src={img18} alt="feature image" />
									<div className="single-feature-txt text-center">
										<p>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
											<span className="feature-review">(101K review)</span>
										</p>
										<h3><a href="#">Jacket</a></h3>
										<h5>$16.00</h5>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-feature">
									<img src={img19} alt="feature image" />
									<div className="single-feature-txt text-center">
										<p>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
											<span className="feature-review">(75K review)</span>
										</p>
										<h3><a href="#"> New Dising </a></h3>
										<h5>$20.00</h5>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-feature">
									<img src={img20} alt="feature image" />
									<div className="single-feature-txt text-center">
										<p>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
											<span className="feature-review">(405K review)</span>
										</p>
										<h3><a href="#">T-Shirt</a></h3>
										<h5>$10.00</h5>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="single-feature">
									<img src={img21} alt="feature image" />
									<div className="single-feature-txt text-center">
										<p>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<span className="spacial-feature-icon"><i className="fa fa-star"></i></span>
											<span className="feature-review">(45M review)</span>
										</p>
										<h3><a href="#">Khmer T-Shirt</a></h3>
										<h5>$168.00</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--/.container--> */}

			</section>
    </>
  )
}

export default Feature
