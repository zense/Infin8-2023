import QR from "../../../images/qr-ticket.png"
import Dotted from "../../../images/dottedbox.png"
import './Register.css'
export default function Register(props){
    return (
        <div>
            <div style={{"textAlign":"center"}}>
                <h1 style={{"color":"white","paddingTop":"20px"}}>REGISTER</h1>
            </div>

            <br></br>

            <div className="costDiv">
                Rs. {props.event_fee}
            </div>
            <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                Signed in as {props.email}
            </div>
            
            <br></br>
            
            <div style={{"color":"white", "fontFamily":"Poppins","paddingLeft":"15px"}}>
                <span>Event Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.event_fee}</span>
                <br></br>
                {/* <hr style={{"border":"2px solid", "backgroundColor":"#A23F5f"}}/> */}
                <div style={{"backgroundColor":"white","height":"2px","marginRight":"20px"}}>

                </div>
                <span>Total Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.event_fee}</span>
            </div>

            <div style={{"color":"white","marginTop":"15px"}}>
                <h1 style={{"textAlign":"center"}}>PAYMENT</h1>
                <div style={{"marginLeft":"15px","marginRight":"15px"}}>Pay the above mentioned amount using UPI and 
                upload the receipt screenshot here. Our team will 
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
                        <input type={"file"} id="inputFile" style={{"display":"none"}}></input>
                        <img src={Dotted} className="img-fluid" style={{"paddingRight":"15px","paddingLeft":"15px"}} alt="ScannedQR"/>
                    </div>
                </div>
            </div>
            
            
            
            <div style={{"paddingTop":"15px","textAlign":"center"}}>
                <input placeholder="Enter UPI Transaction ID" id="inputID" style={{"width":"200px"}}/>
                <br></br>
                <button className="btn btn-default" style={{"backgroundColor":"white","marginTop":"20px"}}>Register</button>
            </div>
        </div>
    );
}