// import './Heading.css'
// import './Heading.scss'
// import Vector from '../../../images/Vector2.png'
// import SampleImage from "../../../images/concert.jpeg"
// import Disclaimer from "../../../images/Disclaimer.png"
// import Sample from '../../sample.png'
import './NewHeading.scss'
import Arrow from '../../../images/VectorOrange.png';
export default function Heading(props){
    return (
        // <div className='EventHeading'>
        //     <h1 className='displa-1'>{props.paid_base_fees ? props.heading : "Pay Base Fees"}  <img className="ArrowImage" src={Vector} alt="arrow"></img></h1>
        //     <div className="fluid-container">
        //         <div className="row">
        //             <div className="col-12">
        //                 {props.paid_base_fees ? 
        //                 <img src={SampleImage} className="img-fluid" alt="event" style={{"paddingRight":"15px","paddingLeft":"15px","marginBottom":"40px","marginTop":"40px"}}/>
        //                     :
        //                 <img src={Disclaimer} className="img-fluid" alt="event" style={{"paddingRight":"15px","paddingLeft":"15px","marginBottom":"40px","marginTop":"40px"}}/>
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </div>
        //need to send props
        <div className="NewTitle" >
            <div className="row">
                <div className="col-12 col-md-7" >
                    <div className="row titlerow">
                        {props.heading}
                    </div>
                    {/* <img src={Arrow}></img> */}
                </div>
            </div>
            
            <div className='row Details'>
                <div className='col-12 col-md-4 '>
                    <div className='Top'>
                        Last Date of Registration
                    </div>
                    <div className='Bottom'>
                        12 January 2023
                    </div>
                </div>
                <div className='col-6 col-md-4'>
                    <div className='Top'>
                        Prizes
                    </div>
                    <div className='Bottom'>
                        TBD
                    </div>
                </div>
                <div className='col-6 col-sm-4 align'>
                <div className='Top'>
                        Mode
                    </div>
                    <div className='Bottom'>
                        Offline
                    </div>
                </div>

            </div>
        </div>
    );
}

