import './NewHeading.scss'
import Arrow from '../../../images/VectorOrange.png';
import {BiRupee} from 'react-icons/bi'
export default function Heading(props){
    return (

        <div className="NewTitle" >
            <div className="row">
                <div className="col-12 col-md-7" >
                    <div className="row titlerow">
                        {props.heading}.
                    </div>
                    {/* <img src={Arrow}></img> */}
                </div>
            </div>
            
            <div className='row Details'>
                <div className='col-12 col-md-5 '>
                    <div className='Top'>
                        Last Date of Registration
                    </div>
                    <div className='Bottom'>
                        {props.deadline}
                    </div>
                </div>
                <div className='col-6 col-md-3'>
                    <div className='Top'>
                        Prizes
                    </div>
                    <div className='Bottom'>
                        <BiRupee style={{"marginTop": "-10px"}}/>{props.prizes}
                    </div>
                </div>
                <div className='col-6 col-sm-4 align'>
                <div className='Top'>
                        Mode
                    </div>
                    <div className='Bottom'>
                        {props.mode}
                    </div>
                </div>

            </div>
        </div>
    );
}

