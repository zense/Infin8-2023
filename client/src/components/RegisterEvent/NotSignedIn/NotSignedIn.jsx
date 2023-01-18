import './NotSignedIn.css'
import { useNavigate } from 'react-router-dom';

export default function NotSignedIn(props){

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
            </div>

            <div style={{"paddingTop":"15px","textAlign":"center"}}>
                <button onClick={directLoginPage} className="btn btn-default" style={{"backgroundColor":"white","marginTop":"20px"}}>Sign In to Register</button>
            </div>
        </div>
    );
}