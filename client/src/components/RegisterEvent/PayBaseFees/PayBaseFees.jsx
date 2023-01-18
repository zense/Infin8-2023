// import arrow from '../../Vector1.png'
import EntranceRegister from "../EntranceRegister/EntranceRegister";
import './PayBaseFees.scss'
import {BiPhone} from 'react-icons/bi'
import Navbar from "../../Navbar/Navbar";
import { useState } from "react";

export default function PayBaseFees(props){

    return (
        <div className="container-fluid px-0" style={{"overflowX":"hidden"}}>
            {/* <Navbar /> */}
            
            <div className="PayBaseFeesTitle">
                    <div className='titlename'>
                        <div className="row">
                            <div className="col-12 col-md-7" >
                                <div className="row titlerow">
                                    Pay Base Fees
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div style={{"padding":"50px 30px 20px 30px","marginLeft":"0"}} className="row">
                <div className='col-7' style={{"backgroundColor":"#FF5C00","padding":"20px 20px 20px 20px","color":"white","fontFamily":"Poppins"}}>
                    <h1 style={{color:"white"}}>DISCLAIMER</h1>
                    <h6>You need to pay this fee only once</h6>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-8 col-12" style={{"paddingRight":"0"}}>
                    <div style={{"padding":"20px 0 20px 0","textIndent": "1em"}} className="row">
                        <div className='col-11' style={{"backgroundColor":"#FFCD00","padding":"20px 0 20px 0","paddingLeft":"20px","boxShadow": "0px 5px 5px grey"}}>
                            <h1 style={{"fontWeight":"700","fontFamily": "Gloria Hallelujah"}}>CONTACTS</h1>
                        </div>
                    </div>

                    <div style={{"padding":"20px 30px 20px 30px"}}> 
                        { (props.contacts).map((contact,index)=>{
                            return(
                                <div key={index}>
                                    <h4 style={{"fontFamily":"Archivo","fontWeight":"600"}}><BiPhone/>  {contact.name}</h4>
                                    <h5 style={{"fontFamily":"Poppins","color":"#575757"}}>{contact.contact}</h5>
                                    <br></br>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="col-md-4 col-12" style={{"backgroundColor":"black"}}>
                    <EntranceRegister
                        loggedInStatus={props.loggedInStatus}
                        user_id={props.user_id}
                        event_id={0}
                        entrance_fee={props.entrance_fee}
                        email={props.email}
                    />
                    
                </div>  
                
            </div>
            
        
        </div>
    );
}

// If user is not signed in, render NotSignedIn