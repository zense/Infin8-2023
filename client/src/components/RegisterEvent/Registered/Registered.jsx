import './Registered.css'
export default function Registered(props){
    return (
        <div>
            <div style={{"textAlign":"center"}}>
            <h1 style={{"color":"white","paddingTop":"32px", "paddingBottom":"10px","fontSize":"3rem","fontFamily":"Archivo","fontWeight":"700"}}>REGISTER</h1>
            </div>

            {props.cannot_register===false &&
                <div className="costDiv">
                    Free
                </div>
            }
            <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"white","paddingTop":"25px","marginLeft":"2.7vw"}}>
                {props.cannot_register === true ?  "You cannot register for this event": "You have successfully Registered for this event"}
            </div>
            <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Signed in as {props.email}
            </div>
            
        </div>
    );
}