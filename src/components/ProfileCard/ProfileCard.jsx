import React from 'react'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div>
        <div className="profile-card">
        <div className="image">
            <img src="images/boy-pic.jpeg" alt="ff" />
        </div>

        <div className="user-info">
            <span className="name">@username</span>
            <span className="location">Location</span>
        </div>
        
        <div className="media-button"> 
            <a href="#" className="links" style="background-color: #4267b2;">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="links" style="background-color: #1da1f2;">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="links" style="background-color: #e1306c;">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="links" style="background-color: #ff0000;">
                <i className="fa-brands fa-youtube"></i>
            </a>
        </div>

        <div className="buttons">
            <button className="button">Subscribe</button>
            <button className="button">Message</button>
        </div>

        <div className="analytics">
            <div className="data">
                <i className="fa-regular fa-heart"></i>
                <span className="number">60K</span>
            </div>
            <div className="data">
                <i className="fa-regular fa-comment"></i>
                <span className="number">20K</span>
            </div>
            <div className="data">
                <i className="fa-solid fa-share"></i>
                <span className="number">12K</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProfileCard