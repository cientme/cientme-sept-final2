import React from 'react'
import './Story.css'

// all post elements are import  here

//#### profile_pics are import  here ####
import story1 from "../images/member-1.png"
import story2 from "../images/member-2.png"
import story3 from "../images/member-3.png"
import story4 from "../images/member-4.png"
import story5 from "../images/member-5.png"


const Story = () => {
    return (
        <div className="container">
        
            <div className="story">
                <div className="stories">
                    <a href="#"><img src={story1} alt="" /></a>
                    <p>@username</p>
                </div>
                <div className="stories">
                    <a href="#"><img src={story2} alt="ff" /></a>
                    <p>@username</p>
                </div>
                <div className="stories">
                    <a href="#"><img src={story3} alt="" /></a>
                    <p>@username</p>
                </div>
                <div className="stories">
                    <a href="#"><img src={story4} alt="" /></a>
                    <p>@username</p>
                </div>
                <div className="stories">
                    <a href="#"><img src={story5} alt="" /></a>
                    <p>@username</p>
                </div>

                
                <div className="stories">
                    <a href="#"><img src={story1} alt="" /></a>
                    <p>@username</p>
                </div>
                <div className="stories">
                    <a href="#"><img src={story2} alt="ff" /></a>
                    <p>@username</p>
                </div>
                <div className="stories">
                    <a href="#"><img src={story3} alt="" /></a>
                    <p>@username</p>
                </div>
                <div className="stories">
                    <a href="#"><img src={story4} alt="" /></a>
                    <p>@username</p>
                </div>
                <div className="stories">
                    <a href="#"><img src={story5} alt="" /></a>
                    <p>@username</p>
                </div>


            </div>
     
        </div>
    )
}

export default Story