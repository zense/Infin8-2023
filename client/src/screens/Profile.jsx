import './Profile.scss'
import arrow from '../images/downrightwhite.svg'
import RegisteredSlip from '../components/RegisteredSlip/RegisteredSlip'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Ticket from '../components/Ticket/Ticket'

import Vector from '../images/Vector3.png'
import { useReducer } from 'react'
import { db } from '../firebase-config'
import { collection, doc, getDocs, getDoc, updateDoc, addDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import eventDetails from '../content/eventDetails.json';
import { useEffect } from 'react'


const Profile = (props) => {

    const [participatedEvents, setParticipatedEvents] = useState([]);

    const checkStatus = async () => {

        var userReference = doc(db, "users_list", props.user.id);
        var userData = getDoc(userReference);

        var paymentDetails = (await userData).data().paymentDetails;
        var eventsParticipatedIn = []; 

        // Number of events = 17
        for (var i=1; i<=17 ;i++){
            var paymentID = paymentDetails[i];

            if (paymentID !== "Register"){
            
                var payRef = doc(db, "payments", paymentID);
                var payData = getDoc(payRef);

                var status = (await payData).data().status;
                var eventID = (await payData).data().event_id;
                var eventName = eventDetails[eventID-1].title;
                var eventSubtitle = eventDetails[eventID-1].subtitle;
                // var status = (await payData).data().status;
                
                if (status === "processed"){
                    var eventObject = {
                        eventName: eventName,
                        eventSubtitle: eventSubtitle
                    }
                    eventsParticipatedIn.push(eventObject);
                }
            }
        }
        setParticipatedEvents(eventsParticipatedIn);
    }
    
    useEffect(() => {
        if (props.loggedInStatus){
            checkStatus();
        }
    },[props.loggedInStatus])


    return <div className="Profile">
        <Navbar props={props}/>
        <div className="row title" >
            <div className='col-12 YourProf blue'>
                &nbsp; {'>'}your 
            </div>
        </div>
        
        <div className="row title bottomtitle" 
        style={{"marginBottom": "12vh"}}
        >
            <div className='col-12 YourProf'>
               PROFILE
               <img src={Vector} alt="image" className='arrowicon1' />
            </div>
        </div>
        <div className="row titledeets">
            {props.user.name}
        </div>
        <div className="row titledeets">
            {props.user.contact}
        </div>
        <div className="row titledeets lasttitle">
            {props.user.email}
        </div>

        <div className="orange">
        <div className="row page_heading">
            YOUR
        </div>
        <div className="row page_heading">
            TICKET
            <img src={arrow} alt="image" className='arrowicon' />
        </div>
        <Ticket user={props.user}/>
        </div>
        <div className="row page_heading">
            YOUR
        </div>
        <div className="row page_heading">
            REGISTRATIONS
            <img src={arrow} alt="whatever" className='arrowicon' />
        </div>

        {/* Need to render (not getting rendered) the Registered Slip, data is already passed in  */}
        {/* participatedEvents array */}
        
        <div className="slips">
        {
            participatedEvents.length > 0 ?
            participatedEvents.map((eventDetail)=>{
                return(
                    <RegisteredSlip 
                        // title="asdasdadas"
                        title = {eventDetail.eventName}
                        subtitle = {eventDetail.eventSubtitle}
                    />
                )
            }) 
            : 
            ""
        }
        </div>
        {/* <div className="slips">
            <RegisteredSlip
                title = "Event 1"
                subtitle = "Beat up baddies to take the crown"
            /> 
            <RegisteredSlip
                title = "Event 1"
                subtitle = "Beat up baddies to take the crown"
            />
            <RegisteredSlip
                title = "Event 1"
                subtitle = "Beat up baddies to take the crown"
            />
            <RegisteredSlip
                title = "Event 1"
                subtitle = "Beat up baddies to take the crown"
            /> 
        </div> */}
        <Footer/>
    </div>
}

export default Profile;