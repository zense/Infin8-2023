import "./LeftCard.scss"
import Image from "../../images/clashroyale.jpeg"
import { BsArrowDownRight } from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom"
import Fade from 'react-reveal/Fade'

const LeftCard = (props) => {
    const navigate = useNavigate();
    return <Fade left>
        <div className="LeftCard">
            <div className="row">
                <div className="col mzr"></div>
                <div className="col-md-8 col-lg-7 col-xl-6 mzr">
                    <div className="card">
                        <div className="row">
                            <img src={process.env.PUBLIC_URL + props.image} alt={props.title} />
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
                        {props.disabled ? 
                        
                        <div className="row"></div> : 
                        <div className="row buttonrow">
                            <div className="col-12 buttoncol mzl">
                                <button className="leftborder
                                tabbtn " onClick={()=>{
                                    navigate(`/registerevent/${props.id}`)
                                }}><div className="row">
                                    <div className="col-9">
                                            Register
                                    </div>
                                    <div className="col-3">
                                        <BsArrowDownRight />
                                    </div>
                                </div></button>
                            </div>
                        </div>
                    }
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