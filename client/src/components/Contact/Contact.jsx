import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {BiPhone} from 'react-icons/bi'
import { MdMail } from "react-icons/md";
import Arrow from '../../images/finalarrow.png'
import './Contact.scss';
function ContactCard(props){
    return (
        <div className="col-9" style={{"marginBottom" :"70px"}}>
            <div className="row">
                <div className="col-lg-6 col-md-8 ">
                    <div className="person"><BsFillPersonFill className="edit" /> {props.name}</div>
                    <div className="extra"><BiPhone className="edit" size={35}/> {props.contact}</div>
                    <div className="extra"><MdMail size={35}/> {props.email}</div>
                </div>
                <div className="col-lg-6 col-md-4 alignment">
                    <a href="mailto:sac@iiitb.ac.in" style={{"textDecoration": "none", "color":"black"}}>
                    <button className="btn btn-default font" style={{"backgroundColor":"white"}} >Contact Us <img src={Arrow} style={{"marginTop" : "-2px", "marginLeft": "12px"}} /></button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default function Contact(props){
    return (
        <div style={{"overflow-x" : "hidden"}}>
        <Navbar props={props}/>
        <div className="Contacts_style ContactPage">
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="row titlerow">
                        CONTACT US
                    </div>
                    
                </div>
            </div>
            <div className="row idc" >
            <ContactCard name={"Asrith Nune"} contact={"+91 9492824058"} email={"sac@iiitb.ac.in"}/>
                <ContactCard name={"VL Sahithi"} contact={"+91 8374150444"} email={"sac@iiitb.ac.in"}/>
            </div>
        </div>
        <Footer />
        </div>
    )
}
