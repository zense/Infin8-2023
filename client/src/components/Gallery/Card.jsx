import './Card.scss'
import Image from "../../images/clashroyale.jpeg"
import arrow from "../../images/downright.svg"
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';

const Card = (props) => {
    return <Zoom>
        <div className="Card">
            <div className="row">
                <div className="col mz">
                    <img className="cardImage" src={props.image} alt="image" />
                </div>
            </div>
            <div className="row">
                <h1 className="title">
                    {props.title}
                </h1>
            </div>
            <div className="row">
                <h5 className="incentives">
                    {props.incentives}
                </h5>
            </div>
            <div className="row">
                <div className="col-6 mz">
                    <button className='border_right registerbutton'><div className="row">
                        <div className="col-9">
                            <Link to={`/registerevent/${props.id}`} className="white">
                                Details
                            </Link></div>
                        <div className="col-3">
                            <img className="arrow" src={arrow} alt="image" />
                        </div>
                    </div></button>
                </div>
                <div className="col-6 mz border_left">
                    <button className='border_left registerbutton'><div className="row">
                        <div className="col-9">
                            <Link to={`/registerevent/${props.id}`} className="white">
                                Register
                            </Link>
                        </div>
                        <div className="col-3">
                            <img className="arrow" src={arrow} alt="image" />
                        </div>
                    </div></button>
                </div>
            </div>
        </div>
    </Zoom>
}

export default Card;
