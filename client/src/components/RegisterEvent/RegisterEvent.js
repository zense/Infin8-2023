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
  let event;
  for(var i=0;i<eventDetails.length;i++){
    if(eventDetails[i].id===id){
      event=eventDetails[i];
    }
  }
  return (
    <div style={{"overflowX":"hidden"}}>
      <ScrollToTop>
      <Navbar/>
      {/* If user is not logged in, should we print the pay base fees page or the regular event page */}
      <Heading heading={event.title} paid_base_fees={props.paid_base_fees} deadline={event.registrationDeadline} prizes={parseInt(event.prizes.first,10) + parseInt(event.prizes.second,10)} mode={event.mode}/>       {/*If paid_base_fees is false, heading will always be "Pay Base Fees"*/}
      {
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
          entrance_fee={200}
        />
      }
      <Footer/>
      </ScrollToTop>
    </div>
  );
}

export default RegisterEvent;