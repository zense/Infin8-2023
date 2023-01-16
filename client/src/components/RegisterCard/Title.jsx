import React from "react";
import IMG from "../../images/letsee.png"
import { Fade } from "react-reveal";
import Vector from '../../images/Vector3.png'

function Title(){
    return (
        <>
        <div className="container-fluid change">
            <div className="row">
                    <div className="col-12 register" >
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
        <div className="values">
            <marquee behavior="scroll" direction="right" scrollamount="24" >
                Valorant. Call Of Duty. DJ Night. Duet Dance. Battle Of Bands. Blastoff. Mad Mix. Chitrakarma. League Of Fanatics. Nritta. Clash Royale. Cut To The Chase. Brush Up. Sargam. Ramp It Up. Brush Up. 
            </marquee>
            </div>
        </>

    )
}
export default Title;