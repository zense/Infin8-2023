import QR from "../../../images/qr-ticket.png"
import Dotted from "../../../images/dottedbox.png"
import './RegisterTeam.css'
import { BsFillSquareFill } from "react-icons/bs";
import React from 'react'
export default function RegisterTeam(props){
    const [teamCodeInput,changeTeamCodeInput] = React.useState(true);
    return (
        <div>
            <div style={{"textAlign":"center"}}>
                <h1 style={{"color":"white","paddingTop":"20px"}}>REGISTER</h1>
            </div>
            <div className="container-fluid" style={{"paddingLeft":"2.7vw", "paddingRight":"2.7vw"}}>
                <div className="row">

                    <div class="btn-group btn-group-lg" role="group" aria-label="Basic radio toggle button group" style={{"marginTop":"10px"}}>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" defaultChecked onClick={()=>{
                            changeTeamCodeInput(true);
                        }}/>
                        <label class="btn btn-outline-light" for="btnradio1" style={{"borderRadius": "0px"}}>
                            <div style={{"textAlign": "left"}}>
                                <div className="fontControl">Join an</div>
                                <div className="fontControl">existing team.</div>
                            </div>
                        </label>


                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={()=>{
                            changeTeamCodeInput(false);
                        }}/>
                        <label class="btn btn-outline-light" for="btnradio3" style={{"borderRadius": "0px"}}>
                            <div style={{"textAlign": "left"}}>
                                <div className="fontControl">Create a</div>
                                <div className="fontControl">new team.</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="costDiv">
                Rs. {props.entrance_fee+props.event_fee}
            </div>
            
            <br></br>
            
            <div style={{"color":"white", "fontFamily":"Poppins","paddingLeft":"2.7vw"}}>
                <span>Event Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.event_fee}</span>
                <br></br>
                <span>Entrance Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.entrance_fee}</span>
                {/* <hr style={{"border":"2px solid", "backgroundColor":"#A23F5f"}}/> */}
                <div style={{"backgroundColor":"white","height":"2px","marginRight":"20px"}}>

                </div>
                <span>Total Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.entrance_fee+props.event_fee}</span>
            </div>

            <div style={{"color":"white","marginTop":"15px"}}>
                <h1 style={{"textAlign":"center"}}>PAYMENT</h1>
                <div style={{"marginLeft":"15px","marginRight":"15px"}}>Pay the above mentioned amount using UPI and 
                upload the receipt screenshot here. Our team will 
                verify the payment. The 'Register' button will turn 
                to 'Registered ' if it is approved :</div>
            </div>

            <div className="fluid-container">
                <div className="row">
                    <div className="col-6" style={{"paddingLeft":"10px","paddingTop":"20px"}}>
                        <img src={QR} className="img-fluid" style={{"paddingRight":"15px","paddingLeft":"15px"}} alt="QR"/>
                    </div>
                        
                    <div className="col-6 clickk" onClick={()=>{
                        document.getElementById("inputFile").click()
                    }} style={{"paddingTop":"20px"}}>
                        <input type={"file"} id="inputFile" style={{"display":"none"}}></input>
                        <img src={Dotted} className="img-fluid" style={{"paddingRight":"15px","paddingLeft":"15px"}} alt="ScannedQR"/>
                    </div>
                </div>
            </div>
            
            
            
            <div style={{"paddingTop":"15px","textAlign":"center"}}>
                <input placeholder="Enter UPI Transaction ID" id="inputID" style={{"width":"200px"}}/>
                <br></br>
                {teamCodeInput && <input placeholder="Enter Team Code" id="inputID" style={{"width":"200px"}}/>}
                <br></br>
                <button className="btn btn-default" style={{"backgroundColor":"white","marginTop":"20px"}}>Register</button>
            </div>
            
        </div>
    );
}