import React from 'react'
import { BsSearch } from "react-icons/bs"
import { BiCategory } from "react-icons/bi"
import { Link } from "react-router-dom"
import FoodCard from '../Components/FoodCard'
import SliderSlick from '../Components/SliderSlick'
import drawsoup from ".././Images/drawsoup.png"
import plantainbeans from ".././Images/plantainbeans.png"
import coconutrice from ".././Images/coconutrice.png"
import FoodblogCard from '../Components/FoodblogCard'

const Home = () => {
    return (
        <>
            <section classname="home-wrapper py-3">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12 track-home">
                            <div className='before-carousel'>
                                <div className='carousel-headies'>
                                    <div className='write-ups'>
                                        <h5>Our special Dish</h5>
                                        <h1>Hot Jollof Rice</h1>
                                        <p>lorem ipsum duret ametun laga p after ipsum lorem hinterr  <br />
                                            and was not in sicily greece urem ameta</p>
                                    </div>
                                    <div className='carouselbtn'>
                                        <button className='homepbutton'>Order Now</button>
                                    </div>

                                </div>

                                <div className='carousel-image'>
                                    <img src={coconutrice} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="home-wrapper py-3">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3>Todays Special</h3>
                        </div>
                        <SliderSlick />
                    </div>
                </div>
            </section>


            <section className="hotdeal-wrapper py-3">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3>Hot Deals</h3>
                        </div>



                        <FoodCard />



                    </div>
                </div>
            </section>



            <section className='home-wrapper-2 py-3'>
                <div className="container-lg">
                    <div className="row ">
                        <div className="col-12 track align-items-center d-flex">
                            <div className="col-3 lackdog">

                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle align-items-center border-0 gap-15 d-flex "
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <BiCategory className='cate-icon' />  <span className='me-5 d-inline-block'>Dish Categories</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link class="dropdown-item" to="">Soups</Link></li>
                                        <li><Link class="dropdown-item" to="">Yams/</Link></li>
                                        <li><Link class="dropdown-item" to="">Rice</Link></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-5 trace align-items-center ">
                                <div className="input-group ">
                                    <input
                                        type="text"
                                        className='form-control py-2 '
                                        placeholder='Search For Dishes'
                                        aria-label='search for dishes'
                                        aria-describedby='basic-addon2'
                                    />
                                    <span className='input-group-text p-2' id='basic-addon2'>
                                        <BsSearch className='fs-4' />
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>



            <section className="hotdeal-wrapper py-3">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Latest News</h3>
                        </div>



                        <FoodblogCard />
                        <FoodblogCard />
                        <FoodblogCard />
                        <FoodblogCard />



                    </div>
                </div>
            </section>
        </>
    )
}

export default Home