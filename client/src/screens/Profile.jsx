import './Profile.scss'
import arrow from '../images/downrightwhite.svg'
import RegisteredSlip from '../components/RegisteredSlip/RegisteredSlip'
import Footer from '../components/Footer/Footer'
import { Navbar } from 'react-bootstrap'
import Ticket from '../components/Ticket/Ticket'

import Vector from '../images/Vector3.png'
const Profile = () => {
    return <div className="Profile">
        <Navbar/>
        <div className="row title" style={{"marginTop": "13vw"}}>
            <div className='col-12 YourProf'>
               YOUR 
            </div>
        </div>
        
        <div className="row title" style={{"marginBottom": "100px"}}>
            <div className='col-12 YourProf'>
               PROFILE
               <img src={Vector} alt="" className='arrowicon1' />
            </div>
        </div>

        <div className="row page_heading">
            YOUR
        </div>
        <div className="row page_heading">
            TICKET
            <img src={arrow} alt="" className='arrowicon' />
        </div>
        <Ticket/>
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