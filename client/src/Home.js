import './Home.scss';
import arrow from './images/downrightthin.svg'
import Faq from './components/Faq/Faq';
import TimeLine from './components/Timeline/TimeLine';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Title></Title>
      <About></About>
      <div className="Jump">
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
      </div>
      <Gallery></Gallery>
      <TimeLine></TimeLine>
      <Faq></Faq>
      <div className='space'></div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
