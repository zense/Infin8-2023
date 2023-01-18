import QR from "../../../images/qr-ticket.png"
import Dotted from "../../../images/dottedbox.png"
import { useNavigate } from "react-router-dom";
import './Register.css'
export default function Register(props){
    
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `pay_base_fees`; 
        navigate(path);
    }
    
    return (
        <div>
            <div style={{"textAlign":"center"}}>
            <h1 style={{"color":"white","paddingTop":"32px", "paddingBottom":"10px","fontSize":"3rem","fontFamily":"Archivo","fontWeight":"700"}}>REGISTER</h1>
            </div>


            <div className="costDiv">
                Rs. {props.event_fee}
            </div>

            {(props.loggedInStatus)
            ? (<div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Signed in as {props.email}
            </div>)
            : (<div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Not Signed In.
            </div>)}
            
            
            <div style={{"color":"white", "fontFamily":"Poppins","paddingLeft":"15px", "paddingTop": "30px"}}>
                <div style={{"paddingBottom": "3px"}}>
                <span>Event Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.event_fee}</span>
                </div>
                {/* <hr style={{"border":"2px solid", "backgroundColor":"#A23F5f"}}/> */}
                <div style={{"backgroundColor":"white","height":"2px","marginRight":"20px"}}>

              </div>
                <div style={{"paddingTop": "3px"}}>
                <span>Total Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.event_fee}</span>
                </div>  
            </div>

            <div style={{"color":"white","marginTop":"30px"}}>
            <h1 style={{"textAlign":"center","fontSize":"3rem","fontFamily":"Archivo","fontWeight":"700"}}>PAYMENT</h1>
                <div style={{"marginLeft":"15px","marginRight":"15px", "marginTop": "15px", "marginBottom": "15px"}}>Pay the above mentioned amount using UPI and 
                        upload the receipt screenshot here, making sure that the UPI reference ID is visible. Our team will 
                        verify the payment. The 'Register' button will turn 
                        to 'Registered ' if it is approved :</div>
            </div>

            <div className="fluid-container">
                <div className="row">
                    <div className="col-6" style={{"paddingLeft":"10px","paddingTop":"20px"}}>
                        <img src={QR} className="img-fluid" style={{"paddingRight":"15px","paddingLeft":"15px"}} alt="QR"/>
                    </div>
                        
                    <div className="col-6 clickk" onClick={()=>{
                        document.getElementById("inputFile").click()
                    }} style={{"paddingTop":"20px"}}>
                        <input type={"file"} id="inputFile" style={{"display":"none"}} accept="image/*" onChange={(e)=>{
                            console.log(e.target.files[0]);
                            //e.target.files[0] can be posted to backend
                            var file=e.target.files[0];
                            var imgtag=document.getElementById("dotted1");
                            var reader=new FileReader();
                            reader.onload=function(event){
                                imgtag.src=event.target.result;
                            };
                            reader.readAsDataURL(file);
                        }}></input>
                        <img src={Dotted} className="img-fluid" id="dotted1" style={{"paddingRight":"15px","paddingLeft":"15px"}} alt="ScannedQR"/>
                    </div>
                </div>
            </div>
            
            
            
            <div style={{"paddingTop":"15px","textAlign":"center"}}>
                <div>
                <input 
                    placeholder="UPI Reference Number" 
                    id="inputID" 
                    style={{"width":"200px"}}
                    onChange={()=>{
                        if(props.paid_base_fees==false){
                            console.log("Hello")
                            window.location.href='/pay_base_fees'
                        }
                    }}
                />
                </div>
                <div>
                <input 
                    placeholder="Enter UPI ID" 
                    id="inputID" 
                    style={{"width":"200px"}}
                    onChange={()=>{
                        if(props.paid_base_fees==false){
                            console.log("Hello")
                            window.location.href='/pay_base_fees'
                        }
                    }}
                />
                </div>
                {props.paid_base_fees === false 
                ?
                <div>
                    <button 
                        disabled
                        className="btn btn-default" 
                        style={{"backgroundColor":"white","marginTop":"25px"}}
                        
                        onClick={()=>{
                            if(props.paid_base_fees==false){
                                window.location.href='/pay_base_fees'
                            }
                        }}>Register</button>
                    
                    <br></br>
                    
                    <button 
                        className="btn btn-default" 
                        style={{"backgroundColor":"white","marginTop":"25px"}}

                        onClick={()=>{
                            window.location.href='/pay_base_fees'
                        }}>Pay Base Fee</button>
                </div>
                :
                <div>
                    <button 
                        className="btn btn-default" 
                        style={{"backgroundColor":"white","marginTop":"25px"}}
                        
                        onClick={()=>{
                            if(props.paid_base_fees==false){
                                window.location.href='/pay_base_fees'
                            }
                        }}>Register</button>
                    
                    {/* <button 
                        className="btn btn-default" 
                        style={{"backgroundColor":"white","marginTop":"25px"}}

                        onClick={()=>{
                            window.location.href='/pay_base_fees'
                        }}>Pay Base Fee</button> */}
                </div>}
            </div>
        </div>
    );
}