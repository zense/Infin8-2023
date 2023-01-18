import React from "react";
import './Team.scss';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CALL from "../../images/call.webp";
import {Zoom} from "react-reveal";
import { Fade } from "react-reveal";
import Vector from '../../images/Vector3.png'
function TeamCard(props){
    return <>
        <div className="col-lg-4 col-sm-6">
            <Zoom duration={2000} delay={100}>
            <div className="card adjust Cards" >
                <img src={CALL} className="card-img-top" />
                <div className="card-body" style={{"background-color": "black", "color": "white"}}>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <div className="Heading">
                       {props.name}
                    </div>
                    <div className="Role">
                        {props.role}
                    </div>
                </div>
                </div>
                </Zoom>
            </div>
    </>
}
function TeamTitle(props){
    return <div className="TeamTitle">
        <div className="container-fluid change">
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
        <div className="Team">
            <Navbar props={props}></Navbar>
            <TeamTitle/>
            <div className="container-fluid">
                <div className="row ">
                   <TeamCard name={"Munagala Kalyan Ram"} role={"Frontend Developer"}/>
                   <TeamCard name={"Vikas Kalyanapuram"} role={"Frontend Developer"}/>
                   <TeamCard name={"Subhajeet Lahiri"} role={"Frontend Developer"}/>
                   <TeamCard name={"Rishi Dutt"} role={"UI/UX Designer"}/>
                   <TeamCard name={"Amar"} role={"Backend Developer"}/>
                   <TeamCard name={"Rohit Shah"} role={"SPOC"}/>
                   <TeamCard name={"Dhanvi Medha"} role={"SPOC"}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}