import React from 'react'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item text-info"><Link className="text-info" To="#">Home</Link></li>
                            <li className="breadcrumb-item"><Link className="text-info" To="#">Pages</Link></li>
                            <li className="breadcrumb-item  text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default About
