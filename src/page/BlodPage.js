import React from "react";
import img22 from "../assets/images/blog/b1.jpg";
import img23 from "../assets/images/blog/b2.jpg";
import img24 from "../assets/images/blog/b3.jpg";

const BlodPage = () => {
  return (
    <div>
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>latest blog</h2>
          </div>
          {/* <!--/.section-header--> */}
          <div className="blog-content">
            <div className="row">
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src={img22} alt="blog image" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <a href="#">Why Brands are Looking at Local Language</a>
                    </h2>
                    <h3>
                      By <a href="#">Robert Norby</a> / 12th December 2024
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src={img23} alt="blog image" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <a href="#">Why Brands are Looking at Local Language</a>
                    </h2>
                    <h3>
                      By <a href="#">Robert Norby</a> / 12th December 2024
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <img src={img24} alt="blog image" />
                    <div className="single-blog-img-overlay"></div>
                  </div>
                  <div className="single-blog-txt">
                    <h2>
                      <a href="#">Why Brands are Looking at Local Language</a>
                    </h2>
                    <h3>
                      By <a href="#">Robert Norby</a> / 12th December 2024
                    </h3>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/.container--> */}
      </section>
    </div>
  );
};

export default BlodPage;
