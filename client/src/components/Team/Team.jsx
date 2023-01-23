import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CALL from "../../images/call.webp";
import {Zoom} from "react-reveal";
import { Fade } from "react-reveal";
import Vector from '../../images/Vector3.png'
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import './NewTeam.scss'
import { useEffect } from "react";
import { useLocation} from "react-router-dom";
const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};
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
                               <a href={props.insta} style={{"text-decoration": "none" , "color": "black"}}> <BsInstagram className="newicons"/></a> {props.github && <a href={props.github} style={{"text-decoration": "none" , "color": "black"}}> <BsGithub className="newicons"/></a> }
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
                    <NewTeamCard img={"./Eventimages/Chaitanya.png"} name={"Chaitanya Manas"} role={"SAC"} insta={"https://instagram.com/cmanas03?igshid=NTdlMDg3MTY="} github={""}/>
                    <NewTeamCard img={"./Eventimages/Jacob.jpg"} name={"Jacob Matthew"} role={"SAC"} insta={""} github={""}/>
                    <NewTeamCard img={"./Eventimages/Asrith.jpeg"} name={"Asrith Nune"} role={"SAC"} insta={"https://www.instagram.com/asrith_gupta/"} github={""}/>
                    <NewTeamCard img={"./Eventimages/Gowtham.jpg"} name={"Gowtham Reddy"} role={"SAC"} insta={"https://instagram.com/_.hgangster._?igshid=NTdlMDg3MTY="} github={""}/>
                    <NewTeamCard img={"./Eventimages/Sahithi.jpg"} name={"V L Sahithi"} role={"SAC"} insta={"https://www.instagram.com/vlsahithi/"} github={""}/>
                    <NewTeamCard img={"./Eventimages/Gopal.jpeg"} name={"Gopal Gupta"} role={"SAC"} insta={""} github={""}/>
                    <NewTeamCard img={"./Eventimages/Rahul.jpeg"} name={"Rahul Tejpal"} role={"SAC"} insta={"https://www.instagram.com/rahultejpal7/"} github={""}/>
                    <NewTeamCard img={"./Eventimages/Debag.jpeg"} name={"Debagana Mukherjee"} role={"SAC"} insta={"https://instagram.com/deegchin?igshid=NTdlMDg3MTY="} github={""}/>
                </div>

                <div className="row">
                    <div className="col-12 subtitle1" style={{"marginTop": "20px"}}>
                        <h1><u>Web-Developers</u></h1>
                    </div>
                </div>
                <div className="row">
                    <NewTeamCard img={"./Eventimages/Rohit.jpg"} name={"Rohit Shah"} role={"SPOC/Backend-Developer"} insta={"https://instagram.com/mr_rohit_shah_?igshid=NTdlMDg3MTY="} github={"https://github.com/RohitShah1706"}/>
                    <NewTeamCard img={"./Eventimages/Dhanvi.jpeg"} name={"Dhanvi Medha"} role={"SPOC/Backend-Developer"} insta={"https://www.instagram.com/dhanvi.medha/"} github={"https://github.com/unbalancedvariance"}/>
                    <NewTeamCard img={"./Eventimages/Rishi.jpeg"} name={"Rishi Dutt"} role={"UI/UX Developer"} insta={""} github={""}/>
                    <NewTeamCard img={"./Eventimages/Subhajeet.jpeg"} name={"Subhajeet Lahiri"} role={"Frontend-Developer"} insta={"https://instagram.com/subhajeetlahiri?igshid=NTdlMDg3MTY="} github={"https://github.com/Heliospook"}/>
                    <NewTeamCard img={"./Eventimages/Kalyan.jpg"} name={"Kalyan Ram"} role={"Frontend-Developer"} insta={"https://instagram.com/kalyanrammunagala?igshid=NmQ2ZmYxZjA="} github={"https://github.com/KalyanRam1234"}/>
                    <NewTeamCard img={"./Eventimages/Vikas2.jpeg"} name={"Vikas Kalyanapuram"} role={"Frontend-Developer"} insta={"https://instagram.com/vkas_13?igshid=NTdlMDg3MTY="} github={"https://github.com/LieutPaul"}/>
                    <NewTeamCard img={"./Eventimages/Amar.jpg"} name={"Amar Pratap Singh"} role={"Backend-Developer"} insta={"https://www.instagram.com/__amar012/"} github={"https://github.com/Amar-Pratap-Singh"}/>
                    
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
            <ScrollToTop>
            <Navbar props={props}></Navbar>
            {/* <TeamTitle/> */}
            <Template/>
            <Footer/>
            </ScrollToTop>
        </div>
    )
}