import React from 'react'
import Slider from "react-slick";
import TodaySpecial from '../Components/TodaySpecial'

import pic1 from ".././Images/pic1.png"
import pic2 from ".././Images/pic2.png"
import pic3 from ".././Images/pic3.png"
import pic4 from ".././Images/pic4.png"
import pic5 from ".././Images/pic5.png"
import pic6 from ".././Images/pic6.png"
import pic7 from ".././Images/pic7.png"
import pic8 from ".././Images/pic8.png"

let data = [
    {
        imgage: pic1,
        title: "Hot Afan Soup",
        price: "$ 100",

    },
    {
        imgage: pic2,
        title: "Hot Afan Soup",
        price: "$ 100",

    },
    {
        imgage: pic3,
        title: "Hot Afan Soup",
        price: "$ 100",

    },
    {
        imgage: pic4,
        title: "Hot Afan Soup",
        price: "$ 100",

    },
    {
        imgage: pic5,
        title: "Hot Afan Soup",
        price: "$ 100",

    },
    {
        imgage: pic6,
        title: "Hot Afan Soup",
        price: "$ 100",

    },
    {
        imgage: pic7,
        title: "Hot Afan Soup",
        price: "$ 100",

    },
    {
        imgage: pic8,
        title: "Hot Afan Soup",
        price: "$ 100",

    },
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};


const SliderSlick = () => {
    let slidertodayspecial = "";
    slidertodayspecial = data.map((item, i) => (
        <TodaySpecial item={item} key={i} />
    ))
    return (
        <Slider  {...settings} >
            {slidertodayspecial}
        </Slider>
    )
}

export default SliderSlick