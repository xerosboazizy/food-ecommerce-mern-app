import React from 'react'
import ReactStars from "react-rating-stars-component";
import cowtailsoup from ".././Images/cowtailsoup.png"
import nobgcart from ".././Images/nobgcart.png"
import nobywishlist from ".././Images/nobgwishlist.png"
import nobgeye from ".././Images/nobgeye.png"
import { Link, useLocation } from 'react-router-dom';
import pic1 from ".././Images/pic1.png"
import pic2 from ".././Images/pic2.png"
import { BsSuitHeart } from "react-icons/bs"


const FoodCard = (props) => {
    const { grid } = props
    let location = useLocation()
    return (
        <>
            <div className={`  ${location.pathname == "/menu" ? `gr-${grid} ` : "col-3 roko"}`}>
                <Link className="food-card position-relative ">
                    <div className="wishlist-img position-absolute">
                        <Link className='wishicon-link'><BsSuitHeart className='wish-link-icon' /></Link>
                    </div>
                    <div className="food-image">
                        <img src={pic1} alt="" className='img-fluid' />
                        <img src={pic2} alt="" className='img-fluid' />
                    </div>
                    <div className="food-details">
                        <h6 className="foodcategory">Soup</h6>
                        <h5 className="food-title">
                            Cow tail peppersoup
                        </h5>

                        <div className="rate_price">
                            <ReactStars
                                count={5}
                                value="4"
                                edit="false"
                                size={24}
                                activeColor="#d2691e"
                            />
                            <p className="foodcardprice">$100.00</p>
                        </div>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column action-bar-icon'>
                            <Link className='foodcardicon'><img src={nobgcart} alt="cart" /></Link>
                            <Link className='foodcardicon'><img src={nobgeye} alt="view" /> </Link>
                        </div>


                    </div>

                </Link>
            </div>
        </>




    )
}

export default FoodCard