import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React from "react";
import './Contact.scss';

export default function Contact(){
    return (
        <>
            <Navbar />
                <div className="Contacts_style ContactPage" >
                    <div className="row">
                        <div className="col-12 col-md-7" >
                            <div className="row titlerow">
                                CONTACT US
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}
