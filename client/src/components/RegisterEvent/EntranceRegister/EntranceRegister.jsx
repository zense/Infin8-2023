import QR from "../../../images/qr-ticket.png"
import Dotted from "../../../images/dottedbox.png"
import './EntranceRegister.css'
export default function EntranceRegister(props){
    return (
        <div>
            <div style={{"textAlign":"center"}}>
                <h1 style={{"color":"white","paddingTop":"32px" , "paddingBottom": "10px"}}>REGISTER</h1>
            </div>


            <div className="costDiv" >
                Rs. {props.entrance_fee}
            </div>
            <div style={{"fontFamily": 'Poppins',"fontStyle": "normal","color":"#888888","paddingTop":"15px","marginLeft":"2.7vw"}}>
                ⓘ Signed in as {props.email}
            </div>

            
            <div style={{"color":"white", "fontFamily":"Poppins","paddingLeft":"15px" , "padding-top": "30px"}}>
                <div style={{"padding-bottom": "3px"}}>
                <span>Entrance Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.entrance_fee}</span>
                </div>
                {/* <hr style={{"border":"2px solid", "backgroundColor":"#A23F5f"}}/> */}
                <div style={{"backgroundColor":"white","height":"2px","marginRight":"20px"}}>

                </div>
                <div style={{"padding-top": "3px"}}>
                <span>Total Fee</span><span style={{"float":"right","paddingRight":"50px"}}>Rs. {props.entrance_fee}</span>
                </div>
            </div>

            <div style={{"color":"white","marginTop":"30px" }}>
                <h1 style={{"textAlign":"center"}}>PAYMENT</h1>
                <div style={{"marginLeft":"15px","marginRight":"15px", "marginTop": "15px", "marginBottom": "15px"}}>Pay the above mentioned amount using UPI and 
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
                        <input type={"file"} id="inputFile" style={{"display":"none"}} accept="image/*" onChange={(e)=> {
                            console.log(e.target.files[0]);
                            //e.target.files[0] can be posted to backend
                            var file=e.target.files[0];
                            var imgtag=document.getElementById("dotted");
                            var reader=new FileReader();
                            reader.onload=function(event){
                                imgtag.src=event.target.result;
                            };
                            reader.readAsDataURL(file);
                        }}></input>
                        <img src={Dotted} className="img-fluid" id="dotted" style={{"paddingRight":"15px","paddingLeft":"15px"}} alt="ScannedQR"/>
                    </div>
                </div>
            </div>
            
            
            
            <div style={{"paddingTop":"15px","textAlign":"center"}}>
                <div>
                <input placeholder="Enter UPI Transaction ID" id="inputID" style={{"width":"200px"}}/>
                </div>
                <button className="btn btn-default" style={{"backgroundColor":"white","marginTop":"25px"}}>Register</button>
            </div>
        </div>
    );
}