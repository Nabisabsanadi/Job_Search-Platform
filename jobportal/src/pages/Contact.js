import React from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item"><Link to="#"className='text-info'>Home</Link></li>
              <li className="breadcrumb-item"><Link to="#"className='text-info'>Pages</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Contact For Any Query</h1>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                      <i className="fa fa-map-marker-alt text-info"></i>
                    </div>
                    <span>123 Street, New York, USA</span>
                  </div>
                </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                      <i className="fa fa-envelope-open text-info"></i>
                    </div>
                    <span>info@example.com</span>
                  </div>
                </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3" style={{ width: "45px", height: "45px" }}>
                      <i className="fa fa-phone-alt text-info"></i>
                    </div>
                    <span>+012 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61102.863562926344!2d75.67633746451938!3d16.829879351845427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6557d98aa706f%3A0xedd4a1794e8fe8d2!2sVijayapura%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1702405892265!5m2!1sen!2sin"
             className='w-100' id="frame1" title='exapmle of vijayapur map' style={{ border: "0" ,minHeight: "100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link className='text-info' To="https://htmlcodex.com/contact-form">Download Now</Link>.</p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-info w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
