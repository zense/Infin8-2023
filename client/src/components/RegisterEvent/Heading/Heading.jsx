import './NewHeading.scss'
import Arrow from '../../../images/VectorOrange.png';
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import {BiRupee} from 'react-icons/bi'
export default function Heading(props){
    console.log("this are props",props);
    return (

        <div className={`NewTitle NewTitle-img-${props.id}`}>
            {/* <Bounce top duration={1000}> */}
                <div className='titlename'>
                    <Bounce top duration={1000}>
                    <div className="row">
                        <div className="col-12 col-md-7" >
                        
                            <div className="row titlerow">
                                {props.heading}.
                            </div>
                            {/* <img src={Arrow}></img> */}
                        </div>
                        
                    </div>
                    </Bounce>
                        <div className='row Details'>
                    <Fade left delay={600}>
                        <div className='col-12 col-md-5 '>
                            <div className='Top'>
                                Last Date of Registration
                            </div>
                            <div className='Bottom'>
                                {props.deadline}
                            </div>
                        </div>
                    </Fade>

                    <Fade left delay={600}>
                        <div className='col-6 col-md-3'>
                            <div className='Top'>
                                Prizes
                            </div>
                            <div className='Bottom'>
                                <BiRupee style={{"marginTop": "-10px"}}/>{props.prizes}
                            </div>
                        </div>
                    </Fade>
                    
                    <Fade left delay={600}>
                        <div className='col-6 col-sm-4 align'>
                        <div className='Top'>
                                Mode
                            </div>
                            <div className='Bottom'>
                                {props.mode}
                            </div>
                        </div>
                    </Fade>

                </div>
                </div>
            {/* </Bounce> */}
            
           
        </div>
    );
}

