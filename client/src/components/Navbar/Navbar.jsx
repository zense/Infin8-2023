import './Navbar.scss';
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { useState } from 'react';

const Navbar = (props) => {
    const [open, setOpen] = useState(false);

    const showMod = () => {
        setOpen(true);
    }
    const hideMod = () => {
        setOpen(false);
    }

    var page = "";
    var displayText = "";

    props.props.loggedInStatus ? page = "#" : page = "sign-in"; 
    props.props.loggedInStatus ? displayText = "Profile" : displayText = "Login"; 

    return <div className="Navbar">
        <div className="largescreens">
            <div className="row navrow">
                <div className="col-3 col-lg-2">
                    <Link to={`../`} className="navbutton">Home </Link>
                </div>
                <div className="col-3 col-lg-2">
                    <Link to={`../events`} className="navbutton">Events </Link>
                </div>
                <div className="col-3 col-lg-2">
                    <a href="#" className="navbutton">
                        Team
                    </a>
                </div>
                <div className="d-none d-lg-block col-lg-4"></div>
                <div className="col-3 col-lg-2">
                    <a href={page} className="navbutton">
                        {displayText}
                    </a>
                </div>
            </div>
        </div>


        <div className="smallscreens">
            <div className="row navrow" onClick={showMod}>
                <a href="#" className="navbutton">
                    Menu
                </a>
            </div>
        </div>

        <Modal show={open} className="NavModal">
            <Modal.Body className="modBody">
                <div className="row buttonrow">
                    <div className="col-6 buttoncol" onClick={hideMod}>
                        <div className='topbutton br'>
                            BACK
                        </div>
                    </div>
                    <div className="col-6  buttoncol">
                        <div className='topbutton bl'>
                            SIGN UP
                        </div>
                    </div>
                </div>
                <div className="row option bt">
                    HOME <BsFillCaretLeftFill color = "white" className='triangle'/>
                </div>
                <div className="row option">
                    EVENTS <BsFillCaretLeftFill color = "white" className='triangle'/>
                </div>
                <div className="row option">
                    TEAM <BsFillCaretLeftFill color = "white" className='triangle'/>
                </div>
                <div className="row space">
                </div>
                <div className="row touch">
                    Get in touch.
                </div>
                <div className="row">
                    <div className="col">
                        <BsTwitter className='icon'></BsTwitter>
                    </div>
                    <div className="col">
                        <BsInstagram  className='icon'></BsInstagram>
                    </div>
                    <div className="col">
                        <BsLinkedin  className='icon'></BsLinkedin>
                    </div>
                    <div className="col">
                        <BsFacebook  className='icon'></BsFacebook>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </div>
}

export default Navbar;