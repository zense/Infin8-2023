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
            
            {(props.loggedInStatus)
            ? (<div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Signed in as {props.email}
            </div>)
            : (<div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Not Signed In.
            </div>)}
            {/* They can register */}
            {(props.cannot_register===false && props.team_event===true) &&
                    <>
                        <h2 style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#FFCD00","paddingTop":"25px","marginLeft":"2.7vw"}}><u>Your Team</u></h2>
                        <ol>
                            {props.team_members.map((team_member, index)=>{
                                
                                return(
                                    
                                        <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"white","paddingTop":"25px","marginLeft":"2.7vw"}}>
                                            <li><h5>{team_member}</h5></li>
                                        </div>
                                    
                                );
                                
                            })}
                        </ol>
                    </>
            }
            
        </div>
    );
}