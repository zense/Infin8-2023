import QR from "../../../images/qr-ticket.png"
import Dotted from "../../../images/dottedbox.png"
import { useNavigate } from "react-router-dom";
import './Register.css';
import { db } from "../../../firebase-config";
import { collection, doc, getDocs, getDoc, updateDoc, addDoc, setDoc } from "firebase/firestore";
import { useState } from "react";


export default function Register(props){
    
    const [user_registered, set_user_registered] = useState(false);

    const checkStatus = async () => {

        var userReference = doc(db, "users_list", props.user_id);
        var userData = getDoc(userReference);

        var paymentDetails = (await userData).data().paymentDetails;
        
        if (paymentDetails[props.event_id] !== "Register"){
            var paymentReference = doc(db, "payments", paymentDetails[props.event_id]);
            var paymentData = getDoc(paymentReference);
            
            var status = (await paymentData).data().status;
    
            if (status === "processed"){
                set_user_registered(true);
                // document.getElementById("payBaseFeeButton").classList.add("disabled");
                // props.setDisplayText("Payment Successful");
                // return true;
            }
            else{
                document.getElementsByName("RegisterForEvent")[0].innerHTML = "Processing";
                document.getElementsByName("RegisterForEvent")[0].classList.add("disabled");
            }
        }

    }

    if (props.loggedInStatus){
        checkStatus();
    }




    const createPaymentObject = async () => {

        var status = "processing";
        
        if (props.iiitbStudent){
            status = "processed";
        }

        console.log(props.user_id);
        // event id
        const paymentRef = await addDoc(collection(db, "payments"), {
            event_id: props.event_id,
            multi: false,
            screenshot: "",
            status: status,
            transaction_id:"ID NUMBER PATA NAHI",
            user: props.user_id
        });
        console.log("Payment Object Made");
        
        let paymentObjectID = paymentRef.id;

        const userRef = doc(db, "users_list", props.user_id);
        const userDocSnap = getDoc(userRef);

        console.log("Setting users_list");

        // if (userDocSnap.exists()){
        let paymentDetails = (await userDocSnap).data().paymentDetails;
        paymentDetails[props.event_id] = paymentObjectID;

        updateDoc(userRef, {
            paymentDetails: paymentDetails
        })

        // document.getElementById("payBaseFeeButton").innerHTML = "Processing";
        document.getElementsByName("RegisterForEvent")[0].classList.add("disabled");
        if (props.iiitbStudent){
            document.getElementsByName("RegisterForEvent")[0].innerHTML = "Registered";
        }
        // }
        // else{
            // console.log("User does not exists!");
        // }
        // get payment_details from a user

    }



    return (
        <div>
            <div style={{"textAlign":"center"}}>
            <h1 style={{"color":"white","paddingTop":"32px", "paddingBottom":"10px","fontSize":"3rem","fontFamily":"Archivo","fontWeight":"700"}}>REGISTER</h1>
            </div>


            <div className="costDiv">
                Rs. {props.event_fee}
            </div>

            {(props.loggedInStatus)
            ? (<div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Signed in as {props.email}
            </div>)
            : (<div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Not Signed In.
            </div>)}
            
            
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


            
            {
            user_registered
            ?
                <h1>You are registered</h1>
            :
            props.iiitbStudent === true
            ?
                <button
                    name="RegisterForEvent"
                    className="btn btn-default" 
                    style={{"backgroundColor":"white","marginTop":"25px"}}
                    onClick={
                        createPaymentObject
                    }>Register
                </button>   
            :
            <div>
                <div style={{"color":"white","marginTop":"30px"}}>
                <h1 style={{"textAlign":"center","fontSize":"3rem","fontFamily":"Archivo","fontWeight":"700"}}>PAYMENT</h1>
                    <div style={{"marginLeft":"15px","marginRight":"15px", "marginTop": "15px", "marginBottom": "15px"}}>Pay the above mentioned amount using UPI and 
                    upload the receipt screenshot here, making sure that the UPI reference ID is visible. Our team will 
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
                                var imgtag=document.getElementById("dotted1");
                                var reader=new FileReader();
                                reader.onload=function(event){
                                    imgtag.src=event.target.result;
                                };
                                reader.readAsDataURL(file);
                            }}></input>
                            <img src={Dotted} className="img-fluid" id="dotted1" style={{"paddingRight":"15px","paddingLeft":"15px"}} alt="ScannedQR"/>
                        </div>
                    </div>
                </div>
                
                
                <div style={{"paddingTop":"15px","textAlign":"center"}}>
                    <div>
                    <input 
                        placeholder="Enter UPI Reference Number / Transaction ID" 
                        id="inputID" 
                        
                        onChange={()=>{

                        }}
                    />
                    </div>
                    <div>
                    <input 
                        placeholder="Enter UPI ID" 
                        id="inputID" 
                        
                        onChange={()=>{
                        }}
                    />
                    </div>
                
                        
                    <button
                        name="RegisterForEvent"
                        className="btn btn-default" 
                        style={{"backgroundColor":"white","marginTop":"25px"}}
                        onClick={
                            createPaymentObject
                        }>Register
                        
                        </button>
                </div>
            </div>
            }
            
            </div>
        // </div>
    );
}