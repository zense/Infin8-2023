// import arrow from '../../Vector1.png'
import EntranceRegister from "../EntranceRegister/EntranceRegister";
export default function PayBaseFees(props){

    return (
        <div className="container-fluid px-0" >
            
            <div className="row">
                <div className="col-md-8 col-12" style={{"paddingRight":"0"}}>

                    <div style={{"border":"1px solid black","padding":"20px 0 20px 0","textIndent": "1em"}}>
                        <h1 style={{"fontWeight":"700"}}>CONTACTS</h1>
                    </div>

                    <div style={{"border":"1px solid black","padding":"20px 30px 20px 30px"}}> 
                        { (props.contacts).map((contact,index)=>{
                            return(
                                <div key={index}>
                                    <h4 style={{"fontFamily":"Archivo","fontWeight":"600"}}>{contact.name}</h4>
                                    <h5 style={{"fontFamily":"Poppins","color":"#575757"}}>{contact.number}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="col-md-4 col-12" style={{"backgroundColor":"black"}}>
                    <EntranceRegister
                        entrance_fee={props.entrance_fee}
                        email={props.email}
                    />
                    

                    {/* <NotSignedIn/>  */} 
                    
                </div>  
                
            </div>
            
        
        </div>
    );
}

// If user is not signed in, render NotSignedIn