import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Company</h5>
              <Link className="btn btn-link text-white-50" To="">About Us</Link>
              <Link className="btn btn-link text-white-50" To="">Contact Us</Link>
              <Link className="btn btn-link text-white-50" To="">Our Services</Link>
              <Link className="btn btn-link text-white-50" To="">Privacy Policy</Link>
              <Link className="btn btn-link text-white-50" To="">Terms & Condition</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <Link className="btn btn-link text-white-50" To="">About Us</Link>
              <Link className="btn btn-link text-white-50" To="">Contact Us</Link>
              <Link className="btn btn-link text-white-50" To="">Our Services</Link>
              <Link className="btn btn-link text-white-50" To="">Privacy Policy</Link>
              <Link className="btn btn-link text-white-50" To="">Terms & Condition</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contact</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>11 Street, Karnataka, INDIA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9988776600</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>sanadinabi4@gmail.com</p>
              <div className="d-flex pt-2">
                <Link className="btn btn-outline-light btn-social" To=""><i className="fab fa-twitter"></i></Link>
                <Link className="btn btn-outline-light btn-social" To=""><i className="fab fa-facebook-f"></i></Link>
                <Link className="btn btn-outline-light btn-social" To=""><i className="fab fa-youtube"></i></Link>
                <Link className="btn btn-outline-light btn-social" To=""><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">JobSeacrh</h5>
              <p>Search you dream jobs with JobSearch</p>
              <div className="position-relative mx-auto" style={{maxWidth:"400px"}}>
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                  <button type="button" className="btn btn-info py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <Link className="border-bottom" To="#">JobSeacrh</Link>, All Right Reserved.
                Designed By <Link className="border-bottom" To="sanadimabi4@gmail.com">Nabisab</Link>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to="">Home</Link>
                  <Link to="">Cookies</Link>
                  <Link to="">Help</Link>
                  <Link to="">FQAs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
