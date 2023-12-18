import React from 'react'
import { Link } from 'react-router-dom'
const Helppage = () => {
  return (
<>
<div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row g-0 about-bg rounded overflow-hidden">
                            <div className="col-6 text-start">
                                <img className="img-fluid w-100" src="img/about-1.jpg"alt='images'/>
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid" src="img/about-2.jpg" alt='images' style={{width: "85%",marginTop:"15%"}}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid" src="img/about-3.jpg" alt='images' style={{width: "85%"}}/>
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid w-100" src="img/about-4.jpg"alt='images'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">We Help To Get The Best Job And Find A Talent</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p><i className="fa fa-check text-info me-3"></i>Tempor erat elitr rebum at clita</p>
                        <p><i className="fa fa-check text-info me-3"></i>Aliqu diam amet diam et eos</p>
                        <p><i className="fa fa-check text-info me-3"></i>Clita duo justo magna dolore erat amet</p>
                        <Link className="btn btn-info py-3 px-5 mt-3" to="">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}

export default Helppage
