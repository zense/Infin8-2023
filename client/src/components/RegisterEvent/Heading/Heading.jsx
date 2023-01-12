import './Heading.css'
import './Heading.scss'
import Vector from '../../../images/Vector2.png'
import SampleImage from "../../../images/concert.jpeg"
// import Sample from '../../sample.png'
export default function Heading(props){
    return (
        <div className='EventHeading'>
            <h1 className='displa-1'>{props.heading}  <img className="ArrowImage" src={Vector} alt="arrow"></img></h1>
            <div className="fluid-container">
                <div className="row">
                    <div className="col-12">
                        <img src={SampleImage} className="img-fluid" alt="event" style={{"paddingRight":"15px","paddingLeft":"15px"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

