import React from "react";
import DUMMY from "../../images/call.webp";
import ARROW from "../../images/image.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Title from "./Title";
import "./style.css";
import { Link } from "react-router-dom";
import REC from "../../images/rec.png"
import {Slide} from 'react-reveal/Slide';
import { Zoom } from "react-reveal";
function LeftCard(props){
    return (
        <>
        <Zoom duration={1500} delay={100} >
            <div className="col-lg-4 col-md-6 BigCard" style={{marginBottom: 100}}>
                <div className="row ">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 LeftCards" style={{"padding": "0px"}}>
                        <img src={DUMMY} className="val"></img>
                    </div>
                    <div className="col-md-1" ></div>
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
                        <Link to={`#`} className="col-6 link edge popup"> <div>View Details</div> </Link>
                        <Link to={`../registerevent`} className="col-6 edge link popup" style={{borderLeft: 0}}> <div>Register</div> </Link>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <div className="col-12 SmallCard">
                <div className="row">
                    <div className="col-6 edge" style={{"padding": "0px"}}><img src={DUMMY} className="val"></img></div>
                    <div className="col-6 edge" style={{borderLeft: 0}}>
                        <div className="Titl"> {props.title}</div>
                        <div className="incen">{props.Incentives}</div>
                    </div>
                </div>
                <div className="row" >
                <Link to={`#`} className=" col-6 edge1 link" style={{borderTop: 0}}>
                    <div >
                        Details
                        <img src={ARROW} className="arrowpoint"></img>
                    </div>
                    </Link>
                    <Link to={`../registerevent`} className="col-6 edge1 link" style={{borderLeft: 0 , borderTop: 0}}>
                    <div >
                        Register
                        <img src={ARROW} className="arrowpoint1"></img>
                        </div>
                        </Link>
                </div>
            </div>
            </Zoom>
        </>
    )
}

function RegisterCard(props){
    const Events=[
        {
            title: "Clash Royale",
            Incentives: "1st Place - Rs. 3000, 2nd Place - Rs. 1000"
        },
        {
            title: "Call Of Duty Mobile",
            Incentives: "1st Place - Rs. 3000, 2nd Place - Rs. 1000"
        },
        {
            title: "Nritta",
            Incentives: "1st Place - Rs. 4000, 2nd Place - Rs. 2000"
        },
        {
            title: "Cut To The Chase",
            Incentives: "1st Place - Rs. 5000, 2nd Place - Rs. 3000"
        }
        ,{
            title: "Take The Stage",
            Incentives: "1st Place - Rs. 4000, 2nd Place - Rs. 2000"
        }
        ,
        {
            title: "Brush Up!",
            Incentives: "1st Place - Rs. 2000, 2nd Place - Rs. 1000"
        },
        {
            title: "Ramp It Up",
            Incentives: " Mr. Infin8 - Rs. 3000, Ms. Infin8 - Rs. 3000"
        },
        {
            title: "Sargam",
            Incentives: " 1st Place - Rs. 4000, 2nd Place - Rs. 2000"
        },
        {
            title: "Photography Contest",
            Incentives: "1st Place - Rs. 2000, 2nd Place - Rs. 1000"
        }
    ]
    return (
        <div className="regis">
        <Navbar></Navbar>
        <Title></Title>
        <div className="container RegisterCard" >
            <div className="row marginchange invert">
                <LeftCard title="Mad Mix" Incentives="Incentives"/>
                <LeftCard title="Battle Of The Bands" Incentives="Incentives"/>
                <LeftCard title="Blastoff" Incentives="Incentives"/>
                <LeftCard title="Clash Royale" Incentives="Incentives"/>
                <LeftCard title="Call Of Duty Mobile" Incentives="Incentives"/>
                <LeftCard title="Valorant" Incentives="Incentives"/>
                <LeftCard title="Nritta" Incentives="Incentives"/>
                <LeftCard title="Cut To The Chase" Incentives="Incentives"/>
                <LeftCard title="Take The Stage" Incentives="Incentives"/>
                <LeftCard title="Brush Up!" Incentives="Incentives"/>
                <LeftCard title="Ramp It Up" Incentives="Incentives"/>
                <LeftCard title="Sargam" Incentives="Incentives"/>
                <LeftCard title="Chitrakarma" Incentives="Incentives"/>
                <LeftCard title="League Of Fanatics" Incentives="Incentives"/>
                <LeftCard title="Dumb Charades" Incentives="Incentives"/>
                <LeftCard title="War Of Words" Incentives="Incentives"/>
                <LeftCard title="Movie Screening" Incentives="Incentives"/>
                <LeftCard title="Karaoke + Dance Show" Incentives="Incentives"/>
                <LeftCard title="Gulp And Gobble" Incentives="Incentives"/>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}
export default RegisterCard;