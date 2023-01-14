import React from "react";
import DUMMY from "../../images/concert.jpeg";
import ARROW from "../../images/Vector1.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Title from "./Title";
import "./style.css";
import { Link } from "react-router-dom";

function LeftCard(props){
    return (
        <>
            <div className="col-lg-4 col-md-6 BigCard" style={{marginBottom: 100}}>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 LeftCards">
                        <img src={DUMMY} className="val"></img>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10" style={{paddingLeft: 2}}>
                        <div className="Titl"> {props.title}</div>
                        <div className="incen">{props.Incentives}</div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-6 edge"><Link to={`#`}>View Details</Link></div>
                            <div className="col-6 edge" style={{borderLeft: 0}}><Link to={`../registerevent`} >Register</Link></div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>


            <div className="col-12 SmallCard">
                <div className="row">
                    <div className="col-6 edge" ><img src={DUMMY} className="val"></img></div>
                    <div className="col-6 edge" style={{borderLeft: 0}}>
                        <div className="Titl"> {props.title}</div>
                        <div className="incen">{props.Incentives}</div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-6 edge1" style={{borderTop: 0}}>
                        <Link to={`#`}>Details</Link>
                        <img src={ARROW} className="arrowpoint"></img>
                    </div>
                    <div className="col-6 edge1" style={{borderLeft: 0 , borderTop: 0}}>
                        <Link to={`../registerevent`} >Register</Link>
                        <img src={ARROW} className="arrowpoint1"></img>
                        </div>
                </div>
            </div>

        </>
    )
}


function RegisterCard(props){
    return (
        <>
        <Navbar props={props}></Navbar>
        <Title></Title>
        <div className="container RegisterCard">
            <div className="row marginchange">
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                <LeftCard title="Title" Incentives="Incentives"/>
                
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}
export default RegisterCard;