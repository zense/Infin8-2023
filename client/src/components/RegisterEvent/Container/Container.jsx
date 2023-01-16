// import arrow from '../../Vector1.png'
import Register from '../Register/Register';
import RegisterTeam from "../RegisterTeam/RegisterTeam.jsx"
import NotSignedIn from "../NotSignedIn/NotSignedIn.jsx"
import Registered from '../Registered/Registered';
import {BiPhone} from 'react-icons/bi'
export default function Container(props){

    return (
        <div className="container-fluid px-0" >
            
            <div className="row">
                <div className="col-md-8 col-12" style={{"paddingRight":"0"}}>

                    
                    <div style={{"marginTop":"20px","padding":"20px 0 20px 0","textIndent": "1em"}} className="row">
                        <div className='col-11' style={{"backgroundColor":"#FFCD00","padding":"20px 0 20px 30px","boxShadow": "0px 5px 5px grey"}}>
                            <h1 style={{"fontWeight":"700","fontFamily": "Gloria Hallelujah"}}>INCENTIVES</h1>
                        </div>
                    </div>
                    
                    <div style={{"padding":"20px 0 20px 25px","textIndent": "1em","fontFamily":"Poppins"}}>
                        <h2 style={{"fontWeight":"500"}}>First Prize : {props.prize_money}</h2>
                        <br></br>
                        <h2 className='worthPrizePool'>Second Prize : {props.prize_money2}</h2>
                    </div>
                    
                    <div style={{"padding":"20px 0 20px 0","textIndent": "1em"}} className="row">
                        <div className='col-11' style={{"backgroundColor":"#FFCD00","padding":"20px 0 20px 30px","boxShadow": "0px 5px 5px grey"}}>
                            <h1 style={{"fontWeight":"700","fontFamily": "Gloria Hallelujah"}}>ABOUT</h1>
                        </div>
                    </div>

                    <div style={{"padding":"20px 30px 20px 30px","marginLeft":"0"}} className="row">
                        <div className='col-11' style={{"backgroundColor":"#FF5C00","padding":"20px 20px 20px 20px","color":"white","fontFamily":"Poppins","borderRadius":"0px 20px 20px 20px"}}>
                            <p>{props.about}</p>
                        </div>
                    </div>

                    <div style={{"padding":"20px 0 20px 0","textIndent": "1em"}} className="row">
                        <div className='col-11' style={{"backgroundColor":"#FFCD00","padding":"20px 0 20px 30px","boxShadow": "0px 5px 5px grey"}}>
                            <h1 style={{"fontWeight":"700","fontFamily": "Gloria Hallelujah"}}>RULES</h1>
                        </div>
                    </div>
                    
                    <div style={{"padding":"20px 30px 20px 30px","marginLeft":"0"}} className="row">
                        <div className='col-11' style={{"backgroundColor":"#FF5C00","padding":"20px 20px 20px 20px","color":"white","fontFamily":"Poppins","borderRadius":"0px 20px 20px 20px"}}>
                            <ol>{props.other_details.map((string)=>{
                                return <li>{string}</li>
                            })}</ol>
                        </div>
                    </div>

                    <div style={{"padding":"20px 0 20px 0","textIndent": "1em"}} className="row">
                        <div className='col-11' style={{"backgroundColor":"#FFCD00","padding":"20px 0 20px 0","paddingLeft":"20px","boxShadow": "0px 5px 5px grey"}}>
                            <h1 style={{"fontWeight":"700","fontFamily": "Gloria Hallelujah"}}>CONTACTS</h1>
                        </div>
                    </div>

                    <div style={{"padding":"20px 30px 20px 30px"}}> 
                        { (props.contacts).map((contact,index)=>{
                            return(
                                <div key={index}>
                                    <h4 style={{"fontFamily":"Archivo","fontWeight":"600"}}><BiPhone/>  {contact.name}</h4>
                                    <h5 style={{"fontFamily":"Poppins","color":"#575757"}}>{contact.contact}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="col-md-4 col-12" style={{"backgroundColor":"black"}}>
                   
                    
                    {/* <Register
                        event_fee={props.event_fee}
                        email={props.email}
                    />
                     */}
                    
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