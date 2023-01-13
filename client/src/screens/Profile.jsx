import './Profile.scss'
import arrow from '../images/downrightwhite.svg'
import RegisteredSlip from '../components/RegisteredSlip/RegisteredSlip'
import Footer from '../components/Footer/Footer'
import { Navbar } from 'react-bootstrap'
import Ticket from '../components/Ticket/Ticket'

const Profile = () => {
    return <div className="Profile">
        <Navbar/>
        <div className="row title">

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