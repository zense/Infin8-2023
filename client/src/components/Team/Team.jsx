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
                    <img src={props.img} alt="team Image" className="img-fluidx"/>
                    <div className="normal-text">
                        <h4 className="team-name">{props.name}</h4>
                        <span className="subtitle">{props.role}</span>
                    </div>
                </div>
                <div className="team-content">
                    <div className="display-table change">
                        <div className="display-table-cell ">
                            <div >
                               <a href={props.insta} style={{"text-decoration": "none" , "color": "black"}}> <BsInstagram className="newicons"/></a> <a href={props.linkedin} style={{"text-decoration": "none" , "color": "black"}}> <BsLinkedin className="newicons"/></a> 
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
                    <h1><u>Organisers</u></h1>
                    </div>
                </div>
                <div className="row">
                    <NewTeamCard img={"./eventimages/Chaitanya.png"} name={"Chaitanya Manas"} role={"SAC"} insta={"https://instagram.com/cmanas03?igshid=NTdlMDg3MTY="} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Jacob.jpg"} name={"Jacob Matthew"} role={"SAC"} insta={""} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Asrith.jpeg"} name={"Asrith Nune"} role={"SAC"} insta={""} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Gowtham.jpg"} name={"Gowtham Reddy"} role={"SAC"} insta={"https://instagram.com/_.hgangster._?igshid=NTdlMDg3MTY="} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Sahithi.jpg"} name={"V L Sahithi"} role={"SAC"} insta={""} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Gopal.jpeg"} name={"Gopal Gupta"} role={"SAC"} insta={""} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Rahul.jpeg"} name={"Rahul Tejpal"} role={"SAC"} insta={""} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Debag.jpeg"} name={"Debagana Mukherjee"} role={"SAC"} insta={""} linkedin={""}/>
                </div>

                <div className="row">
                    <div className="col-12 subtitle1" style={{"marginTop": "20px"}}>
                        <h1><u>Web-Developers</u></h1>
                    </div>
                </div>
                <div className="row">
                    <NewTeamCard img={"./eventimages/Rohit.jpg"} name={"Rohit Shah"} role={"SPOC/Backend-Developer"} insta={"https://instagram.com/mr_rohit_shah_?igshid=NTdlMDg3MTY="} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Jacob.jpg"} name={"Dhanvi Medha"} role={"SPOC/Backend-Developer"} insta={"https://instagram.com/mr_rohit_shah_?igshid=NTdlMDg3MTY="} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Asrith.jpeg"} name={"Subhajeet Lahiri"} role={"Frontend-Developer"} insta={"https://instagram.com/subhajeetlahiri?igshid=NTdlMDg3MTY="} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Kalyan.jpg"} name={"Kalyan Ram"} role={"Frontend-Developer"} insta={"https://instagram.com/kalyanrammunagala?igshid=NmQ2ZmYxZjA="} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Vikas2.jpeg"} name={"Vikas Kalyanapuram"} role={"Frontend-Developer"} insta={"https://instagram.com/vkas_13?igshid=NTdlMDg3MTY="} linkedin={""}/>
                    <NewTeamCard img={"./eventimages/Amar.jpg"} name={"Amar Pratap Singh"} role={"Backend-Developer"} insta={""} linkedin={""}/>
                </div>
            </div>
        </div>
    </div>
)
}
// function TeamTitle(props){
//     return <div className="TeamTitle">
//         <div className="container ">
//             <div className="row" >
//                     <div className="col-12 " style={{"marginTop": "80px"}}>
//                         <div className="awesome awesome1" style={{"color": "white"}}>
//                             TEAM
//                             <img src={Vector} className='arrowicon1'></img>
//                         </div>
                    
//                     </div>
//             </div>
//         </div>
//     </div>
// }
export default function Team(props){
    return(
        <div className="Team"  style={{"overflow-x": "hidden", "background-color": "black"}}>
            <Navbar props={props}></Navbar>
            {/* <TeamTitle/> */}
            <Template/>
            <Footer/>
        </div>
    )
}