import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      {/* NAVBAR SECTION */}
      <section>
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top shadow  p-0">
          <Link to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
            <h1 className="m-0 text-warning">JobEntry</h1>
          </Link>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
              <NavLink className="nav-item nav-link" to="/about">About</NavLink>
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <NavLink className="dropdown-item" to="/job-list">Job List</NavLink>
                  <NavLink className="dropdown-item" to="/job-detail">Job Detail</NavLink>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <NavLink className="dropdown-item" to="/category">Job Category</NavLink>
                  <NavLink className="dropdown-item" to="/testimonial">Testimonial</NavLink>
                  <NavLink className="dropdown-item" to="/404">404</NavLink>
                </div>
              </div>
              <NavLink className="nav-item nav-link " to="/contact">Contact</NavLink>
            </div>
            <Link to="/" className="btn btn-info rounded-0 py-4 px-lg-5 d-none d-lg-block" >Post A Job<i className="fa fa-arrow-right ms-3"></i></Link>
          </div>
        </nav>

      </section>

      {/* NAVBAR SECTION END*/}
    </>
  )
}

export default Header
