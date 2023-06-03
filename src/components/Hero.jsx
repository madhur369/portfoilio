// eslint-disable-next-line
import React from 'react';
import upLeft from '../images/upLeft.png';
import upRight from '../images/upRight.png';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';



const Hero = () => {
 

  return (
    <Element name="hero">
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="hero-m">
                <h1>MERN DEVELOPER</h1>
                <ul>
                  <li>
                    <Link to="project" smooth={true} offset={-100}> 
                      <img src={upLeft} alt="" />
                      PORTFOLIO OF MADHUR
                    </Link>
                  </li>
                  <li>
                    <Link to="contact" smooth={true} offset={-100}>
                      DISCUSS THE PROJECT
                      <img src={upRight} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
