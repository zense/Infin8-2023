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

const Navbar = (props) => {
    const [open, setOpen] = React.useState(false);

    const showMod = () => {
        setOpen(true);
    }
    const hideMod = () => {
        setOpen(false);
    }

    var page = "";
    var displayText = "";

    props.props.loggedInStatus ? page = `../profile` : page = `../sign-in`; 
    props.props.loggedInStatus ? displayText = "Profile" : displayText = "Login"; 


    return <div className="Navbar">
        <div className="largescreens">
            <div className="row navrow">
                <div className="mycol">
                    <Link to={`../home`} className="navbutton">Home </Link>
                </div>
                <div className="mycol">
                    <Link to={`../events`} className="navbutton">Events </Link>
                </div>
                <div className="mycolspecial">
                    <Link to={`../contact`} className="navbutton">Contact Us </Link>
                </div>
                <div className="mycol">
                    <Link to={`#`} className="navbutton">Team</Link>
                </div>
                <div className="mycol">
                    <Link to={page} className="navbutton">
                        {displayText}
                    </Link>
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
                            {/* SIGN IN */}
                            <Link to={page} className='white'>
                                {displayText} <BsFillCaretLeftFill color="white" className='triangle' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row option bt">
                    <Link to={`../home`} className='white'>
                        HOME <BsFillCaretLeftFill color="white" className='triangle' />
                    </Link>
                </div>
                <div className="row option">
                    <Link to={`../events`} className='white'>
                        EVENTS <BsFillCaretLeftFill color="white" className='triangle' />
                    </Link>
                </div>
                <div className="row option">
                    <Link to={`../contact`} className='white'>
                        CONTACT US <BsFillCaretLeftFill color="white" className='triangle' />
                    </Link>
                </div>
                <div className="row option">
                    <Link to={`../#`} className='white'>
                        TEAM <BsFillCaretLeftFill color="white" className='triangle' />
                    </Link>
                </div>
                {/* <div className="row option">
                    <Link to={`../profile`} className='white'>
                        PROFILE <BsFillCaretLeftFill color="white" className='triangle' />
                    </Link>
                </div> */}
                <div className="row space">
                </div>
                <div className="row touch">
                    Get in touch.
                </div>
                <div className="row">
                    <div className="col">
                    <a href="https://twitter.com/IIITB_official?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="sociallink">
                        <BsTwitter className='icon'></BsTwitter>
                        </a>
                    </div>
                    <div className="col">
                    <a href="https://instagram.com/infin8_iiitb?igshid=NTdlMDg3MTY=" className="sociallink">
                        <BsInstagram className='icon'></BsInstagram>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.linkedin.com/school/iiitbofficial/" className="sociallink">
                        <BsLinkedin className='icon'></BsLinkedin>
                        </a>
                    </div>
                    <div className="col">
                    <a href="https://m.facebook.com/IIITBofficial/" className="sociallink">
                        <BsFacebook className='icon'></BsFacebook>
                        </a>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </div>
}

export default Navbar;