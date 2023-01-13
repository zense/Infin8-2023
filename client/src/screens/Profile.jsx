import './Profile.scss'
import qr from '../images/qr-ticket.png'
import arrow from '../images/downrightwhite.svg'
import RegisteredSlip from '../components/RegisteredSlip/RegisteredSlip'
import Vector from '../images/Vector3.png'
const Profile = ()=>{
    return <div className="Profile">
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
            <img src={arrow} alt="" className='arrowicon'/>
        </div>
        <div className="row ticketrow">
            <div className="col-5 qrcol">
                <img src={qr} alt="" className='qrimage'/>
            </div>
            <div className="col-7">
                Ticket text
            </div>
        </div>
        <div className="row page_heading">
            YOUR
        </div>
        <div className="row page_heading">
            REGISTRATIONS
            <img src={arrow} alt="whatever" className='arrowicon'/>
        </div>
        <RegisteredSlip></RegisteredSlip>
        <RegisteredSlip></RegisteredSlip>

    </div>
}

export default Profile;