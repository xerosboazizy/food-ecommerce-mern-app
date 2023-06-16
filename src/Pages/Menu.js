import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import FoodCard from "../Components/FoodCard"
import { useState } from 'react';
import Meta from '../Components/Meta';
import hambug2 from ".././Images/hambug2.png"
import hambug3 from ".././Images/hambug3.png"
import hambug4 from ".././Images/hambug4.png"
import hambug4R from ".././Images/hambug4R.png"

const Menu = (props) => {

    const [grid, setGrid] = useState(3);
    alert(grid)

    return (
        <>
            <Meta title={"Our Menu"} />
            <Breadcrumb title="Our Menu" />
            <div className="menu-wrapper py-4">
                <div className="container-lg">
                    <div className="row  align-items-center justify-content-center">
                        <div className="col-12 ">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ "width": "100px" }}>Sort By</p>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="" selected="selected">Best Selling</option>
                                            <option value="title-ascending">Aphabetically, A-Z</option>
                                            <option value="title-descending">Aphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to high</option>
                                            <option value="created-descending">Date, old to new</option>
                                            <option value="created-ascending">Date, new to old </option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totaldishes mb-0'>150 Dishes</p>
                                        <div className='d-flex gap-10 align-items-center gridi'>
                                            <img src={hambug4} alt="grid" className='d-block img-fluid' onClick={() => { setGrid(3) }} />
                                            <img src={hambug3} alt="grid" className='d-block img-fluid' onClick={() => { setGrid(4) }} />
                                            <img src={hambug2} alt="grid" className='d-block img-fluid' onClick={() => { setGrid(6) }} />
                                            <img src={hambug4R} alt="grid" className='d-block img-fluid' onClick={() => { setGrid(12) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <FoodCard grid={grid} />
                                    <FoodCard grid={grid} />
                                    <FoodCard grid={grid} />
                                    <FoodCard grid={grid} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Menu