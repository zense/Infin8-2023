import "./RightCard.scss"
import Image from "../../images/concert.jpeg"
import { BsArrowDownRight } from "react-icons/bs"

const RightCard = (props) => {
    return <div className="RightCard">
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
                                <BsArrowDownRight/>
                                </div>
                            </div></button>
                            </div>
                            <div className="col-6 buttoncol mzl">
                                <button className="leftborder "><div className="row">
                                <div className="col-9">Register</div>
                                <div className="col-3">
                                <BsArrowDownRight/>
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
                                    <img src={Image} alt={props.title} />
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
                                <BsArrowDownRight/>
                                </div>
                            </div></button>
                            </div>
                            <div className="col-6 buttoncol mzl">
                                <button className="leftborder "><div className="row">
                                <div className="col-8">Register</div>
                                <div className="col-4">
                                <BsArrowDownRight/>
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
}

export default RightCard;