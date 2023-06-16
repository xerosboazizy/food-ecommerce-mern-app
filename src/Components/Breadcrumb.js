import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    const { title } = props;
    return (
        <div className='breadcrumb mb-0 py-4'>
            <div className="container-lg">
                <div className="row">
                    <div className="col-12 mb-0">
                        <p className='text-center breadcrumalready'>
                            <Link to="/" className="crumbtext" >Home / &nbsp; </Link>
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb