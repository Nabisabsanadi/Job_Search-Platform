import React from 'react'
import { Link } from 'react-router-dom'
import Rewies from './Rewies'
const Testimonialpage = () => {
    return (
        <>
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item "><Link className='text-info' to="#">Home</Link></li>
                            <li className="breadcrumb-item "><Link className='text-info' to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
<Rewies></Rewies>
        </>
    )
}

export default Testimonialpage
