import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Rewies = () => {
    const options = {
        items: 3,
        loop: true,
        nav:true,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1000,
        margin:10,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }

    };

    return (
        <>

            <div className="container-xxl py-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="text-center mb-2">Our Clients Say!!!</h1>
                </div>
            </div>

            <OwlCarousel className="owl-theme mt-3 gap-0 mb-0" {...options}>
                <div className="testimonial-item bg-info rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-info mb-3"></i>
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded" alt="rewies" src="img/testimonial-1.jpg" style={{ width: "50px", height: "50px" }} />
                        <div className="ps-3">
                            <h5 className="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                    </div>
                </div>

                <div className="testimonial-item bg-info rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-info mb-3"></i>
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded" alt="rewies" src="img/testimonial-2.jpg" style={{ width: "50px", height: "50px" }} />
                        <div className="ps-3">
                            <h5 className="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                    </div>
                </div>

                <div className="testimonial-item bg-info rounded p-4">
                    <i className="fa fa-quote-left fa-2x text-info mb-3"></i>
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded" alt="rewies" src="img/testimonial-3.jpg" style={{ width: "50px", height: "50px" }} />
                        <div className="ps-3">
                            <h5 className="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </>
    )
}

export default Rewies
