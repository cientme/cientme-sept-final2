import React from 'react'
import './PostDetails.css'

// all post elements are import  here

//#### profile_pics are import  here ####
import profile_pic1 from "../images/member-1.png" 
import profile_pic2 from "../images/member-2.png" 
import profile_pic3 from "../images/member-3.png" 
import profile_pic4 from "../images/member-4.png" 
import profile_pic5 from "../images/member-5.png" 
import profile_pic6 from "../images/boy-pic.jpeg" 


//#### post_imgs are import  here ####
import post_img1 from "../images/feed-image-1.png"
import post_img2 from "../images/feed-image-2.png"
import post_img3 from "../images/feed-image-3.png"
import post_img4 from "../images/feed-image-4.png"
import post_img5 from "../images/feed-image-5.png"
import post_img6 from "../images/member-7.png"



const PostDetails = () => {
    return (
        <div className="container">

            <div className="posts">
                <div className="post-title">
                    <div className="post-left">
                        <div className="image">
                            <img src={ profile_pic1 } alt="ff" />
                        </div>
                        <div className="post-details">
                            <p className="name">@username</p>
                            <p className="location">location</p>
                        </div>
                    </div>
                    <div className="post-right">
                        <i className="fa-solid fa-square"></i>
                    </div>
                </div>

                <div className="post-content">
                    <img src={ post_img1 } alt="" />
                </div>
                <div className="post-footer">
                    <div className="likes-comment-shares">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <i className="far fa-paper-plane"></i>
                    </div>
                    <div className="save">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="post-footer-content">
                    <p className="likes">100 likes</p>
                    <p className="name">username <span><a href="#">follow</a></span></p>
                    <p className="comment">View all 10 commnets</p>
                    <p className="posting-time">23 HOURS AGO</p>
                </div>
                <div className="add-comment">
                    <div className="left-side">
                        <i className="far fa-smile-beam"></i>
                        <input type="text" placeholder="Add a comment..." />
                    </div>
                    <div className="right-side">
                        <a href="#">Post</a>
                    </div>
                </div>
            </div>

            <div className="posts">
                <div className="post-title">
                    <div className="post-left">
                        <div className="image">
                            <img src={ profile_pic2 } alt="ff" />
                        </div>
                        <div className="post-details">
                            <p className="name">@username</p>
                            <p className="location">location</p>
                        </div>
                    </div>
                    <div className="post-right">
                        <i className="fa-solid fa-square-minus"></i>
                    </div>
                </div>

                <div className="post-content">
                    <img src={ post_img2 } alt="" />
                </div>
                <div className="post-footer">
                    <div className="likes-comment-shares">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <i className="far fa-paper-plane"></i>
                    </div>
                    <div className="save">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="post-footer-content">
                    <p className="likes">100 likes</p>
                    <p className="name">username <span><a href="#">follow</a></span></p>
                    <p className="comment">View all 10 commnets</p>
                    <p className="posting-time">23 HOURS AGO</p>
                </div>
                <div className="add-comment">
                    <div className="left-side">
                        <i className="far fa-smile-beam"></i>
                        <input type="text" placeholder="Add a comment..." />
                    </div>
                    <div className="right-side">
                        <p>Post</p>
                    </div>
                </div>
            </div>

            <div className="posts">
                <div className="post-title">
                    <div className="post-left">
                        <div className="image">
                            <img src={ profile_pic3 } alt="ff" />
                        </div>
                        <div className="post-details">
                            <p className="name">@username</p>
                            <p className="location">location</p>
                        </div>
                    </div>
                    <div className="post-right">
                        <i className="fa-solid fa-square-minus"></i>
                    </div>
                </div>

                <div className="post-content">
                    <img src={ post_img3 } alt="" />
                </div>
                <div className="post-footer">
                    <div className="likes-comment-shares">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <i className="far fa-paper-plane"></i>
                    </div>
                    <div className="save">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="post-footer-content">
                    <p className="likes">100 likes</p>
                    <p className="name">username <span><a href="#">follow</a></span></p>
                    <p className="comment">View all 10 commnets</p>
                    <p className="posting-time">23 HOURS AGO</p>
                </div>
                <div className="add-comment">
                    <div className="left-side">
                        <i className="far fa-smile-beam"></i>
                        <input type="text" placeholder="Add a comment..." />
                    </div>
                    <div className="right-side">
                        <p>Post</p>
                    </div>
                </div>
            </div>

            <div className="posts">
                <div className="post-title">
                    <div className="post-left">
                        <div className="image">
                            <img src={ profile_pic4 } alt="ff" />
                        </div>
                        <div className="post-details">
                            <p className="name">@username</p>
                            <p className="location">location</p>
                        </div>
                    </div>
                    <div className="post-right">
                        <i className="fa-solid fa-square-minus"></i>
                    </div>
                </div>

                <div className="post-content">
                    <img src={ post_img4 } alt="" />
                </div>
                <div className="post-footer">
                    <div className="likes-comment-shares">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <i className="far fa-paper-plane"></i>
                    </div>
                    <div className="save">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="post-footer-content">
                    <p className="likes">100 likes</p>
                    <p className="name">username <span><a href="#">follow</a></span></p>
                    <p className="comment">View all 10 commnets</p>
                    <p className="posting-time">23 HOURS AGO</p>
                </div>
                <div className="add-comment">
                    <div className="left-side">
                        <i className="far fa-smile-beam"></i>
                        <input type="text" placeholder="Add a comment..." />
                    </div>
                    <div className="right-side">
                        <p>Post</p>
                    </div>
                </div>
            </div>

            <div className="posts">
                <div className="post-title">
                    <div className="post-left">
                        <div className="image">
                            <img src={ profile_pic5 } alt="ff" />
                        </div>
                        <div className="post-details">
                            <p className="name">@username</p>
                            <p className="location">location</p>
                        </div>
                    </div>
                    <div className="post-right">
                        <i className="fa-solid fa-square-minus"></i>
                    </div>
                </div>

                <div className="post-content">
                    <img src={ post_img5 } alt="" />
                </div>
                <div className="post-footer">
                    <div className="likes-comment-shares">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <i className="far fa-paper-plane"></i>
                    </div>
                    <div className="save">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="post-footer-content">
                    <p className="likes">100 likes</p>
                    <p className="name">username <span><a href="#">follow</a></span></p>
                    <p className="comment">View all 10 commnets</p>
                    <p className="posting-time">23 HOURS AGO</p>
                </div>
                <div className="add-comment">
                    <div className="left-side">
                        <i className="far fa-smile-beam"></i>
                        <input type="text" placeholder="Add a comment..." />
                    </div>
                    <div className="right-side">
                        <p>Post</p>
                    </div>
                </div>
            </div>

            <div className="posts">
                <div className="post-title">
                    <div className="post-left">
                        <div className="image">
                            <img src={ profile_pic6 } alt="ff" />
                        </div>
                        <div className="post-details">
                            <p className="name">@username</p>
                            <p className="location">location</p>
                        </div>
                    </div>
                    <div className="post-right">
                        <i className="fa-solid fa-square-minus"></i>
                    </div>
                </div>

                <div className="post-content">
                    <img src={ post_img6 } alt="" />
                </div>
                <div className="post-footer">
                    <div className="likes-comment-shares">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                        <i className="far fa-paper-plane"></i>
                    </div>
                    <div className="save">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>
                <div className="post-footer-content">
                    <p className="likes">100 likes</p>
                    <p className="name">username <span><a href="#">follow</a></span></p>
                    <p className="comment">View all 10 commnets</p>
                    <p className="posting-time">23 HOURS AGO</p>
                </div>
                <div className="add-comment">
                    <div className="left-side">
                        <i className="far fa-smile-beam"></i>
                        <input type="text" placeholder="Add a comment..." />
                    </div>
                    <div className="right-side">
                        <p>Post</p>
                    </div>
                </div>
            </div>

            <div className="side-side">
                <div className="profile-left">
                    <div className="image">
                        {/* <!-- <img src="images2/status-1.png" alt=""> --> */}
                    </div>
                </div>

                <div className="profile-right">

                </div>
            </div>
        </div>





    )
}

export default PostDetails