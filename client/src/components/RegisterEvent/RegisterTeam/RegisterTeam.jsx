import QR from "../../../images/qr-ticket.png"
import Dotted from "../../../images/dottedbox.png"
import './RegisterTeam.css'
import { BsFillSquareFill } from "react-icons/bs";
import React from 'react'
import { db } from "../../../firebase-config";
import { collection, doc, getDocs, getDoc, updateDoc, addDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRouter } from "@remix-run/router";
import { useEffect } from "react";
import { confirmPasswordReset } from "@firebase/auth";
import { ConsoleWriter } from "istanbul-lib-report";


export default function RegisterTeam(props) {
    const [isDisabled, setDisabled] = useState(false);

    const [invalidTeamCode, setInvalidTeamCode] = React.useState(false);
    const [joinExistingTeam, changejoinExistingTeam] = React.useState(true);
    //const [teamCodeInput, changeTeamCodeInput] = React.useState(true);
    const [color1, changecolor1] = useState("red");
    const [color2, changecolor2] = useState("green");

    const [user_registered, set_user_registered] = useState(false);
    const [teamID, setTeamID] = useState("Team_ID");
    const [teamName, setTeamName] = useState("");

    const [upiID, setUpiID] = useState("");
    const [transactionID, setTransactionID] = useState("");
    const [teamCode, setTeamCode] = useState("");

    const [teamMembers, setTeamMembers] = useState([]);

    const checkStatus = async () => {
        var userReference = doc(db, "users_list", props.user_id);
        var userData = await getDoc(userReference);
        // Fetching the payment details from the paymeny object map in firebase.
        var paymentDetails = (userData).data().paymentDetails;

        var eventTeamMap = (userData).data().eventTeamMap;
        // document.getElementById("chooseTeam").style.visibility = "hidden";

        if (paymentDetails[props.event_id] !== "Register") {

            var paymentReference = doc(db, "payments", paymentDetails[props.event_id]);
            var paymentData = await getDoc(paymentReference);
            console.log("this is paymentdata",(paymentData), props.event_id);
            // console.log("ths is true or false", "status" in (paymentData).data());


            if((paymentData).data() !== undefined)
            {
                var status = (paymentData).data().status;
                if (status === "processed") {
                    console.log("status is processed")
                    setTeamID(eventTeamMap[props.event_id]);
                    
                    var teamRef = doc(db, "teams", eventTeamMap[props.event_id])
                    var teamData = await getDoc(teamRef);
                    console.log("team data: ", teamData.data())
                    console.log("team members name: ", teamData.data().membersName)
                    setTeamMembers(teamData.data().membersName);
                    setTeamName(teamData.data().team_name);

                    set_user_registered(true);
                    document.getElementById("chooseTeam").style.visibility = "visible";
                    // document.getElementsByName("RegisterForEvent").innerHTML = "Registered";
                }
                else {
                    document.getElementsByName("RegisterForEvent")[0].innerHTML = "Processing";
                    document.getElementById("ContactIfNotProcessed").style.visibility = "visible";
                    document.getElementsByName("RegisterForEvent")[0].classList.add("disabled");
                }
            }
            else{
                document.getElementsByName("RegisterForEvent")[0].innerHTML = "Register";
                document.getElementById("ContactIfNotProcessed").style.visibility = "hidden";
                document.getElementsByName("RegisterForEvent")[0].classList.remove("disabled");
            }
        }
    }

    useEffect(() => {
        if (props.loggedInStatus) {
            checkStatus();
        }
    },[props.loggedInStatus])




    const createPaymentObject = async () => {
        // Create a new team
        setDisabled(true);
        if (!joinExistingTeam) {

            var status = "processing";
            if (props.iiitbStudent) {
                status = "processed";
            }

            const paymentRef = await addDoc(collection(db, "payments"), {
                event_id: props.event_id,
                multi: true,
                screenshot: "",
                status: status,
                transaction_id: transactionID,
                upi_id: upiID,
                user: props.user_id
            });

            let paymentObjectID = paymentRef.id;
            console.log("paymentObjectid", paymentObjectID)
            const userRef = doc(db, "users_list", props.user_id);
            const userDocSnap = await getDoc(userRef);


            const teamData = await addDoc(collection(db, "teams"), {
                limit: props.limit,
                vacancy: props.limit-1,
                members: [props.user_id],
                membersName: [props.user_name],
                leaderID: props.user_id,
                event_id: props.event_id,
                team_name: teamName
            });

            // if (userDocSnap.exists()){
            let paymentDetails = (userDocSnap).data().paymentDetails;
            paymentDetails[props.event_id] = paymentObjectID;

            let eventTeamMap = (userDocSnap).data().eventTeamMap;
            eventTeamMap[props.event_id] = teamData.id;

            await updateDoc(userRef, {
                paymentDetails: paymentDetails,
                eventTeamMap: eventTeamMap
            })

            setTeamID(teamData.id);
            // Create a Team Button is disabled for now.
            document.getElementsByName("RegisterForEvent")[0].classList.add("disabled");

            if (props.iiitbStudent) {
                document.getElementsByName("RegisterForEvent")[0].innerHTML = "Registered";
            }
            else {
                document.getElementsByName("RegisterForEvent")[0].innerHTML = "Processing";
                document.getElementById("ContactIfNotProcessed").style.visibility = "visible";
            }
        }

        else {
            // Joining An Existing team.
            var teamToJoin = "";
            var teamToJoinData = {};
            // const teamIDs = await getDocs(collection(db, "teams"));
            var teamRef = doc(db, "teams", teamCode);
            var teamData = await getDoc(teamRef);

            console.log(teamData.data());

            if (teamData.data() !== undefined && teamData.data().event_id === props.event_id) {
                teamToJoin = teamCode;
                teamToJoinData = teamData.data();

                if (teamToJoinData.vacancy === 0) {
                    console.log("Team size already full!");
                }
                else{
                    setInvalidTeamCode(false)
                    var teamMembers = teamToJoinData.members;
                    var teamMembersName = teamToJoinData.membersName;
                    teamMembers.push(props.user_id);
                    teamMembersName.push(props.user_name);

                    console.log("I am here");
                    var leaderID = teamToJoinData.leaderID;
                    
                    console.log("Team Members", teamMembers);
                    console.log("Leader ID ", leaderID);
                    await updateDoc(teamRef, {
                        vacancy: teamToJoinData.vacancy - 1,
                        members: teamMembers,
                        membersName: teamMembersName
                    })

                    var userRef = doc(db, "users_list", props.user_id);
                    var userDocSnap = await getDoc(userRef);

                    var leaderRef = doc(db, "users_list", leaderID);
                    var leaderDocSnap = await getDoc(leaderRef);

                    var paymentObjectID = (leaderDocSnap).data().paymentDetails[props.event_id];

                    // ! Change user data
                    let paymentDetails = (userDocSnap).data().paymentDetails;
                    paymentDetails[props.event_id] = paymentObjectID;

                    let eventTeamMap = (userDocSnap).data().eventTeamMap;
                    eventTeamMap[props.event_id] = teamToJoin;

                    await updateDoc(userRef, {
                        paymentDetails: paymentDetails,
                        eventTeamMap: eventTeamMap
                    })

                    console.log("Updated!!");
                    // Disable the Register Button and add team mate details.
                    document.getElementsByName("RegisterForEvent")[0].classList.add("disabled");

                    if (props.iiitbStudent) {
                        document.getElementsByName("RegisterForEvent")[0].innerHTML = "Registered";
                    }
                    else {
                        document.getElementsByName("RegisterForEvent")[0].innerHTML = "Processing";
                        document.getElementById("ContactIfNotProcessed").style.visibility = "visible";
                    }
                }
            }
            else{
                console.log("Team Does not Exist!");
                setInvalidTeamCode(true)
            }
            // get all teams and check if it matches any of the ids
        }
        checkStatus();
        setDisabled(false)


    }


    return (

        <div>
            <div style={{ "textAlign": "center" }}>
                <h1 style={{ "color": "white", "paddingTop": "32px", "paddingBottom": "10px", "fontSize": "3rem", "fontFamily": "Archivo", "fontWeight": "700" }}>REGISTER</h1>
            </div>
            <div id="chooseTeam" className="container-fluid" style={{ "paddingLeft": "2.7vw", "paddingRight": "2.7vw" }}>
                <div className="row">
                    <div className="btn-group btn-group-lg" role="group" aria-label="Basic radio toggle button group" style={{ "marginTop": "10px" }}>
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked onClick={() => {
                            changejoinExistingTeam(true);
                        }} />
                        <label className="btn btn-outline-light padd" htmlFor="btnradio1" style={{ "borderRadius": "0px" }}>
                            <div style={{ "textAlign": "left" }} onClick={() => {
                                changecolor2("green");
                                changecolor1("red");
                            }}>
                                <div className="fontControl row" >
                                    <div className="col-12">Join an existing
                                    </div></div>
                                <div className="fontControl row">
                                    <div className="col-9">team. </div>
                                    <div className="col-3">
                                        <BsFillSquareFill fill={color2} className="bsfil" />
                                    </div>
                                </div>
                            </div>
                        </label>


                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={() => {
                            changejoinExistingTeam(false);
                        }} />
                        <label className="btn btn-outline-light padd1" htmlFor="btnradio3" style={{ "borderRadius": "0px" }}>
                            <div style={{ "textAlign": "left" }} onClick={() => {
                                changecolor2("red");
                                changecolor1("green");
                            }}>
                                <div className="fontControl row">
                                    <div className="col-12">Create a new </div></div>
                                <div className="fontControl row">
                                    <div className="col-9">team.</div>
                                    <div className="col-3">
                                        <BsFillSquareFill fill={color1} className="bsfil" />
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

            {
                (props.loggedInStatus)
                    ? (<div style={{ "fontFamily": 'Poppins', "fontStyle": "normal", "color": "#888888", "paddingTop": "15px", "marginLeft": "2.7vw" }}>
                        ⓘ Signed in as {props.email}
                    </div>)
                    : (<div style={{ "fontFamily": 'Poppins', "fontStyle": "normal", "color": "#888888", "paddingTop": "15px", "marginLeft": "2.7vw" }}>
                        ⓘ Not Signed In.
                    </div>)



            }


            {
                user_registered !== true
                    ?
                    props.iiitbStudent === true
                        ?
                        <div style={{ "paddingTop": "5px", "textAlign": "center" }}>
                            <div>
                                {joinExistingTeam &&
                                    <input
                                        placeholder="Enter Team Code"
                                        id="inputID"
                                        style={{ "width": "200px" }}
                                        onChange={(event) => {
                                            setTeamCode(event.target.value);
                                        }}
                                    />}
                            </div>
                            <div>
                                {!joinExistingTeam &&
                                    <input
                                        placeholder="Enter Team Name"
                                        id="inputID"
                                        style={{ "marginTop": "30px" }}
                                        onChange={(event) => {
                                            setTeamName(event.target.value);
                                        }}
                                />}
                            </div>
                            <div>
                                {
                                    !joinExistingTeam &&
                                    <button
                                    name="RegisterForEvent"
                                    className="btn btn-default"
                                    style={{ "backgroundColor": "white", "marginTop": "25px" }}
                                    onClick={createPaymentObject}
                                    disabled={isDisabled || teamName === ""}
                                    >Register</button>
                                }
                                {
                                    joinExistingTeam &&
                                    <button
                                    name="RegisterForEvent"
                                    className="btn btn-default"
                                    style={{ "backgroundColor": "white", "marginTop": "25px" }}
                                    onClick={createPaymentObject}
                                    disabled={isDisabled}
                                    >{isDisabled ? "Processing": "Register"}</button>
                                }
                            </div>
                        </div>
                        :
                        <div>

                            <div style={{ "color": "white", "fontFamily": "Poppins", "paddingLeft": "2.7vw", "padding-top": "20px" }}>
                                <div style={{ "padding-bottom": "3px" }}>
                                    <span>Team Creation</span><span style={{ "float": "right", "paddingRight": "50px" }}>{!joinExistingTeam ? "Rs." + props.fee : "Free"}</span>
                                </div>
                                {/* <hr style={{"border":"2px solid", "backgroundColor":"#A23F5f"}}/> */}
                                <div style={{ "backgroundColor": "white", "height": "2px", "marginRight": "20px" }}>

                                </div>
                                <div style={{ "padding-top": "3px" }}>
                                    <span>Total Fee</span><span style={{ "float": "right", "paddingRight": "50px" }}>{!joinExistingTeam ? "Rs." + props.fee : "Free"}</span></div>
                            </div>

                            {
                                <div>

                                    {
                                        !joinExistingTeam &&

                                        <div>
                                            <div style={{ "color": "white", "marginTop": "20px" }}>
                                                <h1 style={{ "textAlign": "center", "fontSize": "3rem", "fontFamily": "Archivo", "fontWeight": "700" }}>PAYMENT</h1>
                                                <div style={{ "marginLeft": "15px", "marginRight": "15px", "marginTop": "15px", "marginBottom": "15px" }}>Pay the above mentioned amount using UPI and
                                                    upload the receipt screenshot here, making sure that the UPI reference ID is visible. Our team will
                                                    verify the payment. The 'Register' button will turn
                                                    to 'Registered ' if it is approved :</div>
                                            </div>

                                            <div className="fluid-container">
                                                <div className="row">
                                                    <div className="col-6" style={{ "paddingLeft": "10px", "paddingTop": "20px" }}>
                                                        <img src={QR} className="img-fluid" style={{ "paddingRight": "15px", "paddingLeft": "15px" }} alt="QR" />
                                                    </div>

                                                    <div className="col-6 clickk" onClick={() => {
                                                        document.getElementById("inputFile").click()
                                                    }} style={{ "paddingTop": "20px" }}>
                                                        <input type={"file"} id="inputFile" style={{ "display": "none" }} accept="image/*" onChange={(e) => {
                                                            //e.target.files[0] can be posted to backend
                                                            var file = e.target.files[0];
                                                            var imgtag = document.getElementById("dotted2");
                                                            var reader = new FileReader();
                                                            reader.onload = function (event) {
                                                                imgtag.src = event.target.result;
                                                            };
                                                            reader.readAsDataURL(file);
                                                        }}></input>
                                                        <img src={Dotted} className="img-fluid" id="dotted2" style={{ "paddingRight": "15px", "paddingLeft": "15px" }} alt="ScannedQR" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }




                                    <div style={{ "paddingTop": "5px", "textAlign": "center" }}>
                                        <div>
                                            <div>
                                                {!joinExistingTeam &&
                                                    <input
                                                        placeholder="Enter Team Name"
                                                        id="inputID"
                                                        style={{ "marginTop": "30px" }}
                                                        onChange={(event) => {
                                                            setTeamName(event.target.value);
                                                        }}
                                                />}
                                            </div>
                                            <div>
                                                {!joinExistingTeam &&

                                                    <input
                                                        placeholder="Enter UPI Reference Number / Transaction ID"
                                                        id="inputID"
                                                        style={{ "marginTop": "30px" }}
                                                        onChange={(event) => {
                                                            setTransactionID(event.target.value);
                                                        }}

                                                    />
                                                }
                                            </div>
                                            <div>
                                                {!joinExistingTeam &&
                                                    <input
                                                        placeholder="Enter UPI ID"
                                                        id="inputID"
                                                        style={{ "marginTop": "30px" }}
                                                        onChange={(event) => {
                                                            setUpiID(event.target.value);
                                                        }}
                                                    />}
                                            </div>
                                            {joinExistingTeam &&
                                                <input
                                                    placeholder="Enter Team Code"
                                                    id="inputID"
                                                    style={{ "width": "200px" }}
                                                    onChange={(event) => {
                                                        setTeamCode(event.target.value);
                                                    }}
                                                />}
                                            
                                        </div>
                                        
                                        
                                        

                                        
                                        {
                                            joinExistingTeam ?                                             
                                            <button
                                                name="RegisterForEvent"
                                                className="btn btn-default"
                                                style={{ "backgroundColor": "white", "marginTop": "25px" }}
                                                disabled={isDisabled}
                                                onClick={createPaymentObject}>Join team
                                            </button>
                                            :
                                            (
                                                (upiID !== "" && transactionID !== "" && teamName !== "") ?
                                                <button
                                                name="RegisterForEvent"
                                                className="btn btn-default"
                                                style={{ "backgroundColor": "white", "marginTop": "25px" }}
                                                onClick={createPaymentObject}
                                                disabled={isDisabled}
                                                >Register</button>

                                            :
                                            <button
                                                disabled
                                                name="RegisterForEvent"
                                                className="btn btn-default"
                                                style={{ "backgroundColor": "white", "marginTop": "25px" }}
                                                onClick={createPaymentObject}>Register</button>
                                            )
                                            
                                            
                                        }
                                    </div>
                                    
                                    {(joinExistingTeam && invalidTeamCode) && 
                                        <div style={{"color":"white", "textAlign":"center","marginTop": "15px","color":"red"}}>
                                            Invalid Team Code
                                        </div>
                                    }
                                    
                                    <div id="ContactIfNotProcessed" style={{"color":"white", "visibility":"hidden", "textAlign":"center", "marginTop": "30px"}}>
                                        <p>Your payment will be processed within 24 hrs.</p> 
                                        <p>If not done by then, contact +91 9043633668 on WhatsApp</p>
                                    </div>
                                </div>

                            }
                        </div>

                    :
                    <>
                        <div style={{ "fontFamily": 'Poppins', "fontStyle": "normal", "color": "white", "paddingTop": "20px", "marginLeft": "2.7vw" }}>
                            <h5>
                                Your Team ID : <br></br>{teamID}
                            </h5>
                        </div>
                        <div style={{ "fontFamily": 'Poppins', "fontStyle": "normal", "color": "white", "paddingTop": "20px", "marginLeft": "2.7vw" }}>
                            <h5>
                                Your Team Name : <br></br>{teamName}
                            </h5>
                        </div>
                        <div>
                            <h2 style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#FFCD00","paddingTop":"25px","marginLeft":"2.7vw"}}><u>Your Team</u></h2>
                            <ol>
                                {teamMembers && teamMembers.map((team_member, index)=>{
                                    return(
                                        
                                            <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"white","paddingTop":"25px","marginLeft":"2.7vw"}}>
                                                <li><h5>{team_member}</h5></li>
                                            </div>
                                    );
                                    
                                })}
                            </ol>
                        </div>
                    </>
            }
        </div>
    );
}