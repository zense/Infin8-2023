import React from "react";
import DUMMY from "../../images/call.webp";
import ARROW from "../../images/image.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Title from "./Title";
import "./style.css";
import { Link } from "react-router-dom";
import REC from "../../images/rec.png"
import { Zoom } from "react-reveal";
import eventDetails from "../../content/eventDetails.json";
import { useEffect } from "react";
import { useLocation } from "react-router";
import {BiRupee} from 'react-icons/bi'
const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};
function LeftCard(props) {
    var link="./Eventimages/"+ props.props.id+".jpg";
    return (
        <>
            <Zoom duration={1500} delay={100} >
                <div className="col-lg-4 col-md-6 BigCard" style={{ marginBottom: 100 }}>
                    <div className="row ">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 LeftCards" style={{ "padding": "0px" }}>
                            <img src={link} className="val"></img>
                        </div>
                        <div className="col-md-1" ></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10" style={{ paddingLeft: 2 }}>
                            <div className="Titl"> {props.title}</div>
                            <div className="incen">{props.Incentives}</div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                {props.props.id==1 || props.props.id==3 ? <Link to={`/registerevent/${props.props.id}`} className="col-12 link edge popup" > <div>Details</div> </Link> : <Link to={`/registerevent/${props.props.id}`} className="col-12 link edge popup" > <div>Register</div> </Link> }
                                {/* <Link to={
                                    `/registerevent/${props.props.id}`
                                } className="col-6 edge link popup" style={{ borderLeft: 0 }} > <div>Register</div> </Link> */}
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <div className="col-12 SmallCard">
                    <div className="row">
                        <div className="col-6 edge" style={{ "padding": "0px" }}><img src={link} className="val"></img></div>
                        <div className="col-6 edge" style={{ borderLeft: 0 }}>
                            <div className="Titl"> {props.title}</div>
                            <div className="incen">{props.Incentives}</div>
                        </div>
                    </div>
                    <div className="row" >
                        {props.props.id==1 || props.props.id==3 ? <Link to={`/registerevent/${props.props.id}`} className=" col-12 edge1 link" style={{ borderTop: 0 }}>
                            <div style={{"text-align": "center"}}>
                                Details
                            </div>
                        </Link> : <Link to={`/registerevent/${props.props.id}`} className=" col-12 edge1 link" style={{ borderTop: 0 }}>
                            <div style={{"text-align": "center"}}>
                                Register
                            </div>
                        </Link>}
                        {/* <Link to={`/registerevent/${props.props.id}`} className=" col-12 edge1 link" style={{ borderTop: 0 }}>
                            <div style={{"text-align": "center"}}>
                                Register
                            </div>
                        </Link> */}
                        {/* <Link to={`/registerevent/${props.props.id}`} className="col-6 edge1 link" style={{ borderLeft: 0, borderTop: 0 }} state={props.props}>
                            <div >
                                Register
                                <img src={ARROW} className="arrowpoint1"></img>
                            </div>
                        </Link> */}
                    </div>
                </div>
            </Zoom>
        </>
    )
}

function RegisterCard(props) {

    return (
        <div className="regis">
            <ScrollToTop>
                <Navbar props={props}></Navbar>
                <Title></Title>
                <div className="row">
            <Zoom delay={500} duration={1250}>
            {/* {props.paid_base_fees==false ? <div className='col-12 Disclaimer' style={{"backgroundColor":"#474646","padding":"20px 20px 20px 20px","color":"white","fontFamily":"Archivo"}}>
                    <div>
                        To register for an event, the base fee of <BiRupee style={{"marginTop": "-5px"}}/>50 needs to be paid. Once this fee is paid, you can register for any event in this fest. 
                        <div style={{"marginTop" : "10px"}}>You an pay the base fee <a href="/pay_base_fees" style={{ "color" : "white"}}>here </a></div>
                    </div>
                </div> : null} */}
                <div className='col-12 Disclaimer' style={{"backgroundColor":"#474646","padding":"20px 20px 20px 20px","color":"white","fontFamily":"Archivo"}}>
                    <div>
                      All non-participants will have to pay an Entrance fee of <BiRupee style={{"marginTop": "-5px"}}/><b>50</b> before entering the campus.
                    </div>
                </div> 
                {/* disclaimer should be displayed only if the paid_base_fee isn't paid, else it shouldn't be visible, backend peeps, pls take care of this */}
                </Zoom>
            </div>
                <div className="container-fluid RegisterCard">
                    <div className="row marginchange invert">
                        {
                            eventDetails.map((event) => {
                                return <LeftCard title={event.title} Incentives={event.subtitle} props={event} />
                            })
                        }
                    </div>
                </div>
                <Footer></Footer>
            </ScrollToTop>
        </div>
    )
}
export default RegisterCard;