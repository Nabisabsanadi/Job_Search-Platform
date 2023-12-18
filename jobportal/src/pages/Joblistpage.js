import React from 'react'
import { Link } from 'react-router-dom';
import Jobs from './Jobs';
const Joblistpage = () => {
    return (
        <>
            <div className="container-xxl py-5 bg-dark page-header mb-5">
                <div className="container my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Job List</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><Link to="#"className='text-info'>Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#"className='text-info'>Pages</Link></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Job List</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <Jobs></Jobs>
        </>
    )
}

export default Joblistpage
