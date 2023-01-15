import React from "react";
import IMG from "../../images/letsee.png"
import { Fade } from "react-reveal";
import Vector from '../../images/Vector3.png'

function Title(){
    return (
        <div className="container change">
            <div className="row">
                    <div className="col-12" style={{"padding-left": "1.5vw"}}>
                        <Fade top delay={100} duration={1500}>
                        <div className="weird weird1">
                            {">"} register
                        </div>
                        </Fade>
                        <div className="awesome awesome1">
                            EVENTS
                            <img src={Vector} className='arrowicon1'></img>
                        </div>
                    
                    </div>
            </div>
        
        </div>
    )
}
export default Title;