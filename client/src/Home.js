import './Home.scss';
import arrow from './images/downrightthin.svg'
import Faq from './components/Faq/Faq';
import TimeLine from './components/Timeline/TimeLine';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function Home(props) {
  return (
    <div className='App'>
      <Navbar props={props}></Navbar>
      <Title></Title>
      <About
      title = "ABOUT"
      subtitle = "infin8"
      content = "IIIT Bangalore is back with a BANG with its 8th iteration of INFIN8- BIGGER and BETTER than before. Hold on to your seats as we present to you the largest and most exciting fest of our institute! A plethora of events awaits you to showcase your inner artist: War of words, Esports, Digital Art, Photography, Singing and Dance competitions and a lot more! Join in and be a part of this fun ride along with us @IIIT Bangalore. See you at the starting point of a marathon of mind-boggling, rib-tickling and adrenaline pumping events!"
      ></About>
      {/* <div className="Jump">
        <a href='#Timeline'>
          <div className="row jump1">
            <div className="col-8 col-md-10">
              <h1 className="title">
                Checkout the Timeline of all Events.
              </h1>
            </div>
            <div className="col-4 col-md-2 arrowcol">
              <div className="arrowdiv">
                <img src={arrow} alt="image" className="arrow" />
              </div>
            </div>
          </div>
        </a>

        <a href="#Gallery">
          <div className="row jump2">
            <div className="col-8 col-md-10">
              <h1 className="title">
                Skip to the Gallery of Big Events.
              </h1>
            </div>
            <div className="col-4 col-md-2 arrowcol">
              <div className="arrowdiv">
                <img src={arrow} alt="image" className="arrow" />
              </div>
            </div>
          </div>
        </a>
      </div> */}
      <Gallery></Gallery>
      <About
      title = "FUN"
      subtitle = "zone"
      content = {<>Get ready for some non-stop fun and excitement at the Fun Zone of our college cultural fest! The game street is where all the action is, with a wide variety of exciting stalls to choose from. Put your skills to the test with sports stalls, and test your luck at our mini casino with games like black jack, deal or no deal and bluff. If you're looking for something a bit more lighthearted, try your hand at some classic carnival games like cups and balls. <br/> But the fun doesn't end there! The food street offers a delicious array of treats from popular restaurants like Onesta and KFC, and the perfect place to take a break from the excitement of the game street. And if you're feeling lucky, keep an eye out for special events that give you a chance to win tickets to the stand-up comedy event. <br/> Don't miss out on this ultimate fun experience, where you can take part in exciting games and indulge in some delicious food. The Fun Zone is guaranteed to be the highlight of the cultural fest and an unforgettable experience you won't want to miss!d adrenaline pumping events!"
      </>}
      ></About>
      <TimeLine></TimeLine>
      <Faq></Faq>
      <div className='space'></div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
