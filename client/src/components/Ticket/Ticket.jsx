import './Ticket.scss'
import qr from '../../images/qr-ticket.png'
import { TriangleDownIcon } from '@radix-ui/react-icons';
import infilogo from '../../images/infilogoblack.svg';
import iiitblogo from '../../images/iiitblogoblack.svg';
const Ticket = () => {
    return <div className="Ticket">
        <div className="row ticketrow">
            <div className="col-12 col-sm-5 qrcol container">
                    {/* <div className="arrowblock">
                    <TriangleDownIcon color='black' className='triangleicon' />
                    </div> */}
                    <img src={qr} alt="" className='qrimage' />
            </div>
            <div className="col-12 col-sm-7">
                <div className="row titlerow">
                    INFIN8 2023
                </div>
                <div className="row subtitle">
                    The only ticket that you need for all the events that you have registered for.
                </div>
                <div className="row">
                    <div className="col namecol">
                        <div className="row deets1">
                            JOHN DOE
                        </div>
                        <div className="row deets2">
                            84i4huu4y883
                        </div>
                    </div>
                    <div className="col">
                        <img src={infilogo} alt="" className="logo" />
                        <img src={iiitblogo} alt="" className="logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Ticket;