import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Heading from "./Heading/Heading";
import Container from "./Container/Container";

function RegisterEvent() {
  const about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const other_details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const contacts=[
    {
      name:"PERSON 1",
      number:"+91 99999 99999"
    },
    {
      name:"PERSON 2",
      number:"+91 99999 99999"
    },
    {
      name:"PERSON 3",
      number:"+91 99999 99999"
    }
  ]
  return (
    <div>
      <Navbar/>
      <Heading heading="Event Heading"/>
      <Container 
        prize_money={"Rs. 10000"} 
        about={about} 
        other_details={other_details} 
        contacts={contacts}
        event_fee={200}
        entrance_fee={30}
      />
      <Footer/>
    </div>
  );
}

export default RegisterEvent;