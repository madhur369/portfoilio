import React from 'react'
import { Link } from 'react-scroll';
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import instagram from '../images/instagram.png'
import top from '../images/upward-arrow.png'
import RubberBand from 'react-reveal/RubberBand';
import Flash from 'react-reveal/Flash';
function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-t">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="footer-l">
                                <ul class="nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="about" smooth={true} offset={-100}>about me</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="why" smooth={true} offset={-100}>why me</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="project" smooth={true} offset={-100}>my projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="hero" smooth={true} offset={-100}>back to top <img src={top} alt="" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="footer-r">
                                <RubberBand>
                                    <p>social media</p>
                                </RubberBand>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/madhur-dhodaria-702415155">
                                            <img src={linkedin} alt="linkedin" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/madhur369">
                                            <img src={github} alt="github" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/madhur_dhodria/">
                                            <img src={instagram} alt="instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="footer-b">
                    <Flash>
                        <p>&copy; 2023 Madhur Dhodaria. All rights reserved.</p>
                    </Flash>
                </div>
            </div>
        </section>
    )
}

export default Footer
