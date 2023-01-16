import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React from "react";
import './Contact.scss';
function ContactCard(props){
    return (
        <div className="col-7">
            <div className="row">
                <div className="col-md-6">
                    <div className="person">Person 1</div>
                    <div className="extra">+91 99999 99999 </div>
                    <div className="extra">person@gmail.com </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}
export default function Contact(){

    return (
        <>
        <Navbar />
        <div className="ContactPage">
            <div className="row">
                <div className="col-12">
                    <div className="Contact">
                        CONTACT
                    </div>
                    <div className="US">
                        {">"} us.
                    </div>
                </div>
            </div>
            <div className="row">
                <ContactCard />
            </div>
        </div>
        <Footer />
        </>
    )
}