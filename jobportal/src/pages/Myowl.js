import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'
const Myowl = () => {
    const options = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 1000,
        nav : true,
        dots:false,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]

    };

    return (
        <OwlCarousel className="owl-theme mt-0 gap-0 mb-0" {...options}>
            <section>
                <div className="container-fluid p-0">
                    <div className="owl-carousel1 header-carousel position-relative">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid w-100" src="img/carousel-1.jpg" alt="" style={{height:"700px"}}/>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(43, 57, 64, .5)" }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-10 col-lg-8">
                                            <h1 className="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                                            <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                            <Link to="" className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</Link>
                                            <Link to="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid p-0">
                    <div className="owl-carousel1 header-carousel position-relative">
                        <div className="owl-carousel-item position-relative">
                            <img className="img-fluid w-100" src="img/carousel-2.jpg" alt="" style={{height:"700px"}}/>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(43, 57, 64, .5)" }}>
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-10 col-lg-8">
                                            <h1 className="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>
                                            <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr</p>
                                            <Link to="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</Link>
                                            <Link to="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </OwlCarousel>
    );
};

export default Myowl;