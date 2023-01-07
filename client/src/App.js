import './App.scss';

import Faq from './components/Faq/Faq';
import TimeLine from './components/Timeline/TimeLine';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Jump from './components/Jump/Jump';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Title></Title>
      <About></About>
      <Jump></Jump>
      <TimeLine></TimeLine>
      <Gallery></Gallery>
      <Faq></Faq>
      <div className='space'></div>
    </div>
  );
}

export default App;
