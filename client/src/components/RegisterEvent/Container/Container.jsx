// import arrow from '../../Vector1.png'
import Register from '../Register/Register';
import RegisterTeam from "../RegisterTeam/RegisterTeam.jsx"
import NotSignedIn from "../NotSignedIn/NotSignedIn.jsx"
import Registered from '../Registered/Registered';
import EntranceRegister from '../EntranceRegister/EntranceRegister';
import { BiPhone, BiRepost } from 'react-icons/bi'
import './Container.scss'
function PrizeMoney(props) {
    if (props.id == 10) {
        return <div>
            <h2 style={{ "fontWeight": "500" }}>Mr. Infin8 : {props.prize_money}</h2>
            <br></br>
            <h2 className='worthPrizePool'>Ms. Infin8 : {props.prize_money2}</h2>
        </div>
    }
    else if (props.id == 16) {
        return <div>
            <h2 style={{ "fontWeight": "500" }}>First Prize : {props.prize_money} + Onesta Pizza</h2>
        </div>
    }
    return <div>
        <h2 style={{ "fontWeight": "500" }}>First Prize : {props.prize_money}</h2>
        <br></br>
        <h2 className='worthPrizePool'>Second Prize : {props.prize_money2}</h2>
    </div>

}
export default function Container(props) {
    console.log(props.iiitbStudent+" "+props.id);
    return (
        <div className="container-fluid p-0" style={{ "padding": "0px" }}>

            <div className="row">
                <div className="col-md-8 col-12">

                    {(props.id != 1 && props.id != 3) &&
                        <div style={{ "marginTop": "20px", "padding": "20px 0 20px 0", "textIndent": "1em" }} className="row">
                            <div className='col-11' style={{ "backgroundColor": "#FFCD00", "padding": "20px 0 20px 30px", "boxShadow": "0px 5px 5px grey" }}>
                                <h1 style={{ "fontWeight": "700", "fontFamily": "Gloria Hallelujah" }}>INCENTIVES</h1>
                            </div>
                        </div>
                    }

                    {props.id != 1 && props.id != 3 &&
                        <div style={{ "padding": "20px 0 20px 25px", "textIndent": "1em", "fontFamily": "Poppins" }}>
                            <PrizeMoney id={props.id} prize_money={props.prize_money} prize_money2={props.prize_money2} />
                        </div>
                    }


                    <div style={{ "padding": "20px 0 20px 0", "textIndent": "1em" }} className="row">
                        <div className='col-11' style={{ "backgroundColor": "#FFCD00", "padding": "20px 0 20px 30px", "boxShadow": "0px 5px 5px grey" }}>
                            <h1 style={{ "fontWeight": "700", "fontFamily": "Gloria Hallelujah" }}>ABOUT</h1>
                        </div>
                    </div>

                    <div style={{ "padding": "20px 30px 20px 30px", "marginLeft": "0" }} className="row">
                        <div className='col-11' style={{ "backgroundColor": "#005EB4", "padding": "20px 20px 20px 20px", "color": "white", "fontFamily": "Poppins", "borderRadius": "0px 20px 20px 20px" }}>
                            <p>{props.about}
                            {props.id==1 &&
                                <div style={{"color":"gold"}}>
                                    <br></br><br></br>
                                    YOU could be the lucky winner!!
                                    Every person (not from IIITB) who enters Infin8 on 11th Feb gets added to a lucky draw. The winners get a pass to MAD MIX  on 11th Feb 23 @ 6pm!!

                                    Want to increase your odds?

                                    Winners of the following events gets passes too:
                                    <ol>
                                        <li>Sargam</li>
                                        <li>Chitrakarma</li>
                                        <li>Nritta</li>
                                        <li>Ramp it up</li>
                                        <li>E sports CODM</li>
                                    </ol>
                                    Finally, some game stalls are hiding a few passes as well. Win (maybe gamble?) your way to own those tickets.

                                    So, do come hang out with us at Infin8 2023 - Eat, play, compete and enjoy! All with the incentive of possibly experiencing some rib tickling comedy from some of the country;s finest comedians.
                                </div>
                            }
                            </p>
                        </div>
                    </div>

                    {(props.id != 1 && props.id != 3) &&
                        <div style={{ "padding": "20px 0 20px 0", "textIndent": "1em" }} className="row">
                            <div className='col-11' style={{ "backgroundColor": "#FFCD00", "padding": "20px 0 20px 30px", "boxShadow": "0px 5px 5px grey" }}>
                                <h1 style={{ "fontWeight": "700", "fontFamily": "Gloria Hallelujah" }}>RULES</h1>
                            </div>
                        </div>
                    }
                    {(props.id != 1 && props.id != 3) &&
                        <div style={{ "padding": "20px 30px 20px 30px", "marginLeft": "0" }} className="row">
                            <div className='col-11' style={{ "backgroundColor": "#005EB4", "padding": "20px 20px 20px 20px", "color": "white", "fontFamily": "Poppins", "borderRadius": "0px 20px 20px 20px" }}>
                                <ol>
                                    
                                    {props.other_details.map((string, index) => {
                                        var stringArr=string.split(" ");
                                        for(var i=0;i<stringArr.length;i++){
                                            var word=stringArr[i];
                                            if(word.includes("http")){
                                                word="<a target=\"blank\" href=\"" + word + "\" class='changechan'> here"+"</a>"
                                            }
                                            stringArr[i]=word
                                        }
                                        string = stringArr.join(" ")
                                        return (<li className='listing' key={index} dangerouslySetInnerHTML={{__html: string}}>
                                                </li>
                                                );
                                        
                                    })
                                    }
                                    </ol>
                            </div>
                        </div>
                    }

                    <div style={{ "padding": "20px 0 20px 0", "textIndent": "1em" }} className="row">
                        <div className='col-11' style={{ "backgroundColor": "#FFCD00", "padding": "20px 0 20px 0", "paddingLeft": "20px", "boxShadow": "0px 5px 5px grey" }}>
                            <h1 style={{ "fontWeight": "700", "fontFamily": "Gloria Hallelujah" }}>CONTACTS</h1>
                        </div>
                    </div>

                    <div style={{ "padding": "20px 30px 20px 30px" }}>
                        {(props.contacts).map((contact, index) => {
                            return (
                                <div key={index}>
                                    <h4 style={{ "fontFamily": "Archivo", "fontWeight": "600" }}><BiPhone />  {contact.name}</h4>
                                    <h5 style={{ "fontFamily": "Poppins", "color": "#575757" }}>{contact.contact}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="col-md-4 col-12" style={{"paddingBottom":"30px", "backgroundColor": "black" }}>
                    
                    {/* Div to be removed after server works.
                    <div className='col-12 Disclaimer' style={{"padding":"20px 20px 20px 20px","color":"white","fontFamily":"Poppins"}}>
                        <div>
                        We are facing some technical difficulties with our server, please check again in some time.
                        </div>
                    </div> */}

                    {
                        props.id == 1 || props.id == 3 ?
                            <Registered cannot_register={true} event_closed={false} loggedInStatus={props.signed_in} email={props.email} />
                            :
                                props.signed_in === false ?
                                    <NotSignedIn  event_fee={props.event_fee} event_id={props.id}/>
                                :
                                    (props.id==13) && (props.iiitbStudent === false)?
                                         
                                         <Registered cannot_register={true} event_closed={false} loggedInStatus={props.signed_in} email = {props.email}/>
                                            
                                    :
                                        props.registered_for_event === true ?
                                            <Registered cannot_register={false} loggedInStatus={props.signed_in} email={props.email} team_event={props.team_event}
                                                team_members={["TeamMember1","TeamMember2","TeamMember3"]}
                                            />
                                            :                               
                                                
                                                    props.team_event === true ? 
                                                        <RegisterTeam
                                                            event_id={props.id}
                                                            user_id={props.user_id}
                                                            user_name={props.user_name}
                                                            user_contact={props.user_contact}
                                                            fee={props.event_fee}
                                                            iiitbStudent={props.iiitbStudent}
                                                            loggedInStatus={props.signed_in}
                                                            email={props.email}
                                                            limit={props.event_limit}
                                                        />
                                                        :
                                                        <Register
                                                            event_id={props.id}
                                                            user_id={props.user_id}
                                                            user_name={props.user_name}
                                                            user_contact={props.user_contact}
                                                            iiitbStudent={props.iiitbStudent}
                                                            event_fee={props.event_fee}
                                                            loggedInStatus={props.signed_in}
                                                            email={props.email}
                                                            event={props.event}
                                                        />
                                                    

                                                
                                                    
                    }
                </div>
            </div>

        </div>

    );
}

// Register is for individual events when user is signed in
// RegisterTeam is for team events when user is logged in
// NotSignedIn is for when User isn't Signed in
// Registered is when user has registered for the event.

// Whether the user has signed in or not needs to be taken from props