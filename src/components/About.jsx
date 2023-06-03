import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Jello from 'react-reveal/Jello';
import userImg from '../images/userImg.png'
import upRight from '../images/upRight.png';
import { Element } from 'react-scroll';
function About() {
    return (
        <Element name="about">
            <section className="about">
                <div className="container">
                    <Jello>
                        <h2>ABOUT ME</h2>
                    </Jello>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-l">
                                <Bounce left >
                                    <img src={userImg} alt="" />
                                </Bounce>
                            </div>
                        </div>
                        <div className="col-md-8">

                            <div className="about-r">
                                <Bounce right>
                                    <p>Hi! My name is Madhur. <br /> I am a aspiring MERN stack developer. I'm looking for a full-time
                                        position, internship, or freelance work.</p>
                                    <p>I have a strong passion for building user-friendly and engaging web applications using MongoDB, Express.js, React, and Node.js.</p>
                                    <p>Although I'm new to the industry, I've spent countless hours studying the MERN stack and building my own projects to gain hands-on experience. I'm excited to bring my skills and enthusiasm to a dynamic and collaborative team, where I can continue to grow and learn as a developer.</p>
                                    <p>In addition to my technical skills, I'm a highly motivated and organized individual with strong communication and problem-solving abilities. I thrive in fast-paced environments and am always eager to take on new challenges and push the boundaries of what's possible.</p>
                                    <p>If you're looking for a dedicated and hardworking MERN stack developer to join your team, I would love to hear from you. Please feel free to reach out to me via email or LinkedIn, and I'll be happy to share more about my experience and passion for the MERN stack.</p>
                                    <p>Feel free to share with me any of your next projects, I'm just a message away!</p>
                                    <a href="tel:8290403040">OK, LET'S TALK <img src={upRight} alt="" /> </a>
                                </Bounce>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Element>

    )
}

export default About
