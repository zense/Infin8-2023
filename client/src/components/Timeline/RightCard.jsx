import "./RightCard.scss"
// import Image from "../../images/clashroyale.jpeg"
import { BsArrowDownRight } from "react-icons/bs"
import { Link } from "react-router-dom"
import Fade from 'react-reveal/Fade'
const RightCard = (props) => {
    return <Fade right>
        <div className="RightCard">
            <div className="largescreens d-none d-md-block">
                <div className="row">
                    <div className="col-2 mzr">
                        <div className="row emptyspace2 mzr"></div>
                        <div className="timeBox mzr">
                            {props.time}
                        </div>
                    </div>
                    <div className="col-md-1 col-lg-2 mzl mzr">
                        <div className="row emptyspace"></div>
                        <div className="topBorder"></div>
                    </div>
                    <div className="col-md-8 col-lg-7 col-xl-6 mzl">
                        <div className="card">
                            <div className="row">
                                <img src={process.env.PUBLIC_URL + props.image} alt={props.title} className='cardimage'/>
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
                    <div className="col d-none d-md-block mzr"></div>
                </div>
            </div>

            <div className="smallscreens d-block d-md-none">
                <div className="row">
                    <div className="col-2 col-md mzr">
                        <div className="row emptyspace2 mzr"></div>
                        <div className="timeBox mzr">
                            {props.time}
                        </div>
                    </div>
                    <div className="col-1  col-md mzl mzr">
                        <div className="row emptyspace"></div>
                        <div className="topBorder"></div>
                    </div>
                    <div className="col-9 col-md-6 mzl">
                        <div className="card">
                            <div className="row">
                                <div className="col-6">
                                    <div className="imagebox">
                                        <img src={process.env.PUBLIC_URL + props.image} alt={props.title} cardImage/>
                                    </div>
                                </div>
                                <div className="col-6">
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
                                </div>
                            </div>
                            <div className="row buttonrow">
                                <div className="col-6 buttoncol mzr">
                                    <button className="rightborder"><div className="row">
                                        <div className="col-8 buttontextcol">Details</div>
                                        <div className="col-4">
                                            <BsArrowDownRight />
                                        </div>
                                    </div></button>
                                </div>
                                <div className="col-6 buttoncol mzl">
                                    <button className="leftborder "><div className="row">
                                        <div className="col-8"><Link to={`../registerevent`}className="whitetext">Register</Link></div>
                                        <div className="col-4">
                                            <BsArrowDownRight />
                                        </div>
                                    </div></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-md-block mzr"></div>
                </div>
            </div>
        </div>
    </Fade>
}

export default RightCard;