import React from 'react'
import { Link } from 'react-router-dom'
import pic9 from ".././Images/pic9.png"
import pic8 from ".././Images/pic8.png"

const FoodblogCard = () => {
    return (
        <div className='col-3'>
            <div className='bloglandley'>
                <div className='blog-card'>
                    <img src={pic9} alt="blog" className='img-fluid' />
                </div>
                <div className="blog-content">
                    <p className='date'>1 Dec, 2023</p>
                    <h5 className="title">AustFood Cookacton</h5>
                    <p className="blogdesc">
                        A 150 hours cookacton at katampe estate gate by checf Austine
                    </p>
                    <Link className='mainbutton'>Read More</Link>
                </div>
            </div>

        </div>
    )
}

export default FoodblogCard