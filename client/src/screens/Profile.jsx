import './Profile.scss'
import arrow from '../images/downrightwhite.svg'
import RegisteredSlip from '../components/RegisteredSlip/RegisteredSlip'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Ticket from '../components/Ticket/Ticket'

import Vector from '../images/Vector3.png'
import { useReducer } from 'react'
const Profile = (props) => {
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
        <div className="slips">
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
        </div>
        <Footer/>
    </div>
}

export default Profile;