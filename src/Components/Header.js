import React, { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"





const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight < 600 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen])

    return (
        <>
            <header className="header-top-strip ">
                <div className="container-lg ">
                    <div className="row">
                        <div className='mba d-flex py-2'>
                            <div className="col-6 ">
                                <p className='mb-0'>Free shipping Over $500</p>
                            </div>
                            <div className="col-6 ">
                                <p className='text-end mb-0'>Hotline: <a href="tel:+234 7053011114">(+23487098765)</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <header className='header-bottom-strip'>
                <div className="container-lg ">
                    <div className="row">
                        <div className='col-12 laka'>
                            <div className='navb-logo'>
                                <h3>AustFoods</h3>
                            </div>
                            <div className='navb-items'>
                                <div className="item">
                                    <NavLink to='/'>Home</NavLink>
                                </div>
                                <div className="item">
                                    <a href="/">About</a>
                                </div>
                                <div className="item">
                                    <NavLink to='/menu'>Menu</NavLink>
                                </div>
                                <div className="item">
                                    <a href="/">Services</a>
                                </div>
                                <div className="item">
                                    <a href="/">Blog</a>
                                </div>
                                <div className="item">
                                    <a href="/">Contact</a>
                                </div>

                            </div>
                            <div className='navb-item-self'>

                                <div className='nav-self-icon'>
                                    <FaRegHeart />
                                </div>
                                <div className='nav-self-icon'>
                                    <FaUserCircle />
                                </div>
                                <div className='nav-self-icon'>
                                    <AiOutlineShoppingCart />
                                </div>



                            </div>


                            <div>
                                <div className='toggle-icon' onClick={() => setIsOpen(!isOpen)}>

                                    <span class="material-symbols-outlined">
                                        {isOpen ? "switch_left" : "switch_right"}
                                    </span>


                                </div>
                            </div>








                        </div>

                    </div>
                </div>
                <div className={`sidebar-wrapper ${isOpen ? "sidebar-wrapper-open" : "sidebar-wrapper-closed"}`}>

                </div>

            </header>

        </>
    )
}

export default Header