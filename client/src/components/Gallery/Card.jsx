import './Card.scss'
import Image from "../../images/concert.jpeg"
import arrow from "../../images/downright.svg"
import { Link } from 'react-router-dom'
const Card = (props) => {
    return <div className="Card">
        <div className="row">
            <div className="col mz">
                <img className= "cardImage" src={Image} alt="" />
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
                <button className='border_right'><div className="row">
                    <div className="col-9">Details</div>
                    <div className="col-3">
                        <img className = "arrow" src={arrow} alt="" />
                    </div>
                </div></button>
            </div>
            <div className="col-6 mz border_left">
                <button className='border_left'><div className="row">
                    <div className="col-9">
                        <Link to={`../registerevent`} >Register</Link>
                    </div>
                    <div className="col-3">
                        <img  className = "arrow" src={arrow} alt="" />
                    </div>
                </div></button>
            </div>
        </div>
    </div>
}

export default Card;
