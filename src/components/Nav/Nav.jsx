import React from 'react'
import './Nav.css'
import logo from '../images/cientme-logo2.jpeg'
import profile_pic from "../images/boy-pic.jpeg"



const Nav = () => {
  return (
    <div className="container">
    <section>
        <div className="sidebar">

            {/* <!-- header-nav start here --> */}
            <div className="header-nav">
                <div className="logo">
                 <a href="#">
                    <img src={ logo } alt="ff"/>
                 </a>
                </div>
            </div>
            {/* <!-- header-nav end here --> */}


            {/* <!-- main-nav start here --> */}
            <div className="main-nav">
                <div className="search-box">
                    <i className="fa-solid fa-search"></i>
                    <input type="search" placeholder="Search"/>
                </div>

                <div className="home-explr-crte-reel-music">
                    <ul>
                        <li>
                            <a href="/">
                                <i className="fa-solid fa-house"></i>
                                <span>Home</span>
                            </a>
                        </li>
                      
                        <li>
                            <a href="#">
                                <i className="fa-regular fa-compass explore-icon"></i>
                                <span>Explore</span>
                                <i className="fa-solid fa-search search-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-plus"></i>
                                <span>Create</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-circle-play"></i>
                                <span>Reels</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-headphones"></i>
                                <span>Music</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="notification-message-microblog">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa-regular fa-heart"></i>
                                <span>Notifications</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-facebook-messenger"></i>
                                <span>Messages</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-microblog"></i>
                                <span>MicroBlog</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="profile">
                    <a href="/Profile">
                        <img src={ profile_pic } alt="ff"/>
                        <span>Profile</span>
                    </a>

                </div>

            </div>
            {/* <!-- main-nav end here --> */}

            {/* <!-- footer-nav start here --> */}
            {/* <div className="footer-nav">
                <div className="dark-light-mode">
                    <a href="#">
                        <i className="fa-solid fa-toggle-on"></i>
                    </a>
                </div>
                <div className="setting">
                    <a href="#">
                        <i className="fa-solid fa-gear"></i>
                    </a>
                </div>
            </div> */}
            {/*  footer-nav end here  */}
        </div>
    </section>
</div>
  
  )
}

export default Nav