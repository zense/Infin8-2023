import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Heading from "./Heading/Heading";
import Container from "./Container/Container";
import PayBaseFees from "./PayBaseFees/PayBaseFees";
import { useParams } from "react-router-dom";
import eventDetails from "../../content/eventDetails.json";
import { useEffect } from "react";
import { useLocation } from "react-router";
const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{props.children}</>
  };

function RegisterEvent(props) {
  const id = useParams().id;
  let event,prize_money;
  for(var i=0;i<eventDetails.length;i++){
    if(eventDetails[i].id===id){
      event=eventDetails[i];
    }
  }

  if(event.prizes!=="NA"){
    prize_money=parseInt(event.prizes.first,10) + parseInt(event.prizes.second,10)
  }else{
    prize_money="NA"
  }
  return (
    <div style={{"overflowX":"hidden"}}>
      <ScrollToTop>
      <Navbar props={props}/>
      <Heading heading={event.title} deadline={event.registrationDeadline} prizes={prize_money} mode={event.mode} id={event.id}/>
      {/* {
        props.paid_base_fees===true ? 
        <Container 
          prize_money={event.prizes.first} 
          prize_money2={event.prizes.second}
          about={event.description} 
          other_details={event.rules} 
          contacts={event.spocs}
          event_fee={201}
          email={"vikaskaly@gmail.com"}
          team_event={event.team}
          signed_in={props.signed_in}
          registered_for_event={props.registered_for_event}
          id={id}
        />
        :
        <PayBaseFees
          prize_money={event.prizes.first} 
          prize_money2={event.prizes.second}
          about={event.description} 
          other_details={event.rules} 
          contacts={event.spocs}
          email={"vikaskaly@gmail.com"}
          entrance_fee={50}
        />
      } */}
      <Container 
          user_id={props.user.id}
          iiitbStudent={props.user.iiitbStudent}
          prize_money={event.prizes.first} 
          prize_money2={event.prizes.second}
          about={event.description} 
          other_details={event.rules} 
          contacts={event.spocs}
          event_fee={ props.user.iiitbStudent ? 0 : eventDetails[id-1].fee}
          event_limit={eventDetails[id-1].limit}
          loggedInStatus={props.loggedInStatus}
          email={props.user.email}
          team_event={event.team}
          signed_in={props.signed_in}
          registered_for_event={props.registered_for_event}
          event={event}
          id={id}
          entrace_fee={props.entrace_fee}
        />
      {/* <Footer/> */}
      </ScrollToTop>
    </div>
  );
}

export default RegisterEvent;