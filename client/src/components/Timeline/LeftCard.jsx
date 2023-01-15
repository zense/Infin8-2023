import "./LeftCard.scss"
import Image from "../../images/clashroyale.jpeg"
import { BsArrowDownRight } from 'react-icons/bs'
import { Link } from "react-router-dom"
import Fade from 'react-reveal/Fade'

const LeftCard = (props) => {
    return <Fade left>
        <div className="LeftCard">
            <div className="row">
                <div className="col mzr"></div>
                <div className="col-md-8 col-lg-7 col-xl-6 mzr">
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
                                <button className="rightborder"><div className="row">
                                    <div className="col-9">Details</div>
                                    <div className="col-3">
                                        <BsArrowDownRight />
                                    </div>
                                </div></button>
                            </div>
                            <div className="col-6 buttoncol mzl">
                                <button className="leftborder "><div className="row">
                                    <div className="col-9"><Link to={`../registerevent`}className="whitetext">Register</Link></div>
                                    <div className="col-3">
                                        <BsArrowDownRight />
                                    </div>
                                </div></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-lg-2 mzl mzr">
                    <div className="row emptyspace"></div>
                    <div className="topBorder"></div>
                </div>
                <div className="col-2 mzl">
                    <div className="row emptyspace2"></div>
                    <div className="timeBox">
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    </Fade>
}

export default LeftCard;