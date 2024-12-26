import React from 'react'
import img25 from '../assets/images/clients/c1.png';
import img26 from '../assets/images/clients/c2.png';
import img27 from '../assets/images/clients/c3.png';
import img28 from '../assets/images/clients/c4.png';

const Clients = () => {
  return (
    <>
      <section id="clients" className="clients">
				<div className="container">
					<div className="row text-center  justify-content-center">
					<div className="col-6 col-sm-4 col-md-3 mb-4">
						<a href="#">
						<img src={img25} alt="brand-image" className="img-fluid" />
						</a>
					</div>
					<div className="col-6 col-sm-4 col-md-3 mb-4">
						<a href="#">
						<img src={img26} alt="brand-image" className="img-fluid" />
						</a>
					</div>
					<div className="col-6 col-sm-4 col-md-3 mb-4">
						<a href="#">
						<img src={img27} alt="brand-image" className="img-fluid" />
						</a>
					</div>
					<div className="col-6 col-sm-4 col-md-3 mb-4">
						<a href="#">
						<img src={img28} alt="brand-image" className="img-fluid" />
						</a>
					</div>
					
					</div>
				</div>
			</section>
    </>
  )
}

export default Clients
