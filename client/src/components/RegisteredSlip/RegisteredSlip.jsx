import './RegisteredSlip.scss'
import { BsCircleFill } from 'react-icons/bs';

const RegisteredSlip = (props) => {
    return <div className="RegisteredSlip row">
        <div className="col-1 col-sm-1 bordercol">
            <div className="borderbox"></div>
        </div>
        <div className="col-10 col-sm-10 contcol">
            <div className="white row">
                <div className="col-1 dotcol">
                    <BsCircleFill color='black' className='dot' size={12}/>
                </div>
                <div className="col-11">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="subtitle">
                        {props.subtitle}
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default RegisteredSlip;