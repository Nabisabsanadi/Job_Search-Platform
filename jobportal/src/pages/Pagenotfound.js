import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
    return (
        <>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-info"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <Link className="btn btn-info py-3 px-5" To="">Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Pagenotfound
