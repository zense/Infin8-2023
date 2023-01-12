import './Home.scss';

import Faq from './components/Faq/Faq';
import TimeLine from './components/Timeline/TimeLine';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Jump from './components/Jump/Jump';
import Title from './components/Title/Title';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

function Home() {
  return (
    <div >
      {/* <Navbar></Navbar> */}
      <Title></Title>
      <About></About>
      <Jump></Jump>
      <TimeLine></TimeLine>
      <Gallery></Gallery>
      <Faq></Faq>
      {/* <div className='space'></div>
      <Footer></Footer> */}
    </div>
  );
}

export default Home;
