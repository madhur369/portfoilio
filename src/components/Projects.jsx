import React from 'react'
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';
import Flash from 'react-reveal/Flash';
import Bounce from 'react-reveal/Bounce';
import upRight from '../images/upRight.png';
import collabration1 from '../images/collabration1.jpg'
import collabration2 from '../images/collabration2.png'


function Projects() {
    return (
        <Element name="project">
            <section className="projects">
                <div className="container">
                    <Jello>
                        <h2>MY PROJECTS</h2>
                    </Jello>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="project-l">
                                <Bounce left>
                                    <ul>
                                        <li><a href="https://plant-space.netlify.app/" target='_blank'>STUDENT PROJECT <img src={upRight} alt="upRight" /></a></li>
                                        <li><a href="https://plant-space.netlify.app/" target='_blank'>NON COMMERCIAL PROJECT <img src={upRight} alt="upRight" /></a></li>
                                    </ul>
                                </Bounce>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="project-r">
                                <Flash>
                                    <p>I am a beginner MERN stack developer and improve my skills every day.</p>
                                </Flash>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <ul className="collaboration">

                                <li>
                                    <Fade left>
                                        <img src={collabration1} alt="" />
                                    </Fade>
                                </li>


                                <li >
                                    <Fade top>
                                        <p>SAY YES <br />COMFORTABLE COLLABRATION!</p>
                                    </Fade>

                                </li>

                                <li>
                                    <Fade right>
                                        <img src={collabration2} alt="" />
                                    </Fade>

                                </li>



                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Projects
