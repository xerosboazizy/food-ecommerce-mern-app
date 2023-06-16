import React from 'react'
import ReactStars from "react-rating-stars-component";




const TodaySpecial = (props) => {

    const { imgage, title, price } = props.item;

    return (

        <div className='todayContainer'>

            <img src={imgage} alt="image" />
            <p className='todayPrice'>{price}</p>
            <div className='todaydesc'>
                <h5 className='todaytitle'>{title}</h5>
                <div className='rateOrder'>
                    <div className="todaystar">
                        <ReactStars
                            count={5}
                            value="4"
                            edit="false"
                            size={24}
                            activeColor="#ffd700"

                        />
                    </div>

                    <button className='orderbutton'>Order Now</button>
                </div>


            </div>
        </div>



    )
}

export default TodaySpecial


