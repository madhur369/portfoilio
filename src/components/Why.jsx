import React from 'react'
import Flip from 'react-reveal/Flip';
import { Element } from 'react-scroll';
import Jello from 'react-reveal/Jello';

function Why() {
    return (
        <Element name="why">
            <section className="why">
                <div className="container">
                    <div className="why-t">
                        <ul>
                            <Jello>
                                <li><h2>WHY ME</h2></li>
                            </Jello>
                            <li>GET IN TOUCH</li>
                        </ul>
                    </div>
                    <div className="why-b">
                        <Flip bottom >
                            <ul>
                                <li><p>DIVE INTO YOUR PROJECT</p> individual approach to each project</li>
                                <li><p>MEET THE DEADLINES</p>Terms of order execution and possibilities of their modification are being discussed with you.</li>
                                <li><p>MONTHLY TECHNICAL SUPPORT </p> if bugs oppear after the project. free remove them</li>
                                <li><p>QUALITY WORK</p> for the work performed, the guarantees prescribed in the contract are provided.</li>
                            </ul>
                        </Flip >
                    </div>
                </div>
            </section>
        </Element>


    )
}

export default Why
