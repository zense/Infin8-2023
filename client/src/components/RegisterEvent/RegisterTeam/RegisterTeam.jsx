import QR from "../../../images/qr-ticket.png"
import Dotted from "../../../images/dottedbox.png"
import './RegisterTeam.css'
import { BsFillSquareFill } from "react-icons/bs";
import React from 'react'
export default function RegisterTeam(props){
    const [joinExistingTeam,changejoinExistingTeam] = React.useState(true);
    //const [teamCodeInput, changeTeamCodeInput] = React.useState(true);
    const [color1, changecolor1] = React.useState("red");
    const [color2, changecolor2] = React.useState("green");
    return (
        
        <div>
            <div style={{"textAlign":"center"}}>
                <h1 style={{"color":"white","paddingTop":"20px"}}>REGISTER</h1>
            </div>
            <div className="container-fluid" style={{"paddingLeft":"2.7vw", "paddingRight":"2.7vw"}}>
                <div className="row">

                    <div className="btn-group btn-group-lg" role="group" aria-label="Basic radio toggle button group" style={{"marginTop":"10px"}}>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onClick={()=>{
                            changejoinExistingTeam(true);
                        }}/>
                        <label className="btn btn-outline-light" htmlFor="btnradio1" style={{"borderRadius": "0px"}}>
                            <div style={{"textAlign": "left"}} onClick={()=>{
                                            changecolor2("green");
                                            changecolor1("red");
                                        }}>
                                <div className="fontControl row" >
                                    <div className="col-12">Join an existing
                                    </div></div>
                                <div className="fontControl row">
                                    <div className="col-9">team. </div>
                                    <div className="col-3"> 
                                        <BsFillSquareFill fill={color2} className="bsfil"/>
                                    </div>
                                </div>
                            </div>
                        </label>


                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={()=>{
                            changejoinExistingTeam(false);
                        }}/>
                        <label className="btn btn-outline-light" htmlFor="btnradio3" style={{"borderRadius": "0px"}}>
                            <div style={{"textAlign": "left"}}  onClick={()=>{
                                            changecolor2("red");
                                            changecolor1("green");
                                        }}>
                                <div className="fontControl row">
                                    <div className="col-12">Create a new </div></div>
                                <div className="fontControl row">
                                    <div className="col-9">team.</div>
                                    <div className="col-3">
                                        <BsFillSquareFill fill={color1} className="bsfil"/>
                                    </div>
                                    </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="costDiv">
                {!joinExistingTeam ? "Rs." + props.fee : "Free"}
            </div>
            <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                Signed in as {props.email}
            </div>
            <br></br>
            
            <div style={{"color":"white", "fontFamily":"Poppins","paddingLeft":"2.7vw"}}>
                <span>Team Creation Fee</span><span style={{"float":"right","paddingRight":"50px"}}>{!joinExistingTeam ? "Rs." + props.fee : "Free"}</span>
                <br></br>
                {/* <hr style={{"border":"2px solid", "backgroundColor":"#A23F5f"}}/> */}
                <div style={{"backgroundColor":"white","height":"2px","marginRight":"20px"}}>

                </div>
                <span>Total Fee</span><span style={{"float":"right","paddingRight":"50px"}}>{!joinExistingTeam ? "Rs." + props.fee : "Free"}</span>
            </div>

            {!joinExistingTeam &&

                <div>
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
                                <input type={"file"} id="inputFile" style={{"display":"none"}} accept="image/*" onChange={(e)=>{
                                    console.log(e.target.files[0]);
                                    //e.target.files[0] can be posted to backend
                                    var file=e.target.files[0];
                                    var imgtag=document.getElementById("dotted2");
                                    var reader=new FileReader();
                                    reader.onload=function(event){
                                        imgtag.src=event.target.result;
                                    };
                                    reader.readAsDataURL(file);
                                }}></input>
                                <img src={Dotted} className="img-fluid" id="dotted2" style={{"paddingRight":"15px","paddingLeft":"15px"}} alt="ScannedQR"/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
            <div style={{"paddingTop":"15px","textAlign":"center"}}>
                {!joinExistingTeam && <input placeholder="Enter UPI Transaction ID" id="inputID" style={{"width":"200px"}}/>}
                <br></br>
                {joinExistingTeam && <input placeholder="Enter Team Code" id="inputID" style={{"width":"200px"}}/>}
                <br></br>
                <button className="btn btn-default" style={{"backgroundColor":"white","marginTop":"20px"}}>Register</button>
            </div>
            
        </div>
        
    );
}