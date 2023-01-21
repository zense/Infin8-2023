import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CALL from "../../images/call.webp";
import {Zoom} from "react-reveal";
import { Fade } from "react-reveal";
import Vector from '../../images/Vector3.png'
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import './NewTeam.scss'
function NewTeamCard(props){
    return (
        <div className="col-lg-4 col-md-6 changewidth">
            <div className="team-item">
                <div className="team-img">
                    <img src={props.img} alt="team Image"/>
                    <div className="normal-text">
                        <h4 className="team-name">{props.name}</h4>
                        <span className="subtitle">{props.role}</span>
                    </div>
                </div>
                <div className="team-content">
                    <div className="display-table change">
                        <div className="display-table-cell ">
                            <div >
                               <a href="#" style={{"text-decoration": "none" , "color": "black"}}> <BsInstagram className="newicons"/></a> <a href="#" style={{"text-decoration": "none" , "color": "black"}}> <BsLinkedin className="newicons"/></a> 
                            </div>
                            <div className="team-details">
                                <h4 className="team-name">
                                    <a href="#">{props.name}</a>
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
                    <div className="col-12 subtitle1" >
                        Organisers
                    </div>
                </div>
                <div className="row">
                    <NewTeamCard img={"./eventimages/Dhoni.webp"} name={"Rohit Shah"} role={"Organiser"}/>
                    <NewTeamCard img={"./eventimages/Dhoni.webp"} name={"Rohit Shah"} role={"Organiser"}/>
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
                        {/* <Fade top delay={100} duration={1500}>
                        <div className="weird weird1" sty>
                           {">"} infin8
                        </div>
                        </Fade> */}
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
        <div className="Team"  style={{"overflow-x": "hidden", "background-color": "black"}}>
            <Navbar props={props}></Navbar>
            <TeamTitle/>
            <Template/>
            <Footer/>
        </div>
    )
}