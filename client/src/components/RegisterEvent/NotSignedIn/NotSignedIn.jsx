import './NotSignedIn.css'
import { useNavigate } from 'react-router-dom';

export default function NotSignedIn(){

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

            <br></br>

            {/* <div className="costDiv">
                Free
            </div> */}
            <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Not Signed In.
            </div>
            <div style={{"paddingTop":"15px","textAlign":"center"}}>
                <button onClick={directLoginPage} className="btn btn-default" style={{"backgroundColor":"white","marginTop":"20px"}}>Sign In to Register</button>
            </div>
        </div>
    );
}