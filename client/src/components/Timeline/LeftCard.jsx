import "./LeftCard.scss"
import Image from "../../images/concert.jpeg"

const LeftCard = (props) => {
    return <div className="LeftCard">
        <div className="row">
            <div className="col mzr"></div>
            <div className="col-6 mzr">
                <div className="card">
                    <div className="row">
                        <img src={Image} alt={props.title} />
                    </div>
                    <div className="row">
                        <div className="col title">
                        {props.title}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col incentives">
                        {props.incentives}
                        </div>
                    </div>
                    <div className="row buttonrow">
                        <div className="col-6 buttoncol mzr">
                            <button className="rightborder">Details</button>
                        </div>
                        <div className="col-6 buttoncol mzl">
                            <button className="leftborder ">Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mzl mzr">
                <div className="row emptyspace"></div>
                <div className="topBorder"></div>
            </div>
            <div className="col mzl">
                <div className="row emptyspace2"></div>
                <div className="timeBox">
                    {props.time}
                </div>
            </div>
        </div>
    </div>
}

export default LeftCard;