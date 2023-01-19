import React from "react";
// import './Team.scss';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CALL from "../../images/call.webp";
import {Zoom} from "react-reveal";
import { Fade } from "react-reveal";
import Vector from '../../images/Vector3.png'
import './NewTeam.scss'
function TeamCard(props){
    return <>
        <div className="col-lg-4 col-sm-6">
            <Zoom duration={2000} delay={100}>
            <div className="card adjust Cards" >
                <img src={CALL} className="card-img-top" />
                <div className="card-body" style={{"background-color": "black", "color": "white"}}>
                    <div className="Heading">
                       {props.name}
                    </div>
                </div>
                </div>
                </Zoom>
            </div>
    </>
}
function NewTeamCard(props){
    return (
        <div className="col-lg-4 col-md-6">
        <div className="team-item">
            <div className="team-img">
                <img src={props.img} alt="team Image"/>
                <div className="normal-text">
                    <h4 className="team-name">{props.name}</h4>
                    <span className="subtitle">{props.role}</span>
                </div>
            </div>
            <div className="team-content">
                <div className="display-table">
                    <div className="display-table-cell">
                        <div className="share-icons">
                            <div className="border"></div>
                            <ul className="team-social icons-1">
                                <li><a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
                                </li>
                            </ul>

                            <ul className="team-social icons-2">
                                <li><a href="#" className="social-icon"><i className="fa fa-skype"></i></a>
                                </li>
                                <li><a href="#" className="social-icon"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="team-details">
                            <h4 className="team-name">
                                <a href="speakers-single.html">{props.name}</a>
                            </h4>
                            <span className="postion">{props.role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )   
}
function Template(props){
    return (
    <div className="Template">
        <div id="rs-team" className="rs-team fullwidth-team pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <NewTeamCard img={"./eventimages/Dhoni.webp"} name={"Rohit Shah"} role={"Organiser"}/>
                    <NewTeamCard img={"./eventimages/Dhoni.webp"} name={"Rohit Shah"} role={"Organiser"}/>
                    <NewTeamCard img={"./eventimages/Dhoni.webp"} name={"Rohit Shah"} role={"Organiser"}/>
                    <NewTeamCard img={"./eventimages/Dhoni.webp"} name={"Rohit Shah"} role={"Organiser"}/>
                </div>
            </div>
        </div>
    </div>
)
}
function TeamTitle(props){
    return <div className="TeamTitle">
        <div className="container change">
            <div className="row" >
                    <div className="col-12 register" >
                        <Fade top delay={100} duration={1500}>
                        <div className="weird weird1" sty>
                           {">"} infin8
                        </div>
                        </Fade>
                        <div className="awesome awesome1" style={{"color": "white"}}>
                            TEAM
                            <img src={Vector} className='arrowicon1'></img>
                        </div>
                    
                    </div>
            </div>
        </div>
    </div>
}
export default function Team(props){
    return(
        <div className="Team"  style={{"overflow-x": "hidden"}}>
            <Navbar props={props}></Navbar>
            {/* <TeamTitle/> */}
            <Template/>
            <Footer/>
        </div>
    )
}