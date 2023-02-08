import './NotSignedIn.css'
import { useNavigate } from 'react-router-dom';

export default function NotSignedIn(props){
    const event_closed = ["2","4","5","6","7","8","9","10","11","12","13","14","15","16","17"].includes(props.event_id);
    console.log(props.event_id);
    const navigate = useNavigate();
    
    function directLoginPage(){
        let path = `../../../sign-in`;
        navigate(path);
    }

    return (
        <div>
            <div style={{"textAlign":"center"}}>
            <h1 style={{"color":"white","paddingTop":"32px", "paddingBottom":"10px","fontSize":"3rem","fontFamily":"Archivo","fontWeight":"700"}}>REGISTER</h1>
            </div>

            <div className="costDiv">
                Rs. {props.event_fee}
            </div>

            {/* <div className="costDiv">
                Free
            </div> */}
            <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Not Signed In.
            </div>
            {event_closed ?
                    <div style={{ "fontFamily": 'Poppins', "fontStyle": "normal", "color": "white", "paddingTop": "20px", "marginLeft": "2.7vw" }}>
                        <h5>
                            Registrations for this event have been closed. Contact SPOCS for any last minute requests. Join us at Infin8 2023 to enjoy the performances.
                        </h5>
                    </div>:
            <div style={{"color":"white", "fontFamily":"Poppins","paddingLeft":"15px", "paddingTop": "30px"}}>
                <div style={{"paddingBottom": "3px"}}>
                <span>Event Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.event_fee}</span>
                </div>
                {/* <hr style={{"border":"2px solid", "backgroundColor":"#A23F5f"}}/> */}
                <div style={{"backgroundColor":"white","height":"2px","marginRight":"20px"}}>

              </div>
                <div style={{"paddingTop": "3px"}}>
                <span>Total Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.event_fee}</span>
                </div>  
            </div>}
            {event_closed===false&&
            <div style={{"paddingTop":"15px","textAlign":"center"}}>
                <button onClick={directLoginPage} className="btn btn-default" style={{"backgroundColor":"white","marginTop":"20px"}}>Sign In to Register</button>
            </div>}
        </div>
    );
}