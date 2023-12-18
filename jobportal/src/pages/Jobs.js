import React from 'react'
import { Link } from 'react-router-dom'
const Jobs = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                    <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.3s">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" To="#tab-1">
                                    <h6 className="mt-n1 mb-0">Featured</h6>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" To="#tab-2">
                                    <h6 className="mt-n1 mb-0">Full Time</h6>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" To="#tab-3">
                                    <h6 className="mt-n1 mb-0">Part Time</h6>
                                </Link>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Software Engineer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Marketing Manager</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-3.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Product Designer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-4.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Creative Director</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-5.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Wordpress Developer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <Link className="btn btn-info py-3 px-5" To="">Browse More Jobs</Link>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Software Engineer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Marketing Manager</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-3.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Product Designer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-4.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Creative Director</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-5.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Wordpress Developer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <Link className="btn btn-info py-3 px-5" To="">Browse More Jobs</Link>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Software Engineer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Marketing Manager</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-3.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Product Designer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-4.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Creative Director</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-5.jpg" alt="" style={{width: "80px", height: "80px"}}/>
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Wordpress Developer</h5>
                                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-info me-2"></i>New York, USA</span>
                                                    <span className="text-truncate me-3"><i className="far fa-clock text-info me-2"></i>Full Time</span>
                                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-info me-2"></i>$123 - $456</span>
                                                </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                            <div className="d-flex mb-3">
                                                <Link className="btn btn-light btn-square me-3" To=""><i className="far fa-heart text-info"></i></Link>
                                                <Link className="btn btn-info" To="">Apply Now</Link>
                                            </div>
                                            <small className="text-truncate"><i className="far fa-calendar-alt text-info me-2"></i>Date Line: 01 Jan, 2045</small>
                                        </div>
                                    </div>
                                </div>
                                <Link className="btn btn-info py-3 px-5" To="">Browse More Jobs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs
