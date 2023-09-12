import React from 'react'
import './Profile.css'
import profile_pic6 from "../images/boy-pic.jpeg"


const Profile = () => {
  return (
    <div className='profile-container'>
      <div className="left-box">
        <div className="upper-content">
          <div className="user-info">
            <div className="image">
              <a href="#">
              <img src={profile_pic6} alt="ff" />
              </a>
            </div>
            <a href="#">
            <h3 className='name'>name</h3>
            </a>
            <a href="#"><p className='username'>@username</p></a>
            <div className="edit-profile">
              <a href="#">Edit Profile</a>
            </div>
          </div>
          <div className="middle-content">
            <div className="post-followers-following">
              <div className="post">
                <a href="#">
                  <span>50</span>
                  <span>posts</span>
                </a>
              </div>
              <div className="followers">
                <a href="#">
                  <span>1.2K</span>
                  <span>followers</span>
                </a>
              </div>
              <div className="following">
                <a href="#">
                  <span>1.2K</span>
                  <span>following</span>
                </a>
              </div>
            </div>
            <div className="total-likes">
              <a href="#">
                <i className='fa-solid fa-heart'></i>
                <p>50M likes </p>
              </a>
            </div>
          </div>
        </div>
        <div className="lower-content">
          <div className="message-button">
            <a href="#"><button className='button'>message</button></a>
          </div>
          <div className="follow-button">
            <a href="#"><button className='button'>follow</button></a>
          </div>
        </div>
        <div className="boi">
          <strong>@username</strong>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe vitae consectetur ex vel,!</p>
        </div>
      </div>
      <div className="right-box">
        <div className="cover-image">
          <img src={profile_pic6} alt="ff" />
        </div>
      </div>
    </div>
  )
}

export default Profile