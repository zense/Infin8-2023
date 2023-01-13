// import arrow from '../../Vector1.png'
import Register from '../Register/Register';
import RegisterTeam from "../RegisterTeam/RegisterTeam.jsx"
import NotSignedIn from "../NotSignedIn/NotSignedIn.jsx"
import Registered from '../Registered/Registered';
export default function Container(props){

    return (
        <div className="container-fluid px-0" >
            
            <div className="row">
                <div className="col-md-8 col-12" style={{"paddingRight":"0"}}>
                    
                    <div style={{"border":"1px solid black","padding":"20px 0 20px 0","textIndent": "1em"}}>
                        <h1 style={{"fontWeight":"700"}}>INCENTIVES</h1>
                    </div>
                    
                    <div style={{"border":"1px solid black","padding":"20px 0 20px 0","textIndent": "1em"}}>
                        <h2 style={{"fontWeight":"500"}}>{props.prize_money}</h2>
                        <br></br>
                        <h3 className='worthPrizePool'>worth Prize Pool</h3>
                    </div>
                    
                    <div style={{"border":"1px solid black","padding":"20px 0 20px 0","textIndent": "1em"}}>
                        <h1 style={{"fontWeight":"700"}}>ABOUT</h1>
                    </div>
                    
                    <div style={{"border":"1px solid black","padding":"20px 30px 20px 30px"}}>
                        <p>{props.about}</p>
                    </div>

                    <div style={{"border":"1px solid black","padding":"20px 0 20px 0","textIndent": "1em"}}>
                        <h1 style={{"fontWeight":"700"}}>OTHER DETAILS</h1>
                    </div>
                
                    <div style={{"border":"1px solid black","padding":"20px 30px 20px 30px"}}>
                        <p>{props.other_details}</p>
                    </div>

                    <div style={{"border":"1px solid black","padding":"20px 0 20px 0","textIndent": "1em"}}>
                        <h1 style={{"fontWeight":"700"}}>CONTACTS</h1>
                    </div>

                    <div style={{"border":"1px solid black","padding":"20px 30px 20px 30px"}}> 
                        { (props.contacts).map((contact,index)=>{
                            return(
                                <div key={index}>
                                    <h4 style={{"fontFamily":"Archivo","fontWeight":"600"}}>{contact.name}</h4>
                                    <h5 style={{"fontFamily":"Poppins","color":"#575757"}}>{contact.number}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="col-md-4 col-12" style={{"backgroundColor":"black"}}>
                   
                    
                    {/* <Register
                        event_fee={props.event_fee}
                        email={props.email}
                    /> */}
                    
                    
                    <RegisterTeam
                        fee={props.event_fee}
                        email={props.email}
                    />
                    
                    {/* <NotSignedIn/> */}

                    {/* <Registered email={"vikaskaly@gmail.com"}/> */}
                
                </div>  
                
            </div>
            
        
        </div>
    );
}

// Register is for individual events when user is signed in
// RegisterTeam is for team events when user is logged in
// NotSignedIn is for when User isn't Signed in
// Registered is when user has registered for the event.

// Whether the user has signed in or not needs to be taken from props